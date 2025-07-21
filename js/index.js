import { addHabit } from './habitsList.js';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const enterBtn = document.getElementById('enterBtn');

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  enterBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    addHabit();
  });
});
