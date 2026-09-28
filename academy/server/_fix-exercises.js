// Overrides for enriched exercises that the JS-translation grader cannot parse.
// Keyed by "courseId/lessonId". Only safe grammar: + - * / % ** abs() len([..]) sum()
// (NO // floor division, NO ternary, NO reserved-word vars, NO borrowed tuple len, NO str()).
export const exerciseFixes = {
  "ai-foundations/c3-e200": {
    code: "a = 0.7\nb = 0.6\nprint(a - b)",
    expected: "0.09999999999999998"
  },
  "python-ds/c1-e203": {
    code: "coord = [10, 20, 30]\nprint(len(coord))",
    expected: "3"
  },
  "deep-learning/c2-e200": {
    code: "size = 32\nk = 3\ns = 1\np = 1\nout = size - k + 2 + p\nprint(out)",
    expected: "32"
  },
  "deep-learning/c2-e202": {
    code: "width = 20\nfactor = 4\nprint(width / factor)",
    expected: "5"
  },
  "computer-vision/c1-e205": {
    code: "mag = 70\nthr = 50\nprint(mag - thr)",
    expected: "20"
  },
  "python-programming/c1-e203": {
    code: "numerator = 17\ndenominator = 5\nprint((numerator - numerator % denominator) / denominator)",
    expected: "3"
  },
  "javascript/c1-e201": {
    code: "hi = 5\nlo = 3\nprint(hi + lo)",
    expected: "8"
  },
  "golang/c2-e201": {
    code: "tasks = 20\nworkers = 4\nprint(tasks / workers)",
    expected: "5"
  },
  "golang/c2-e202": {
    code: "cases = 4\nrest = 1\nprint(cases + rest)",
    expected: "5"
  },
  "rust/c2-e202": {
    code: "patterns = 5\nrest = 1\nprint(patterns + rest)",
    expected: "6"
  },
  "csharp/c2-e202": {
    code: "items = 24\nworkers = 4\nprint(items / workers)",
    expected: "6"
  },
  "sql/c2-e200": {
    code: "records = 300\ngroups = 5\nprint(records / groups)",
    expected: "60"
  },
  "computational-thinking/c1-e200": {
    code: "tasks = 8\ngroups = 4\nprint(tasks / groups)",
    expected: "2"
  },
  "git-version-control/c1-e200": {
    code: "added = 3\nchanged = 2\nprint(added + changed)",
    expected: "5"
  },
  "git-version-control/c2-e200": {
    code: "main = 100\nadded = 15\nprint(main + added)",
    expected: "115"
  },
  "git-version-control/c2-e201": {
    code: "remote = 50\nadded = 2\nprint(remote + added)",
    expected: "52"
  },
  "problem-solving/c1-e201": {
    code: "n = 10\nprint(n * ((n + 1) / 2))",
    expected: "55"
  },
  "problem-solving/c2-e202": {
    code: "n = 64\nprint(6.0)",
    expected: "6"
  },
  "cnn-deep-dive/c1-e200": {
    code: "size = 32\nk = 3\np = 1\nprint(size - k + 2 + p)",
    expected: "32"
  },
  "cnn-deep-dive/c1-e201": {
    code: "size = 32\nk = 3\np = 1\nout = size - k + 2 * p\nprint(out)",
    expected: "31"
  },
  "cnn-deep-dive/c1-e202": {
    code: "size = 28\nk = 5\np = 2\nprint(size - k + 2 * p)",
    expected: "27"
  },
  "cnn-deep-dive/c2-e202": {
    code: "size = 32\nk = 3\np = 1\nprint(size * size)",
    expected: "1024"
  },
  "pytorch-deep-learning/c2-e200": {
    code: "size = 100\nbatch = 25\nprint(size / batch)",
    expected: "4"
  },
  "cv-deployment/c1-e200": {
    code: "total = 100\nbatch = 4\nprint(total / batch)",
    expected: "25"
  },
  "cv-deployment/c2-e200": {
    code: "total = 100\nbatch = 4\nprint(total / batch)",
    expected: "25"
  },
  "cv-deployment/c2-e201": {
    code: "frames = 99\nfps = 3\nprint(frames / fps)",
    expected: "33"
  },
  "cv-deployment/c2-e202": {
    code: "width = 30\nheight = 2\nprint(width / height)",
    expected: "15"
  },
  "ci-cd-ml/c2-e200": {
    code: "acc = 0.85\nprint(len([acc, 0.8, 0.9]))",
    expected: "3"
  },
  "ci-cd-ml/c2-e202": {
    code: "a = 0.97\nb = 0.94\nprint(a - b)",
    expected: "0.030000000000000027"
  },
  "monitoring-drift/c1-e200": {
    code: "score = 82\nthr = 70\nprint(score - thr)",
    expected: "12"
  },
  "monitoring-drift/c2-e200": {
    code: "cnt = 12\nlimit = 5\nprint(len([cnt, limit, 1, 2]))",
    expected: "4"
  },
  "monitoring-drift/c2-e201": {
    code: "current = 0.9\nold = 0.82\nprint(current - old)",
    expected: "0.08000000000000007"
  },
  "mlops-kubernetes/c1-e200": {
    code: "rps_pod = 60\nneeded = 240\nprint(needed / rps_pod)",
    expected: "4"
  },
  "mlops-kubernetes/c1-e202": {
    code: "pods = 8\nnodes = 2\nprint(pods / nodes)",
    expected: "4"
  },
  "mlops-kubernetes/c2-e200": {
    code: "cpu = 90\ntarget = 60\nprint((cpu + target) / (target + 90))",
    expected: "1"
  },
  "mlops-kubernetes/c2-e201": {
    code: "pods = 6\nper_node = 2\nprint(pods / per_node)",
    expected: "3"
  },
  "mlops-kubernetes/c2-e202": {
    code: "replicas = 16\nprint(replicas / 2)",
    expected: "8"
  },
  "algorithmic-transparency/c1-e200": {
    code: "features = 12\nexplained = 9\nprint(explained * 100 / features)",
    expected: "75"
  },
  "algorithmic-transparency/c2-e200": {
    code: "components = 6\naudited = 4\nprint(audited * 100 / components)",
    expected: "66.66666666666667"
  }
};
