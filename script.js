function showScreen(screen) {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('signup-screen').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');

  if (screen === 'login') document.getElementById('login-screen').classList.remove('hidden');
  if (screen === 'signup') document.getElementById('signup-screen').classList.remove('hidden');
  if (screen === 'dashboard') document.getElementById('dashboard').classList.remove('hidden');
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === 'panel-' + tabName);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  showScreen('login');

  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    showScreen('dashboard');
    switchTab('overview');
  });

  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    showScreen('dashboard');
    switchTab('overview');
  });

  document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    showScreen('signup');
  });

  document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    showScreen('login');
  });

  document.getElementById('logout-btn').addEventListener('click', function () {
    showScreen('login');
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      switchTab(btn.dataset.tab);
    });
  });

  document.getElementById('send-btn').addEventListener('click', function () {
    const input = document.getElementById('chat-input');
    const box = document.getElementById('chat-box');
    const text = input.value.trim();
    if (!text) return;

    const msg = document.createElement('div');
    msg.className = 'chat-msg';
    msg.textContent = 'Ali Javid: ' + text;
    box.appendChild(msg);
    input.value = '';
    box.scrollTop = box.scrollHeight;
  });

  document.getElementById('chat-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('send-btn').click();
    }
  });
});
