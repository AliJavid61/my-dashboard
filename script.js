'use strict';

// ─── AUTH ───────────────────────────────────────────────────────────────────
const DEMO_USER = {
  email: 'admin@forexpro.com',
  password: 'admin123',
  name: 'Ali Javid',
  role: 'KYC Team Manager',
  initials: 'AJ'
};

function showScreen(id) {
  ['login', 'signup', 'dashboard'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(id);
  if (target) {
    target.style.display = id === 'dashboard' ? 'flex' : 'flex';
  }
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('login-err');

  if (email === DEMO_USER.email && pass === DEMO_USER.password) {
    err.style.display = 'none';
    initDashboard();
    showScreen('dashboard');
  } else {
    err.textContent = 'Invalid email or password.';
    err.style.display = 'block';
  }
}

function doSignup() {
  const name  = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const pass  = document.getElementById('su-pass').value;
  const pass2 = document.getElementById('su-pass2').value;
  const err   = document.getElementById('signup-err');

  if (!name || !email || !pass) {
    err.textContent = 'All fields are required.';
    err.style.display = 'block'; return;
  }
  if (pass !== pass2) {
    err.textContent = 'Passwords do not match.';
    err.style.display = 'block'; return;
  }
  err.style.display = 'none';
  // Demo: auto-login after signup
  DEMO_USER.name = name;
  DEMO_USER.email = email;
  DEMO_USER.initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
  initDashboard();
  showScreen('dashboard');
}

function doLogout() {
  showScreen('login');
  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value  = '';
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const registrations = [
  { id:'KYC-1041', name:'Marcus Webb',     country:'UK',      doc:'Passport',      submitted:'Apr 06',  risk:'Low',    status:'Pending',   agent:'Sarah Miller' },
  { id:'KYC-1042', name:'Layla Hassan',    country:'UAE',     doc:'National ID',   submitted:'Apr 06',  risk:'Medium', status:'Pending',   agent:'Tom Davis' },
  { id:'KYC-1043', name:'Dmitri Volkov',   country:'Russia',  doc:'Passport',      submitted:'Apr 05',  risk:'High',   status:'In Review', agent:'Emma Wilson' },
  { id:'KYC-1044', name:'Priya Sharma',    country:'India',   doc:'Aadhaar Card',  submitted:'Apr 05',  risk:'Low',    status:'Pending',   agent:'Sarah Miller' },
  { id:'KYC-1045', name:'Carlos Reyes',    country:'Mexico',  doc:'Passport',      submitted:'Apr 04',  risk:'Medium', status:'Approved',  agent:'Tom Davis' },
  { id:'KYC-1046', name:'Aiko Tanaka',     country:'Japan',   doc:'MyNumber Card', submitted:'Apr 04',  risk:'Low',    status:'Approved',  agent:'Emma Wilson' },
  { id:'KYC-1047', name:'Fatima Al-Said',  country:'Oman',    doc:'National ID',   submitted:'Apr 03',  risk:'High',   status:'In Review', agent:'Sarah Miller' },
  { id:'KYC-1048', name:'George Pappas',   country:'Greece',  doc:'Passport',      submitted:'Apr 03',  risk:'Low',    status:'Pending',   agent:'Tom Davis' },
];

const rejectedDocs = [
  { id:'KYC-0981', name:'Ivan Petrov',      reason:'Expired document',       attempts:2, lastAttempt:'Apr 01', status:'Awaiting Resubmission', agent:'Emma Wilson' },
  { id:'KYC-0994', name:'Nour Khalil',      reason:'Photo unclear',          attempts:1, lastAttempt:'Apr 02', status:'Resubmitted',           agent:'Sarah Miller' },
  { id:'KYC-1002', name:'Sofia Esposito',   reason:'Address mismatch',       attempts:3, lastAttempt:'Mar 30', status:'Escalated',             agent:'Tom Davis' },
  { id:'KYC-1018', name:'James Okafor',     reason:'Name mismatch',          attempts:1, lastAttempt:'Apr 03', status:'Awaiting Resubmission', agent:'Emma Wilson' },
  { id:'KYC-1027', name:'Yuki Nakamura',    reason:'Invalid document type',  attempts:2, lastAttempt:'Apr 04', status:'Resubmitted',           agent:'Sarah Miller' },
];

const withdrawals = [
  { id:'WD-7721', name:'Marcus Webb',     amount:'$12,500', method:'Bank Wire',    submitted:'Apr 07 09:12', risk:'Low',    status:'Pending',   kyc:'Verified' },
  { id:'WD-7722', name:'Layla Hassan',    amount:'$8,000',  method:'Crypto',       submitted:'Apr 07 10:44', risk:'High',   status:'Flagged',   kyc:'Verified' },
  { id:'WD-7723', name:'Carlos Reyes',    amount:'$3,200',  method:'Credit Card',  submitted:'Apr 06 15:30', risk:'Low',    status:'Approved',  kyc:'Verified' },
  { id:'WD-7724', name:'Dmitri Volkov',   amount:'$27,000', method:'Bank Wire',    submitted:'Apr 06 17:05', risk:'High',   status:'Flagged',   kyc:'Pending' },
  { id:'WD-7725', name:'Priya Sharma',    amount:'$1,500',  method:'PayPal',       submitted:'Apr 07 08:00', risk:'Low',    status:'Pending',   kyc:'Verified' },
  { id:'WD-7726', name:'George Pappas',   amount:'$5,750',  method:'Bank Wire',    submitted:'Apr 07 11:22', risk:'Medium', status:'In Review', kyc:'Verified' },
];

const teamMembers = [
  {
    name: 'Ali Javid', role: 'KYC Team Manager', initials: 'AJ',
    color: '#1976d2', isMe: true,
    reviewed: 142, approved: 128, rejected: 14, rate: 92
  },
  {
    name: 'Mahoo', role: 'KYC Analyst', initials: 'MA',
    color: '#7b1fa2', isMe: false,
    reviewed: 98, approved: 87, rejected: 11, rate: 88
  },
  {
    name: 'Sevil', role: 'KYC Analyst', initials: 'SE',
    color: '#00838f', isMe: false,
    reviewed: 84, approved: 74, rejected: 10, rate: 85
  },
  {
    name: 'Pouya', role: 'KYC Analyst', initials: 'PO',
    color: '#e65100', isMe: false,
    reviewed: 76, approved: 66, rejected: 10, rate: 82
  },
];

const chatMessages = [
  { from:'Sarah Miller', text:'Good morning! I've flagged KYC-1043 as high risk — Dmitri Volkov has inconsistent address documents.', time:'09:14', mine:false },
  { from:'Ali Javid',    text:'Thanks Sarah. I'll take a look. Does he have a utility bill attached?', time:'09:16', mine:true },
  { from:'Sarah Miller', text:'Yes, but the billing address doesn\'t match the ID. Waiting for him to upload a bank statement.', time:'09:17', mine:false },
  { from:'Tom Davis',    text:'Also — WD-7722 (Layla Hassan) came in with a $8K crypto withdrawal request. Flagging for review.', time:'09:31', mine:false },
  { from:'Ali Javid',    text:'Noted. Put it on hold until her KYC update is confirmed. Emma, can you re-check her documents?', time:'09:33', mine:true },
  { from:'Emma Wilson',  text:'On it. I'll update by midday.', time:'09:35', mine:false },
];

// ─── RENDER HELPERS ──────────────────────────────────────────────────────────
const RISK_BADGE = { Low:'badge-green', Medium:'badge-yellow', High:'badge-red' };
const STATUS_BADGE = {
  'Pending':'badge-yellow', 'In Review':'badge-blue', 'Approved':'badge-green',
  'Rejected':'badge-red', 'Flagged':'badge-red', 'Awaiting Resubmission':'badge-yellow',
  'Resubmitted':'badge-blue', 'Escalated':'badge-red'
};
const COLORS = ['#1976d2','#7b1fa2','#00838f','#e65100','#558b2f','#c62828','#283593'];
let colorIdx = 0;
function nextColor() { return COLORS[colorIdx++ % COLORS.length]; }

function avatar(initials, color, size=30) {
  return `<div class="name-avatar" style="width:${size}px;height:${size}px;background:${color}">${initials}</div>`;
}

function initials(name) {
  return name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
}

function buildRegistrationsTable() {
  const tbody = document.querySelector('#tbl-registrations tbody');
  if (!tbody) return;
  tbody.innerHTML = registrations.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>
        <div class="name-cell">
          ${avatar(initials(r.name), nextColor())}
          <span>${r.name}</span>
        </div>
      </td>
      <td>${r.country}</td>
      <td>${r.doc}</td>
      <td>${r.submitted}</td>
      <td><span class="badge ${RISK_BADGE[r.risk]}">${r.risk}</span></td>
      <td><span class="badge ${STATUS_BADGE[r.status]}">${r.status}</span></td>
      <td>${r.agent}</td>
      <td style="display:flex;gap:6px">
        <button class="action-btn action-approve" onclick="approveReg('${r.id}')">Approve</button>
        <button class="action-btn action-reject"  onclick="rejectReg('${r.id}')">Reject</button>
        <button class="action-btn action-view"    onclick="viewReg('${r.id}')">View</button>
      </td>
    </tr>`).join('');
}

function buildRejectedTable() {
  const tbody = document.querySelector('#tbl-rejected tbody');
  if (!tbody) return;
  tbody.innerHTML = rejectedDocs.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>
        <div class="name-cell">
          ${avatar(initials(r.name), nextColor())}
          <span>${r.name}</span>
        </div>
      </td>
      <td>${r.reason}</td>
      <td style="text-align:center">${r.attempts}</td>
      <td>${r.lastAttempt}</td>
      <td><span class="badge ${STATUS_BADGE[r.status]}">${r.status}</span></td>
      <td>${r.agent}</td>
      <td style="display:flex;gap:6px">
        <button class="action-btn action-review" onclick="followUp('${r.id}')">Follow Up</button>
        <button class="action-btn action-view"   onclick="viewReg('${r.id}')">View</button>
      </td>
    </tr>`).join('');
}

function buildWithdrawalsTable() {
  const tbody = document.querySelector('#tbl-withdrawals tbody');
  if (!tbody) return;
  tbody.innerHTML = withdrawals.map(w => `
    <tr>
      <td>${w.id}</td>
      <td>
        <div class="name-cell">
          ${avatar(initials(w.name), nextColor())}
          <span>${w.name}</span>
        </div>
      </td>
      <td style="font-weight:600;color:var(--text-primary)">${w.amount}</td>
      <td>${w.method}</td>
      <td>${w.submitted}</td>
      <td><span class="badge ${RISK_BADGE[w.risk]}">${w.risk}</span></td>
      <td><span class="badge ${STATUS_BADGE[w.status]}">${w.status}</span></td>
      <td><span class="badge ${w.kyc==='Verified'?'badge-green':'badge-yellow'}">${w.kyc}</span></td>
      <td style="display:flex;gap:6px">
        <button class="action-btn action-approve" onclick="approveWd('${w.id}')">Approve</button>
        <button class="action-btn action-reject"  onclick="rejectWd('${w.id}')">Reject</button>
        <button class="action-btn action-view"    onclick="viewReg('${w.id}')">View</button>
      </td>
    </tr>`).join('');
}

function buildTeamSection() {
  const container = document.getElementById('team-list');
  if (!container) return;
  container.innerHTML = teamMembers.map(m => `
    <div class="team-card ${m.isMe ? 'is-me' : ''}">
      <div class="team-avatar" style="background:${m.color}">${m.initials}</div>
      <div class="team-info">
        <div class="team-name">
          ${m.name}
          ${m.isMe ? '<span class="you-badge">YOU</span>' : ''}
        </div>
        <div class="team-role">${m.role}</div>
      </div>
      <div class="team-stats">
        <div class="team-stat">
          <div class="ts-val text-info">${m.reviewed}</div>
          <div class="ts-lbl">Reviewed</div>
        </div>
        <div class="team-stat">
          <div class="ts-val text-success">${m.approved}</div>
          <div class="ts-lbl">Approved</div>
        </div>
        <div class="team-stat">
          <div class="ts-val text-danger">${m.rejected}</div>
          <div class="ts-lbl">Rejected</div>
        </div>
      </div>
      <div class="progress-wrap">
        <div class="progress-label"><span>Efficiency</span><span>${m.rate}%</span></div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${m.rate}%;background:${m.color}"></div>
        </div>
      </div>
    </div>`).join('');
}

function buildChat() {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  msgs.innerHTML = chatMessages.map(m => `
    <div class="msg ${m.mine ? 'mine' : 'theirs'}">
      <div class="msg-bubble">${m.text}</div>
      <div class="msg-meta">${m.mine ? 'You' : m.from} · ${m.time}</div>
    </div>`).join('');
  msgs.scrollTop = msgs.scrollHeight;
}

// ─── ACTIONS ─────────────────────────────────────────────────────────────────
function approveReg(id) { alert(`✔ KYC Application ${id} approved.`); }
function rejectReg(id)  { alert(`✘ KYC Application ${id} rejected. Client will be notified.`); }
function viewReg(id)    { alert(`Opening document viewer for ${id}…`); }
function followUp(id)   { alert(`Follow-up email sent for ${id}.`); }
function approveWd(id)  { alert(`✔ Withdrawal ${id} approved.`); }
function rejectWd(id)   { alert(`✘ Withdrawal ${id} rejected.`); }

function sendChat() {
  const input = document.getElementById('chat-input');
  const text  = input.value.trim();
  if (!text) return;
  const msgs = document.getElementById('chat-messages');
  const now  = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const div  = document.createElement('div');
  div.className = 'msg mine';
  div.innerHTML = `<div class="msg-bubble">${text}</div><div class="msg-meta">You · ${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  input.value = '';
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-'+id));
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function initDashboard() {
  // Topbar user info
  document.getElementById('user-name').textContent    = DEMO_USER.name;
  document.getElementById('user-role').textContent    = DEMO_USER.role;
  document.getElementById('user-initials').textContent= DEMO_USER.initials;

  // Date
  const d = new Date();
  document.getElementById('topbar-date').textContent =
    d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short', year:'numeric'});

  colorIdx = 0;
  buildRegistrationsTable();
  buildRejectedTable();
  buildWithdrawalsTable();
  buildTeamSection();
  buildChat();
  switchTab('overview');
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showScreen('login');

  // Login form
  document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault(); doLogin();
  });

  // Signup form
  document.getElementById('signup-form').addEventListener('submit', e => {
    e.preventDefault(); doSignup();
  });

  // Chat enter key
  document.getElementById('chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
  });
});
