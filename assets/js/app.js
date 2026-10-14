/* ============================================================
   考研数学拿高分 · 主逻辑
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 工具 ---------------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------------- 数学 + Markdown 渲染 ---------------- */
  const MATH_RE = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;

  function renderMath(text) {
    if (text == null) return '';
    const store = [];
    let s = String(text).replace(MATH_RE, function (m, block, inline) {
      const tex = block !== undefined ? block : inline;
      const display = block !== undefined;
      let html;
      try {
        html = window.katex.renderToString(String(tex).trim(), {
          displayMode: display, throwOnError: false, strict: false,
          trust: true, output: 'html'
        });
      } catch (e) {
        html = '<code>' + esc(tex) + '</code>';
      }
      store.push(html);
      return '\u0000M' + (store.length - 1) + '\u0000';
    });

    let out;
    try {
      out = window.marked.parse(s, { breaks: true, gfm: true });
    } catch (e) {
      out = '<p>' + esc(s) + '</p>';
    }
    out = out.replace(/\u0000M(\d+)\u0000/g, (_, i) => store[+i] || '');
    // 把 【考点】 之类高亮
    out = out.replace(/【考点】/g, '<span class="tag-kao">考点</span>');
    out = out.replace(/※/g, '<b style="color:#c9a961">※</b>');
    return out;
  }

  /* ---------------- 视图路由 ---------------- */
  const VIEWS = ['home', 'formulas', 'conclusions', 'bank', 'exams', 'guide'];
  function go(name) {
    if (VIEWS.indexOf(name) < 0) name = 'home';
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
    $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.nav === name));
    $('#mainNav').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'auto' });
    location.hash = name;
    if (name === 'formulas' && !state.formulaInit) initFormulas();
    if (name === 'conclusions' && !state.conclInit) initConclusions();
    if (name === 'bank' && !state.bankInit) initBank();
    if (name === 'exams' && !state.examInit) initExams();
    if (name === 'guide' && !state.guideInit) initGuide();
  }

  const state = {
    formulaInit: false, conclInit: false, bankInit: false,
    examInit: false, guideInit: false,
    curSection: null, bankSubject: '高等数学', bankChapter: null,
    examYear: null, examSubject: null, answers: {}
  };

  /* ---------------- 飘落竹叶 ---------------- */
  function initLeaves() {
    const box = $('#bgLeaves');
    if (!box) return;
    const n = window.innerWidth < 700 ? 9 : 16;
    let html = '';
    for (let i = 0; i < n; i++) {
      const dur = (13 + Math.random() * 15).toFixed(1);
      const delay = (-Math.random() * 26).toFixed(1);
      const left = (Math.random() * 100).toFixed(1);
      const sc = (0.6 + Math.random() * 1.1).toFixed(2);
      const hue = Math.random() > 0.6 ? 'rgba(201,169,97,.35)' : 'rgba(122,196,158,.42)';
      html += '<i class="leaf" style="left:' + left + '%;animation-duration:' + dur
        + 's;animation-delay:' + delay + 's;transform:scale(' + sc + ');'
        + 'background:linear-gradient(120deg,' + hue + ',transparent)"></i>';
    }
    box.innerHTML = html;
  }

  /* ---------------- 首页 Hero ---------------- */
  const QUOTES = [
    { t: '天才需要 1% 的智慧\n和 99% 的汗水', s: '—— 爱迪生', f: "'STXingkai','华文行楷','KaiTi',serif", c: 's-plain' },
    { t: '所有的质变\n都是量变的积累', s: '你现在算的每一道题，都在改变结局', f: "'STLiti','隶书','SimSun',serif", c: '' },
    { t: '数学不会骗人\n你投入多少，它就还你多少', s: '最公平的一门课', f: "'KaiTi','楷体',serif", c: 's-gold' },
    { t: '考研不是比谁聪明\n是比谁坐得住', s: '坐得住冷板凳的人，最后都上岸了', f: "'STZhongsong','华文中宋','SimSun',serif", c: '' },
    { t: '与其焦虑\n不如做一道题', s: '行动是焦虑唯一的解药', f: "'FangSong','仿宋','SimSun',serif", c: 's-log' },
    { t: '别人放弃的时候\n你还在，你就赢了', s: '考场上从来不缺开始的人，缺的是坚持到底的人', f: "'YouYuan','幼圆','Microsoft YaHei',sans-serif", c: '' },
    { t: '现在多算一道题\n考场上少流一滴泪', s: '没有白走的路，每一步都算数', f: "'STXingkai','华文行楷','KaiTi',serif", c: 's-red' },
    { t: '你只管努力\n剩下的交给时间', s: '时间从不辜负认真的人', f: "'STLiti','隶书','SimSun',serif", c: 's-gold' },
    { t: '坚持到最后一科交卷\n你已经赢过一半人', s: '—— 坚持就是胜利', f: "'KaiTi','楷体',serif", c: 's-log' },
    { t: '不要因为走得慢\n就否定走过的路', s: '慢一点没关系，别停就好', f: "'STZhongsong','华文中宋','SimSun',serif", c: '' }
  ];

  let heroIdx = 0, heroTimer = null, charTimers = [];

  function playSlide(slide) {
    if (!slide) return;
    charTimers.forEach(t => clearTimeout(t));
    charTimers = [];
    const chs = $$('.ch', slide);
    const subs = $$('.slide-sub, .slide-src', slide);
    chs.forEach(c => c.classList.remove('in'));
    subs.forEach(c => c.classList.remove('in'));
    chs.forEach((c, j) => {
      charTimers.push(setTimeout(() => c.classList.add('in'), 80 + j * 62));
    });
    charTimers.push(setTimeout(() => subs.forEach(c => c.classList.add('in')), 80 + chs.length * 62 + 120));
  }

  function buildHero() {
    const wrap = $('#heroSlides'), dots = $('#heroDots');
    wrap.innerHTML = QUOTES.map((q, i) => {
      const chars = q.t.split('').map(ch => {
        if (ch === '\n') return '<br>';
        return '<span class="ch">' + esc(ch) + '</span>';
      }).join('');
      return '<div class="slide ' + q.c + (i === 0 ? ' on' : '') + '">'
        + '<div class="slide-main" style="font-family:' + q.f + '">' + chars + '</div>'
        + (q.s ? '<div class="slide-sub">' + esc(q.s) + '</div>' : '')
        + '</div>';
    }).join('');
    dots.innerHTML = QUOTES.map((_, i) =>
      '<i class="' + (i === 0 ? 'on' : '') + '" data-i="' + i + '"></i>').join('');

    dots.addEventListener('click', e => {
      const i = e.target.dataset.i;
      if (i != null) showSlide(+i);
    });
  }

  function showSlide(i) {
    heroIdx = (i + QUOTES.length) % QUOTES.length;
    const slides = $$('#heroSlides .slide');
    const dots = $$('#heroDots i');
    slides.forEach((s, k) => s.classList.toggle('on', k === heroIdx));
    dots.forEach((d, k) => d.classList.toggle('on', k === heroIdx));
    playSlide(slides[heroIdx]);
    restartHeroTimer();
  }

  function restartHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showSlide(heroIdx + 1), 7600);
  }

  function initHeroSwipe() {
    const hero = $('#hero');
    let sx = 0, sy = 0, dragging = false, locked = false;
    const start = e => {
      const p = e.touches ? e.touches[0] : e;
      sx = p.clientX; sy = p.clientY; dragging = true; locked = false;
      clearInterval(heroTimer);
    };
    const move = e => {
      if (!dragging) return;
      const p = e.touches ? e.touches[0] : e;
      const dx = p.clientX - sx, dy = p.clientY - sy;
      if (!locked) {
        if (Math.abs(dx) > 12 || Math.abs(dy) > 12) locked = true;
        else return;
      }
      if (Math.abs(dx) > Math.abs(dy) && e.cancelable) e.preventDefault();
    };
    const end = e => {
      if (!dragging) return;
      dragging = false;
      const p = e.changedTouches ? e.changedTouches[0] : e;
      const dx = p.clientX - sx, dy = p.clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        showSlide(heroIdx + (dx < 0 ? 1 : -1));
      } else restartHeroTimer();
    };
    hero.addEventListener('touchstart', start, { passive: true });
    hero.addEventListener('touchmove', move, { passive: false });
    hero.addEventListener('touchend', end);
    hero.addEventListener('mousedown', start);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    document.addEventListener('keydown', e => {
      if (!$('#view-home').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') showSlide(heroIdx - 1);
      if (e.key === 'ArrowRight') showSlide(heroIdx + 1);
    });
  }

  function buildHomeEntries() {
    const F = window.KY_FORMULAS || [];
    const B = window.KY_BANK || [];
    const E = window.KY_EXAMS || [];
    const C = window.KY_CONCLUSIONS || [];
    const nSec = F.reduce((a, b) => a + b.chapters.reduce((x, c) => x + c.sections.length, 0), 0);
    const nQ = B.reduce((a, c) => a + c.questions.length, 0);
    const nE = E.reduce((a, e) => a + e.sections.reduce((x, s) => x + s.items.length, 0), 0);

    $('#homeStats').innerHTML = [
      [nSec, '公式小节'], [nQ, '精编习题'], [nE, '真题收录'], [C.length, '秒杀结论']
    ].map(x => '<div class="stat"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>').join('');

    $('#homeEntries').innerHTML = [
      ['formulas', '公式与结论全库', '高数 / 线代 / 概率，按章节编排，含考点提示'],
      ['conclusions', '二级结论 · 多级结论', '考场秒杀利器，省下一半时间'],
      ['bank', '题库刷题', '198 道精编题，客观题自动判分，主观题手写作答'],
      ['exams', '历年真题', '2018—2025 年数学一/二/三，含答案与解析'],
      ['guide', '备考指南', '零基础起步、时间分配、高频考点地图']
    ].map(x => '<div class="entry" data-nav="' + x[0] + '"><h3>' + x[1] + '</h3><p>'
      + x[2] + '</p><span class="entry-arrow">→</span></div>').join('');
  }

  /* ---------------- 公式库 ---------------- */
  function initFormulas() {
    state.formulaInit = true;
    const tree = $('#formulaTree');
    const F = window.KY_FORMULAS || [];

    tree.innerHTML = F.map(big =>
      '<div class="tree-big"><h4>' + esc(big.title) + '</h4>' +
      big.chapters.map((ch, ci) => {
        const open = (big.id === 'g0' && ci === 0) ? ' open' : '';
        return '<div class="tree-chap' + open + '" data-chap="' + ch.id + '">'
          + '<span class="caret">▶</span><span>' + esc(ch.title) + '</span></div>'
          + '<div class="tree-secs">' + ch.sections.map(s =>
            '<div class="tree-sec" data-sec="' + s.id + '">' + esc(s.title) + '</div>').join('')
          + '</div>';
      }).join('') + '</div>').join('');

    tree.addEventListener('click', e => {
      const chap = e.target.closest('.tree-chap');
      if (chap) { chap.classList.toggle('open'); return; }
      const sec = e.target.closest('.tree-sec');
      if (sec) showSection(sec.dataset.sec);
    });

    // 搜索
    let timer = null;
    $('#formulaSearch').addEventListener('input', e => {
      clearTimeout(timer);
      const q = e.target.value.trim();
      timer = setTimeout(() => searchFormula(q), 220);
    });

    // 默认打开第一节
    const first = F[0] && F[0].chapters[0] && F[0].chapters[0].sections[0];
    if (first) showSection(first.id);
  }

  function findSection(id) {
    for (const b of (window.KY_FORMULAS || []))
      for (const c of b.chapters)
        for (const s of c.sections)
          if (s.id === id) return { big: b, chap: c, sec: s };
    return null;
  }

  function showSection(id) {
    const hit = findSection(id);
    if (!hit) return;
    state.curSection = id;
    $$('#formulaTree .tree-sec').forEach(el => el.classList.toggle('active', el.dataset.sec === id));
    const chapEl = $('#formulaTree .tree-chap[data-chap="' + hit.chap.id + '"]');
    if (chapEl) chapEl.classList.add('open');
    $('#formulaContent').innerHTML =
      '<div class="md-body"><h3>' + esc(hit.sec.title) + '</h3>' + renderMath(hit.sec.md) + '</div>';
    $('#formulaContent').scrollTop = 0;
  }

  function searchFormula(q) {
    const box = $('#formulaContent');
    if (!q) {
      if (state.curSection) showSection(state.curSection);
      return;
    }
    const kw = q.toLowerCase();
    const res = [];
    for (const b of (window.KY_FORMULAS || []))
      for (const c of b.chapters)
        for (const s of c.sections) {
          const hay = (s.title + ' ' + s.md).toLowerCase();
          if (hay.indexOf(kw) >= 0) res.push({ big: b, chap: c, sec: s });
        }
    if (!res.length) {
      box.innerHTML = '<div class="placeholder">没有找到含「' + esc(q) + '」的内容</div>';
      return;
    }
    box.innerHTML = '<div class="md-body"><h3>搜索「' + esc(q) + '」· 命中 ' + res.length + ' 节</h3>'
      + res.map(r => {
        const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        const snippet = r.sec.md.length > 420 ? r.sec.md.slice(0, 420) + '…' : r.sec.md;
        return '<h4 style="cursor:pointer" class="jump" data-sec="' + r.sec.id + '">'
          + esc(r.big.title) + ' › ' + esc(r.chap.title) + ' › ' + esc(r.sec.title) + '</h4>'
          + '<div>' + renderMath(snippet) + '</div><hr>';
      }).join('') + '</div>';
    $$('.jump', box).forEach(el => el.addEventListener('click', () => showSection(el.dataset.sec)));
  }

  /* ---------------- 二级结论 ---------------- */
  function initConclusions() {
    state.conclInit = true;
    const C = window.KY_CONCLUSIONS || [];
    const cats = ['全部'].concat(Array.from(new Set(C.map(x => x.cat))));
    $('#conclFilter').innerHTML = cats.map((c, i) =>
      '<button class="' + (i === 0 ? 'on' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>').join('');
    renderConcl('全部');
    $('#conclFilter').addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('#conclFilter button').forEach(x => x.classList.toggle('on', x === b));
      renderConcl(b.dataset.cat);
    });
  }

  function renderConcl(cat) {
    const C = (window.KY_CONCLUSIONS || []).filter(x => cat === '全部' || x.cat === cat);
    $('#conclWrap').innerHTML = C.map(x =>
      '<div class="concl-card"><h3>' + esc(x.title) + '</h3>'
      + '<div class="md-body">' + renderMath(x.md) + '</div></div>').join('');
  }

  /* ---------------- 题库 ---------------- */
  function initBank() {
    state.bankInit = true;
    const B = window.KY_BANK || [];
    const subjects = Array.from(new Set(B.map(c => c.subject)));
    $('#bankSubject').innerHTML = subjects.map((s, i) =>
      '<button class="' + (i === 0 ? 'on' : '') + '" data-sub="' + esc(s) + '">' + esc(s) + '</button>').join('');

    $('#bankSubject').addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('#bankSubject button').forEach(x => x.classList.toggle('on', x === b));
      state.bankSubject = b.dataset.sub;
      state.bankChapter = null;
      renderBankChapters();
      renderBank();
    });

    renderBankChapters();
    renderBank();

    $('#bankShuffle').addEventListener('click', () => {
      state.bankShuffle = !state.bankShuffle;
      $('#bankShuffle').textContent = state.bankShuffle ? '恢复顺序' : '随机顺序';
      renderBank();
    });
    $('#bankReset').addEventListener('click', () => {
      Object.keys(state.answers).forEach(k => {
        if (k.indexOf('bank:') === 0) delete state.answers[k];
      });
      saveAnswers(); renderBank();
      $('#bankResult').classList.remove('show');
    });
    $('#bankGrade').addEventListener('click', gradeBank);
  }

  function renderBankChapters() {
    const B = window.KY_BANK || [];
    const chs = B.filter(c => c.subject === state.bankSubject);
    $('#bankChapter').innerHTML = '<button class="on" data-ch="">全部章节</button>'
      + chs.map(c => '<button data-ch="' + esc(c.chapter) + '">' + esc(c.chapter) + '</button>').join('');
    $$('#bankChapter button').forEach(b => b.onclick = () => {
      $$('#bankChapter button').forEach(x => x.classList.toggle('on', x === b));
      state.bankChapter = b.dataset.ch || null;
      renderBank();
    });
  }

  function bankQuestions() {
    const B = window.KY_BANK || [];
    let list = [];
    B.filter(c => c.subject === state.bankSubject)
      .filter(c => !state.bankChapter || c.chapter === state.bankChapter)
      .forEach(c => c.questions.forEach(q => list.push({ q: q, ch: c.chapter, sub: c.subject })));
    if (state.bankShuffle) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    return list;
  }

  const DIFF = { 1: '基础', 2: '中档', 3: '拔高' };
  const TYPE = { choice: '单项选择', fill: '填空', solve: '解答' };

  function renderBank() {
    const list = bankQuestions();
    const box = $('#bankList');
    if (!list.length) { box.innerHTML = '<div class="placeholder">该章节暂无题目</div>'; return; }

    box.innerHTML = list.map((it, i) => {
      const q = it.q;
      const key = 'bank:' + it.sub + ':' + it.ch + ':' + i;
      it._key = key;
      const a = state.answers[key] || {};
      let body = '<div class="q-stem md-body">' + renderMath(q.stem) + '</div>';

      if (q.type === 'choice') {
        const keys = ['A', 'B', 'C', 'D', 'E', 'F'];
        body += '<div class="q-opts">' + (q.opts || []).map((o, k) =>
          '<div class="q-opt' + (a.pick === keys[k] ? ' sel' : '') + '" data-key="' + key + '" data-pick="' + keys[k] + '">'
          + '<span class="k">' + keys[k] + '</span><span class="md-body" style="display:inline">' + renderMath(o) + '</span></div>'
        ).join('') + '</div>';
      } else if (q.type === 'fill') {
        body += '<div class="q-fill"><input type="text" placeholder="在此输入你的答案（可选）" '
          + 'data-fill="' + key + '" value="' + esc(a.text || '') + '">'
          + '<span class="q-verdict" data-verdict="' + key + '"></span></div>';
      }

      body += '<div class="q-tools">'
        + '<button class="btn small" data-write="' + key + '" data-title="' + esc('第 ' + (i + 1) + ' 题 · ' + it.ch) + '">✎ 开始答题</button>'
        + '<button class="btn small" data-show="' + key + '">查看答案</button>'
        + (q.type !== 'choice' ? '<button class="btn small" data-self="' + key + '" data-v="1">✔ 我答对了</button>'
          + '<button class="btn small" data-self="' + key + '" data-v="0">✘ 答错了</button>' : '')
        + '</div>'
        + '<div class="q-sol" data-sol="' + key + '"><span class="lab">答案与解析</span><div class="md-body">'
        + (q.answer ? '<p><b>答案：</b>' + renderMath(String(q.answer)) + '</p>' : '')
        + (q.solution ? renderMath(q.solution) : '<p>暂无解析</p>')
        + (q.src ? '<p style="color:#7b9a89;font-size:12.5px">来源：' + esc(q.src) + '</p>' : '')
        + '</div></div>';

      return '<div class="q-card" data-card="' + key + '">'
        + '<div class="q-head"><span class="q-no">' + (i + 1) + '</span>'
        + '<span class="q-type">' + TYPE[q.type] + '</span>'
        + '<span class="q-diff">' + (DIFF[q.diff] || '中档') + '</span>'
        + '<span class="q-src">' + esc(it.sub) + ' · ' + esc(it.ch) + '</span></div>'
        + body + '</div>';
    }).join('');

    bindBankEvents();
    updateBankProgress();
  }

  function bindBankEvents() {
    const box = $('#bankList');
    box.onclick = e => {
      const opt = e.target.closest('.q-opt');
      if (opt) {
        const key = opt.dataset.key, pick = opt.dataset.pick;
        const a = state.answers[key] || (state.answers[key] = {});
        a.pick = pick;
        $$('.q-opt[data-key="' + CSS.escape(key) + '"]').forEach(x =>
          x.classList.toggle('sel', x.dataset.pick === pick));
        saveAnswers(); updateBankProgress();
        return;
      }
      const sh = e.target.closest('[data-show]');
      if (sh) {
        const el = $('[data-sol="' + CSS.escape(sh.dataset.show) + '"]');
        if (el) el.classList.toggle('show');
        return;
      }
      const sf = e.target.closest('[data-self]');
      if (sf) {
        const key = sf.dataset.self;
        const a = state.answers[key] || (state.answers[key] = {});
        a.self = sf.dataset.v === '1';
        const v = $('[data-verdict="' + CSS.escape(key) + '"]');
        if (v) { v.textContent = a.self ? '已标记：答对' : '已标记：答错'; v.className = 'q-verdict ' + (a.self ? 'ok' : 'no'); }
        saveAnswers(); updateBankProgress();
        return;
      }
      const wr = e.target.closest('[data-write]');
      if (wr) { openPad(wr.dataset.title || '开始答题'); return; }
    };
    box.oninput = e => {
      const inp = e.target.closest('[data-fill]');
      if (!inp) return;
      const key = inp.dataset.fill;
      const a = state.answers[key] || (state.answers[key] = {});
      a.text = inp.value;
      saveAnswers(); updateBankProgress();
    };
  }

  function updateBankProgress() {
    const list = bankQuestions();
    let done = 0;
    list.forEach((it, i) => {
      const key = 'bank:' + it.sub + ':' + it.ch + ':' + i;
      const a = state.answers[key];
      if (a && (a.pick || (a.text && a.text.trim()) || a.self !== undefined)) done++;
    });
    const pct = list.length ? Math.round(done / list.length * 100) : 0;
    $('#bankProgress').innerHTML = '<span>已作答 ' + done + ' / ' + list.length + '</span>'
      + '<span class="bar"><i style="width:' + pct + '%"></i></span><span>' + pct + '%</span>';
  }

  function gradeBank() {
    const list = bankQuestions();
    let right = 0, wrong = 0, blank = 0, total = 0, got = 0;
    list.forEach((it, i) => {
      const q = it.q, key = 'bank:' + it.sub + ':' + it.ch + ':' + i;
      const a = state.answers[key] || {};
      const card = $('[data-card="' + CSS.escape(key) + '"]');
      if (q.type === 'choice') {
        total++;
        const ans = String(q.answer || '').trim().toUpperCase();
        if (!a.pick) { blank++; if (card) card.classList.add('wrong'); }
        else if (a.pick === ans) {
          right++; got++;
          if (card) card.classList.add('right');
          $$('.q-opt[data-key="' + CSS.escape(key) + '"]').forEach(x => {
            if (x.dataset.pick === ans) x.classList.add('ok');
          });
        } else {
          wrong++;
          if (card) card.classList.add('wrong');
          $$('.q-opt[data-key="' + CSS.escape(key) + '"]').forEach(x => {
            if (x.dataset.pick === ans) x.classList.add('ok');
            if (x.dataset.pick === a.pick) x.classList.add('no');
          });
        }
      } else {
        total++;
        if (a.self === true) { right++; got++; if (card) card.classList.add('right'); }
        else if (a.self === false) { wrong++; if (card) card.classList.add('wrong'); }
        else blank++;
      }
      // 展开解析
      const sol = $('[data-sol="' + CSS.escape(key) + '"]');
      if (sol) sol.classList.add('show');
    });
    const score = total ? Math.round(got / total * 100) : 0;
    $('#bankResult').innerHTML =
      '<div class="big">' + score + ' 分</div>'
      + '<div class="sub">本卷 ' + total + ' 题　正确 ' + right + '　错误 ' + wrong + '　未答 ' + blank + '</div>'
      + '<div class="sub" style="margin-top:10px;color:#8fa89a">选择题由系统自动判分；填空题与解答题按你的自评计入。'
      + '解析已全部展开，向上滚动逐题复盘。</div>';
    $('#bankResult').classList.add('show');
    $('#bankResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ---------------- 真题 ---------------- */
  function initExams() {
    state.examInit = true;
    const E = window.KY_EXAMS || [];
    const years = Array.from(new Set(E.map(e => e.year))).sort((a, b) => b - a);
    const countOf = y => E.filter(e => e.year === y)
      .reduce((a, e) => a + e.sections.reduce((x, s) => x + s.items.length, 0), 0);

    // 默认落在收录题数最多的那一年，避免一进来看到空卷
    let best = years[0], bestN = -1;
    years.forEach(y => { const n = countOf(y); if (n > bestN) { bestN = n; best = y; } });

    $('#examYear').innerHTML = years.map(y =>
      '<button class="' + (y === best ? 'on' : '') + '" data-year="' + y + '">' + y + ' 年'
      + '<span style="opacity:.55;font-size:11.5px;margin-left:5px">' + countOf(y) + ' 题</span></button>').join('');
    state.examYear = best;
    renderExamSubjects();

    $('#examYear').addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('#examYear button').forEach(x => x.classList.toggle('on', x === b));
      state.examYear = +b.dataset.year;
      renderExamSubjects();
      renderExam();
    });
    renderExam();
  }

  function renderExamSubjects() {
    const E = (window.KY_EXAMS || []).filter(e => e.year === state.examYear);
    $('#examSubject').innerHTML = E.map((e, i) =>
      '<button class="' + (i === 0 ? 'on' : '') + '" data-sub="' + esc(e.subject) + '">' + esc(e.subject) + '</button>').join('');
    state.examSubject = E[0] ? E[0].subject : null;
    $$('#examSubject button').forEach(b => b.onclick = () => {
      $$('#examSubject button').forEach(x => x.classList.toggle('on', x === b));
      state.examSubject = b.dataset.sub;
      renderExam();
    });
  }

  const CONF_CLASS = { '原文': 't-orig', 'OCR': 't-ocr', '回忆版': 't-memo' };
  const CONF_LABEL = { '原文': '原文', 'OCR': 'OCR 还原', '回忆版': '回忆版' };

  function renderExam() {
    const E = (window.KY_EXAMS || []).filter(e =>
      e.year === state.examYear && e.subject === state.examSubject)[0];
    const paper = $('#examPaper'), note = $('#examNote');
    if (!E) { paper.innerHTML = '<div class="placeholder">暂无该套真题</div>'; note.innerHTML = ''; return; }

    const cls = CONF_CLASS[E.conf] || (E.conf.indexOf('OCR') >= 0 ? 't-ocr' : 't-memo');
    const label = CONF_LABEL[E.conf] || E.conf;
    note.innerHTML = '可信度：<span class="badge ' + cls.replace('t-', '') + '">' + esc(label) + '</span>　'
      + esc(E.structure)
      + '　·　真题正文全网多为图片或付费文档，凡标「待核验」处请以官方原卷为准。';

    let idx = 0;
    paper.innerHTML =
      '<div class="paper-head"><h2>' + E.year + ' 年全国硕士研究生招生考试</h2>'
      + '<div class="meta"><span>数学（' + esc(E.subject.replace('数学', '')) + '）</span>'
      + '<span>' + esc(E.structure) + '</span><span>满分 150 分 · 考试时间 180 分钟</span></div></div>'
      + E.sections.map(sec =>
        '<div class="exam-sec"><h3>' + esc(sec.name) + '</h3>'
        + '<div class="sec-note">' + esc(sec.note) + '</div>'
        + sec.items.map(it => {
          idx++;
          const key = 'exam:' + E.id + ':' + idx;
          const tag = it.conf
            ? '<span class="eq-tag ' + (CONF_CLASS[it.conf] || 't-ocr') + '">' + esc(CONF_LABEL[it.conf] || it.conf) + '</span>'
            : '';
          return '<div class="eq" data-eq="' + key + '">'
            + '<span class="eq-no">' + esc(String(it.no).replace('【', '').replace('】', '')) + '</span>'
            + '<div class="eq-stem md-body">' + renderMath(it.stem) + tag + '</div>'
            + (it.opts ? '<div class="eq-opts">' + it.opts.map((o, k) =>
              '<div class="md-body" style="display:inline">' + 'ABCDEF'[k] + '．' + renderMath(o) + '</div>').join('') + '</div>' : '')
            + '<div class="eq-acts">'
            + '<button class="btn small" data-eq-show="' + key + '">查看答案</button>'
            + '<button class="btn small" data-eq-write="' + key + '" data-title="' + esc(E.year + ' ' + E.subject + ' 第 ' + it.no + ' 题') + '">✎ 开始答题</button>'
            + '</div>'
            + '<div class="eq-ans" data-eq-ans="' + key + '">'
            + (it.answer ? '<p><span class="k">答案：</span>' + renderMath(String(it.answer)) + '</p>' : '')
            + (it.sol ? renderMath(it.sol) : '<p style="color:#7b9a89">暂无解析。</p>')
            + '</div></div>';
        }).join('') + '</div>').join('');

    paper.onclick = e => {
      const sh = e.target.closest('[data-eq-show]');
      if (sh) {
        const el = $('[data-eq-ans="' + CSS.escape(sh.dataset.eqShow) + '"]');
        if (el) {
          el.classList.toggle('show');
          sh.textContent = el.classList.contains('show') ? '收起答案' : '查看答案';
        }
        return;
      }
      const wr = e.target.closest('[data-eq-write]');
      if (wr) openPad(wr.dataset.title || '开始答题');
    };
  }

  /* ---------------- 备考指南 ---------------- */
  function initGuide() {
    state.guideInit = true;
    $('#guideWrap').innerHTML = (window.KY_GUIDE || []).map((g, i) =>
      '<div class="guide-card"><h2><span class="idx">' + (i + 1) + '</span>' + esc(g.title) + '</h2>'
      + '<div class="md-body">' + renderMath(g.md) + '</div></div>').join('');
  }

  /* ---------------- 手写答题板 ---------------- */
  const pad = {
    canvas: null, ctx: null, drawing: false, tool: 'pen', size: 3,
    color: '#12352a', last: null, strokes: [], cur: null, dpr: 1
  };

  function openPad(title) {
    $('#padTitle').textContent = title || '开始答题';
    $('#padMask').classList.add('show');
    document.body.style.overflow = 'hidden';
    setTimeout(setupCanvas, 40);
  }

  function closePad() {
    $('#padMask').classList.remove('show');
    document.body.style.overflow = '';
  }

  function setupCanvas() {
    const cv = $('#padCanvas');
    const box = cv.parentElement;
    const dpr = window.devicePixelRatio || 1;
    pad.dpr = dpr;
    const w = box.clientWidth, h = box.clientHeight;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    cv.style.width = w + 'px';
    cv.style.height = h + 'px';
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    pad.canvas = cv; pad.ctx = ctx;
    pad.strokes = []; pad.cur = null;
    redraw();
  }

  function redraw() {
    const ctx = pad.ctx, cv = pad.canvas;
    if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    pad.strokes.forEach(st => drawStroke(st));
    if (pad.cur) drawStroke(pad.cur);
  }

  function drawStroke(st) {
    const ctx = pad.ctx;
    if (!st.pts.length) return;
    ctx.save();
    ctx.globalCompositeOperation = st.tool === 'eraser' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = st.color;
    ctx.lineWidth = st.tool === 'eraser' ? st.size * 6 : st.size;
    ctx.beginPath();
    ctx.moveTo(st.pts[0].x, st.pts[0].y);
    if (st.pts.length === 1) {
      ctx.lineTo(st.pts[0].x + 0.1, st.pts[0].y + 0.1);
    } else {
      for (let i = 1; i < st.pts.length; i++) {
        const p0 = st.pts[i - 1], p1 = st.pts[i];
        const mx = (p0.x + p1.x) / 2, my = (p0.y + p1.y) / 2;
        ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
      }
      const last = st.pts[st.pts.length - 1];
      ctx.lineTo(last.x, last.y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function pos(e) {
    const cv = pad.canvas;
    const r = cv.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  }

  function initPad() {
    const cv = $('#padCanvas');
    const down = e => {
      if (!pad.ctx) return;
      e.preventDefault();
      pad.drawing = true;
      pad.cur = { tool: pad.tool, color: pad.color, size: pad.size, pts: [pos(e)] };
      redraw();
    };
    const move = e => {
      if (!pad.drawing || !pad.cur) return;
      e.preventDefault();
      pad.cur.pts.push(pos(e));
      redraw();
    };
    const up = () => {
      if (!pad.drawing) return;
      pad.drawing = false;
      if (pad.cur) pad.strokes.push(pad.cur);
      pad.cur = null;
    };
    cv.addEventListener('mousedown', down);
    cv.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    cv.addEventListener('touchstart', down, { passive: false });
    cv.addEventListener('touchmove', move, { passive: false });
    cv.addEventListener('touchend', up);

    $('#padClose').addEventListener('click', closePad);
    $('#padMask').addEventListener('click', e => { if (e.target.id === 'padMask') closePad(); });

    $('#padTools').addEventListener('click', e => {
      const t = e.target.closest('[data-tool]');
      if (t) {
        pad.tool = t.dataset.tool;
        $$('#padTools [data-tool]').forEach(x => x.classList.toggle('active', x === t));
        return;
      }
      const s = e.target.closest('[data-size]');
      if (s) {
        pad.size = +s.dataset.size;
        $$('#padTools .dot').forEach(x => x.classList.toggle('active', x === s));
        return;
      }
      const c = e.target.closest('[data-color]');
      if (c) {
        pad.color = c.dataset.color;
        $$('#padTools .swatch').forEach(x => x.classList.toggle('active', x === c));
        return;
      }
    });

    $('#padUndo').addEventListener('click', () => { pad.strokes.pop(); redraw(); });
    $('#padClear').addEventListener('click', () => { pad.strokes = []; pad.cur = null; redraw(); });
    $('#padSave').addEventListener('click', () => {
      const cv = pad.canvas;
      const out = document.createElement('canvas');
      out.width = cv.width; out.height = cv.height;
      const c2 = out.getContext('2d');
      c2.fillStyle = '#f4f7ee';
      c2.fillRect(0, 0, out.width, out.height);
      c2.drawImage(cv, 0, 0);
      const a = document.createElement('a');
      a.download = '答题_' + Date.now() + '.png';
      a.href = out.toDataURL('image/png');
      a.click();
    });

    window.addEventListener('resize', () => {
      if ($('#padMask').classList.contains('show')) setupCanvas();
    });

    // 调试钩子：便于自动化测试统计笔迹数
    window.__padStrokeCount = () => pad.strokes.length;
  }

  /* ---------------- 本地存储 ---------------- */
  function saveAnswers() {
    try { localStorage.setItem('ky_answers_v1', JSON.stringify(state.answers)); } catch (e) {}
  }
  function loadAnswers() {
    try {
      const s = localStorage.getItem('ky_answers_v1');
      if (s) state.answers = JSON.parse(s) || {};
    } catch (e) {}
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    if (/[?&](anim=off|static)/.test(location.search)) document.body.classList.add('no-anim');
    loadAnswers();
    initLeaves();
    buildHero();
    initHeroSwipe();
    buildHomeEntries();
    initPad();
    playSlide($$('#heroSlides .slide')[0]);
    restartHeroTimer();

    $('#mainNav').addEventListener('click', e => {
      const b = e.target.closest('[data-nav]');
      if (b) go(b.dataset.nav);
    });
    $('.brand').addEventListener('click', () => go('home'));
    $('#navToggle').addEventListener('click', () => $('#mainNav').classList.toggle('open'));

    document.addEventListener('click', e => {
      const el = e.target.closest('[data-nav]');
      if (el && !el.closest('#mainNav') && !el.closest('.brand')) {
        const n = el.dataset.nav;
        if (n && n !== 'home') { e.preventDefault(); go(n); }
      }
    });

    const hash = (location.hash || '').replace('#', '');
    go(VIEWS.indexOf(hash) >= 0 ? hash : 'home');

    // 浏览器前进 / 后退 / 手动改 hash 时同步视图
    window.addEventListener('hashchange', () => {
      const h = (location.hash || '').replace('#', '');
      if (VIEWS.indexOf(h) < 0) return;
      const cur = $('#view-' + h);
      if (cur && !cur.classList.contains('active')) go(h);
    });

    // 快速草稿纸：index.html?pad=1 直接弹出空白答题板
    if (/[?&]pad=1/.test(location.search)) setTimeout(() => openPad('草稿纸 · 随意书写'), 260);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
