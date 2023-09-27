'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('curent--1');
const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceel.classList.add('hidden');

let currentScore = 0;
btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceel.classList.remove('hidden');
  diceel.src = `dice-${dice}.png`;
  console.log(dice);
  if (dice !== 1) {
    currentScore += dice;
    currentEl0.textContent = currentScore;
    document.querySelector('');
  }
});
