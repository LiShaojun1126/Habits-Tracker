const habitList = document.getElementById('habitList');
const habitInput = document.getElementById('habitInput');

function addHabit() {
    const name = habitInput.value.trim();
    if (!name) return;
    const li = document.createElement('li');
    li.innerHTML = `
    <label class="flex items-center gap-2">
    <input type="checkbox" class="w-5 h-5">
        <span>${name}</span>
      </label>`;
    habitList.appendChild(li);
    habitInput.value = '';
}

export {addHabit};