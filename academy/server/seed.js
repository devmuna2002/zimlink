import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb, closeDb } from './db.js';
import { courses, tracks } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');

function j(v){ return v==null ? null : JSON.stringify(v); }

async function seed(){
  const db = getDb();
  console.log('Seeding academy.db ...');
  db.exec('BEGIN TRANSACTION;');
  // Clear existing (keep users/progress if you want, but for full reseed we clear courses/tracks)
  db.exec(`
    DELETE FROM personal_notes;
    DELETE FROM exam_attempts;
    DELETE FROM tracking;
    DELETE FROM certificates;
    DELETE FROM completed_lessons;
    DELETE FROM enrollments;
    DELETE FROM lessons;
    DELETE FROM chapters;
    DELETE FROM courses;
    DELETE FROM tracks;
    DELETE FROM qualifications;
  `);

  const insertCourse = db.prepare(`
    INSERT INTO courses (id, slug, title, short, description, level, duration, hours, xp, category, instructor, instructor_title, instructor_bio, rating, students, image, color, icon, tags, prerequisites, learning_outcomes, skills, difficulty, resources, qualification, capstone, advanced, video_library, community_features, job_keywords)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertChapter = db.prepare(`INSERT INTO chapters (id, course_id, title, duration, sort_order) VALUES (?, ?, ?, ?, ?)`);
  const insertLesson = db.prepare(`
    INSERT INTO lessons (id, chapter_id, course_id, type, title, duration, xp, logo, content, instructions, language, starter_code, solution, hint, tests, youtube_id, pdf_url, revision, notes, questions, question, options, answer, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertTrack = db.prepare(`INSERT INTO tracks (id, slug, title, description, level, duration, courses_json, projects, icon, color, jobs, certificate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const insertQual = db.prepare(`INSERT INTO qualifications (id, course_id, code, title, level, eqf, rqf, credits, notional_hours, validity_years, awarding_body, regulated, assessment, competencies, exam_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  let totalLessons=0;
  for(const c of courses){
    // handle duplicate slug (mlops vs mlops-deployment)
    let slugToUse = c.slug;
    try{
      insertCourse.run(
        c.id, slugToUse, c.title, c.short||null, c.description||null, c.level||null, c.duration||null, c.hours||null, c.xp||null, c.category||null,
        c.instructor||null, c.instructorTitle||null, c.instructorBio||null, c.rating||null, c.students||null, c.image||null, c.color||null, c.icon||null,
        j(c.tags), j(c.prerequisites), j(c.learningOutcomes), j(c.skills), c.difficulty||null, j(c.resources), j(c.qualification), j(c.capstone), j(c.advanced), j(c.videoLibrary), j(c.communityFeatures), j(c.jobConnectionsKeywords)
      );
    } catch(e){
      if(String(e.message).includes('UNIQUE') && String(e.message).includes('slug')){
        slugToUse = c.slug + '-' + c.id;
        console.log(`Slug collision ${c.slug} -> ${slugToUse} for ${c.id}`);
        insertCourse.run(
          c.id, slugToUse, c.title, c.short||null, c.description||null, c.level||null, c.duration||null, c.hours||null, c.xp||null, c.category||null,
          c.instructor||null, c.instructorTitle||null, c.instructorBio||null, c.rating||null, c.students||null, c.image||null, c.color||null, c.icon||null,
          j(c.tags), j(c.prerequisites), j(c.learningOutcomes), j(c.skills), c.difficulty||null, j(c.resources), j(c.qualification), j(c.capstone), j(c.advanced), j(c.videoLibrary), j(c.communityFeatures), j(c.jobConnectionsKeywords)
        );
        c.slug = slugToUse; // update for chapters/lessons FK
      } else throw e;
    }
    if(c.qualification){
      const q=c.qualification;
      try{
        insertQual.run(q.code||c.id, c.id, q.code, q.title, q.level||null, q.eqf||null, q.rqf||null, q.credits||null, q.notionalHours||null, q.validityYears||null, q.awardingBody||null, q.regulated||null, q.assessment||null, j(q.competencies), q.examId||null);
      }catch(e){ /* duplicate code */ }
    }
    let chOrder=0;
    for(const ch of c.chapters){
      insertChapter.run(ch.id, c.id, ch.title, ch.duration||null, chOrder++);
      let lOrder=0;
      for(const l of ch.lessons){
        insertLesson.run(
          l.id, ch.id, c.id, l.type, l.title, l.duration||null, l.xp||null, l.logo||null, l.content||null, l.instructions||null, l.language||null,
          l.starterCode||null, l.solution||null, l.hint||null, j(l.tests), l.youtubeId||null, l.pdfUrl||null, l.revision||null, j(l.notes), j(l.questions||l.question?null:l.questions), l.question||null, j(l.options), l.answer??null, lOrder++
        );
        totalLessons++;
      }
    }
  }
  for(const t of tracks){
    insertTrack.run(t.id, t.slug, t.title, t.description||null, t.level||null, t.duration||null, j(t.courses), t.projects||null, t.icon||null, t.color||null, t.jobs||null, t.certificate||null);
  }

  // Seed users/progress/tracking from existing JSON files if present
  const usersPath = path.join(DATA_DIR, 'users.json');
  const progressPath = path.join(DATA_DIR, 'progress.json');
  const trackingPath = path.join(DATA_DIR, 'tracking.json');
  const insertUser = db.prepare(`INSERT OR IGNORE INTO users (id, name, email, password_hash, xp, streak, created_at, last_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
  const insertEnroll = db.prepare(`INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?, ?)`);
  const insertCompleted = db.prepare(`INSERT OR IGNORE INTO completed_lessons (user_id, course_id, lesson_id, chapter_id, xp) VALUES (?, ?, ?, ?, ?)`);
  const insertCert = db.prepare(`INSERT OR IGNORE INTO certificates (id, user_id, course_id, course_title, verify_url, xp, issued_at) VALUES (?, ?, ?, ?, ?, ?, ?)`);
  const insertTracking = db.prepare(`INSERT OR IGNORE INTO tracking (id, user_id, course_id, lesson_id, chapter_id, action, meta, timestamp, ua) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  let users = [];
  try{ if(fs.existsSync(usersPath)) users = JSON.parse(fs.readFileSync(usersPath,'utf-8')); }catch{}
  if(Array.isArray(users)){
    for(const u of users){
      insertUser.run(u.id, u.name||u.email?.split('@')[0]||'User', u.email, u.password||'', u.xp||0, 1, u.createdAt||new Date().toISOString(), null);
    }
  }
  // ensure guest exists
  const guestExists = db.prepare(`SELECT 1 FROM users WHERE id='guest'`).get();
  if(!guestExists){
    insertUser.run('guest','Guest','guest@zimlink.local','',0,1,new Date().toISOString(),null);
  }

  let progress = {};
  try{ if(fs.existsSync(progressPath)) progress = JSON.parse(fs.readFileSync(progressPath,'utf-8')); }catch{ progress={}; }
  for(const [userId, p] of Object.entries(progress)){
    // ensure user exists
    if(!db.prepare(`SELECT 1 FROM users WHERE id=?`).get(userId)){
      insertUser.run(userId, userId, `${userId}@local`, '', p.xp||0, p.streak||1, new Date().toISOString(), p.lastActive||null);
    } else {
      db.prepare(`UPDATE users SET xp=?, last_active=? WHERE id=?`).run(p.xp||0, p.lastActive||null, userId);
    }
    for(const cid of (p.enrolled||[])){
      try{ insertEnroll.run(userId, cid); }catch{}
    }
    for(const [cid, lids] of Object.entries(p.completed||{})){
      for(const lid of (lids||[])){
        // find chapter for lesson
        const row = db.prepare(`SELECT chapter_id FROM lessons WHERE id=? AND course_id=?`).get(lid, cid);
        const chap = row?.chapter_id || null;
        try{ insertCompleted.run(userId, cid, lid, chap, 50); }catch{}
      }
    }
    for(const cert of (p.certificates||[])){
      try{ insertCert.run(cert.id, userId, cert.courseId, cert.courseTitle||'', cert.verifyUrl||'', cert.xp||0, cert.issuedAt||new Date().toISOString()); }catch{}
    }
  }

  let tracking = [];
  try{ if(fs.existsSync(trackingPath)) tracking = JSON.parse(fs.readFileSync(trackingPath,'utf-8')); }catch{ tracking=[]; }
  if(Array.isArray(tracking)){
    for(const t of tracking.slice(-5000)){ // last 5k
      try{ insertTracking.run(t.id, t.userId||'guest', t.courseId||null, t.lessonId||null, t.chapterId||null, t.action||'unknown', j(t.meta), t.timestamp||new Date().toISOString(), t.ua||''); }catch{}
    }
  }

  db.exec('COMMIT;');
  const stats = db.prepare(`SELECT (SELECT COUNT(*) FROM courses) as courses, (SELECT COUNT(*) FROM lessons) as lessons, (SELECT COUNT(*) FROM users) as users, (SELECT COUNT(*) FROM tracking) as tracking`).get();
  console.log(`Seeded: ${stats.courses} courses, ${stats.lessons} lessons (${totalLessons}), ${stats.users} users, ${stats.tracking} tracking`);
  console.log(`DB: ${path.join(DATA_DIR,'academy.db')}`);
  // quick sanity: check 50 lines notes
  const sample = db.prepare(`SELECT notes FROM lessons LIMIT 1`).get();
  if(sample) console.log('Sample notes lines:', JSON.parse(sample.notes).length);
  closeDb();
}

seed().catch(e=>{ console.error(e); process.exit(1); });
