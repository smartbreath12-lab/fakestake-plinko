// Balance and helpers (shared)
const BAL_KEY = 'fakestake_chips';
function getBalance(){ return Number(localStorage.getItem(BAL_KEY) || 1000); }
function setBalance(v){ localStorage.setItem(BAL_KEY, String(Math.max(0, Math.floor(v)))); }
function refreshBalance(){
  const el = document.getElementById('balanceDisplay');
  if(el) el.innerText = getBalance();
}
function dailyBonus(){
  let b = getBalance(); b += 200; setBalance(b); refreshBalance(); alert('Daily +200 Chips');
}
function takeLoan(){ let b = getBalance(); b += 500; setBalance(b); refreshBalance(); }
function resetBalance(){ if(confirm('Reset balance to 1000?')){ setBalance(1000); refreshBalance(); } }
// Call refreshBalance on load
document.addEventListener('DOMContentLoaded', ()=>{ if(!localStorage.getItem(BAL_KEY)) setBalance(1000); refreshBalance(); });
