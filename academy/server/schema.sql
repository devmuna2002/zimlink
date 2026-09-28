-- ZimLink Academy — Full System Database Schema (SQLite, Node 22+ node:sqlite)
-- Covers: users, courses, chapters, lessons, tracks, enrollments, progress, certificates, tracking, exams
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;

-- Users (auth + profile + gamification)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, -- u_xxx
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL, -- base64
  avatar TEXT,
  xp INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  last_active TEXT
);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Courses (50, enriched to 51 with exam)
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  short TEXT,
  description TEXT,
  level TEXT, -- Beginner/Intermediate/Advanced
  duration TEXT, -- "10 hours"
  hours INTEGER,
  xp INTEGER,
  category TEXT NOT NULL, -- Foundations/Programming/ML/DL/GenAI/NLP/CV/MLOps/Ethics
  instructor TEXT,
  instructor_title TEXT,
  instructor_bio TEXT,
  rating REAL,
  students INTEGER,
  image TEXT,
  color TEXT,
  icon TEXT,
  tags TEXT, -- JSON array
  prerequisites TEXT, -- JSON
  learning_outcomes TEXT, -- JSON
  skills TEXT, -- JSON
  difficulty TEXT,
  resources TEXT, -- JSON
  qualification TEXT, -- JSON
  capstone TEXT, -- JSON
  advanced TEXT, -- JSON
  video_library TEXT, -- JSON
  community_features TEXT, -- JSON
  job_keywords TEXT, -- JSON
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level);

-- Chapters (per course, ordered)
CREATE TABLE IF NOT EXISTS chapters (
  id TEXT NOT NULL,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  duration TEXT,
  sort_order INTEGER NOT NULL,
  PRIMARY KEY (course_id, id)
);
CREATE INDEX IF NOT EXISTS idx_chapters_course ON chapters(course_id);

-- Lessons (51 per course, video/exercise/quiz/exam, plain-paper 50 notes)
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('video','exercise','quiz','exam')),
  title TEXT NOT NULL,
  duration TEXT,
  xp INTEGER,
  logo TEXT, -- URL
  content TEXT, -- markdown/HTML
  instructions TEXT,
  language TEXT, -- python/javascript/java/etc.
  starter_code TEXT,
  solution TEXT,
  hint TEXT,
  tests TEXT, -- JSON [{input,expected}]
  youtube_id TEXT, -- e.g., mEsleV16qdo, gfkTfcpWqAY
  pdf_url TEXT,
  revision TEXT,
  notes TEXT, -- JSON array of 50 strings
  questions TEXT, -- JSON [{q,a}] or quiz [{question,options,answer}]
  question TEXT, -- quiz single
  options TEXT, -- JSON
  answer INTEGER,
  sort_order INTEGER NOT NULL,
  PRIMARY KEY (course_id, id),
  FOREIGN KEY (course_id, chapter_id) REFERENCES chapters(course_id, id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_lessons_course ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_chapter ON lessons(chapter_id);
CREATE INDEX IF NOT EXISTS idx_lessons_type ON lessons(type);

-- Tracks (career/skill, e.g., AI Engineer)
CREATE TABLE IF NOT EXISTS tracks (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT,
  duration TEXT,
  courses_json TEXT NOT NULL, -- JSON array of course ids
  projects INTEGER,
  icon TEXT,
  color TEXT,
  jobs TEXT,
  certificate TEXT
);

-- Enrollments (user → course)
CREATE TABLE IF NOT EXISTS enrollments (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  PRIMARY KEY (user_id, course_id)
);
CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_id);

-- Completed lessons (progress per user/course/lesson)
CREATE TABLE IF NOT EXISTS completed_lessons (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  chapter_id TEXT,
  xp INTEGER,
  completed_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  PRIMARY KEY (user_id, course_id, lesson_id),
  FOREIGN KEY (course_id, lesson_id) REFERENCES lessons(course_id, id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_completed_user_course ON completed_lessons(user_id, course_id);

-- Certificates (earned on 100% course completion)
CREATE TABLE IF NOT EXISTS certificates (
  id TEXT PRIMARY KEY, -- ZL-xxxx
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  course_title TEXT NOT NULL,
  verify_url TEXT NOT NULL,
  xp INTEGER,
  issued_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_cert_user ON certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_cert_course ON certificates(course_id);

-- Tracking (every lesson action, 20k cap)
CREATE TABLE IF NOT EXISTS tracking (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id TEXT,
  lesson_id TEXT,
  chapter_id TEXT,
  action TEXT NOT NULL, -- video_play, exercise_submit, quiz_answer, lesson_view, etc.
  meta TEXT, -- JSON
  timestamp TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  ua TEXT
);
CREATE INDEX IF NOT EXISTS idx_tracking_user ON tracking(user_id);
CREATE INDEX IF NOT EXISTS idx_tracking_course ON tracking(course_id);
CREATE INDEX IF NOT EXISTS idx_tracking_action ON tracking(action);
CREATE INDEX IF NOT EXISTS idx_tracking_time ON tracking(timestamp);

-- Exam attempts (qualifying exams, practical)
CREATE TABLE IF NOT EXISTS exam_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  exam_id TEXT NOT NULL, -- exam-* or id from qualification
  course_id TEXT REFERENCES courses(id) ON DELETE SET NULL,
  score REAL,
  passed INTEGER, -- 0/1
  answers TEXT, -- JSON
  attempted_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_exam_user ON exam_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_exam_course ON exam_attempts(course_id);

-- Qualifications (RQF/EQF, per course)
CREATE TABLE IF NOT EXISTS qualifications (
  id TEXT PRIMARY KEY, -- code
  course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  level TEXT,
  eqf TEXT,
  rqf TEXT,
  credits INTEGER,
  notional_hours INTEGER,
  validity_years INTEGER,
  awarding_body TEXT,
  regulated TEXT,
  assessment TEXT,
  competencies TEXT, -- JSON
  exam_id TEXT
);

-- Personal notes (plain-paper handwriting, per user/lesson, 50 lines synced)
CREATE TABLE IF NOT EXISTS personal_notes (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  PRIMARY KEY (user_id, lesson_id),
  FOREIGN KEY (course_id, lesson_id) REFERENCES lessons(course_id, id) ON DELETE CASCADE
);

-- Views for stats
CREATE VIEW IF NOT EXISTS v_course_stats AS
SELECT c.id, c.slug, c.title, c.category, COUNT(DISTINCT ch.id) AS chapters, COUNT(l.id) AS lessons, SUM(l.xp) AS total_xp
FROM courses c
LEFT JOIN chapters ch ON ch.course_id=c.id
LEFT JOIN lessons l ON l.course_id=c.id
GROUP BY c.id;

CREATE VIEW IF NOT EXISTS v_user_progress AS
SELECT u.id AS user_id, u.name, u.email, COUNT(DISTINCT cl.course_id) || '/' || (SELECT COUNT(*) FROM courses) AS enrolled_ratio, COALESCE(SUM(cl.xp),0) AS xp
FROM users u
LEFT JOIN completed_lessons cl ON cl.user_id=u.id
GROUP BY u.id;
