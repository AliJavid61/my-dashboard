function showOnly(screenId) {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('signup-screen').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById(screenId).classList.remove('hidden');
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
  showOnly('login-screen');

  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    showOnly('dashboard');
    switchTab('overview');
  });

  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    showOnly('dashboard');
    switchTab('overview');
  });

  document.getElementById('go-signup').addEventListener('click', function (e) {
    e.preventDefault();
    showOnly('signup-screen');
  });

  document.getElementById('go-login').addEventListener('click', function (e) {
    e.preventDefault();
    showOnly('login-screen');
  });

  document.getElementById('logout-btn').addEventListener('click', function () {
    showOnly('login-screen');
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
    msg.textContent = text;
    msg.className = 'muted';
    box.appendChild(msg);
    input.value = '';
  });
});
