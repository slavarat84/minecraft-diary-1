function addGrade() {
  const student = document.getElementById('student').value;
  const subject = document.getElementById('subject').value;
  const grade = parseInt(document.getElementById('grade').value);
  const list = document.getElementById('grade-list');

  if (!student || isNaN(grade)) {
    alert("Будь ласка, введіть ім’я учня та оцінку.");
    return;
  }

  let levelClass = '';
  if (grade <= 3) {
    levelClass = 'grade-low';
  } else if (grade <= 6) {
    levelClass = 'grade-medium';
  } else if (grade <= 9) {
    levelClass = 'grade-good';
  } else {
    levelClass = 'grade-high';
  }

  const li = document.createElement('li');
  li.className = levelClass;
  li.textContent = `${student} – ${subject}: ${grade}`;
  list.appendChild(li);

  // Очищення полів
  document.getElementById('student').value = '';
  document.getElementById('grade').value = '';
}
