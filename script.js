const form = document.getElementById('studentForm');
const submissionsDiv = document.getElementById('submissions');
let submissions = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('studentName').value;
  const details = document.getElementById('internshipDetails').value;

  const submission = {
    name,
    details,
    marks: null
  };

  submissions.push(submission);
  renderSubmissions();

  form.reset();
});

function renderSubmissions() {
  submissionsDiv.innerHTML = '';

  submissions.forEach((sub, index) => {
    const div = document.createElement('div');
    div.className = 'submission';

    div.innerHTML = `
      <strong>${sub.name}</strong><br/>
      <p>${sub.details}</p>
      <label>Assign Marks:</label>
      <input type="number" id="mark-${index}" value="${sub.marks !== null ? sub.marks : ''}" />
      <button onclick="assignMarks(${index})">Submit Marks</button>
      <p><strong>Marks:</strong> ${sub.marks !== null ? sub.marks : 'Not assigned yet'}</p>
    `;

    submissionsDiv.appendChild(div);
  });
}

function assignMarks(index) {
  const markInput = document.getElementById(`mark-${index}`);
  const marks = parseInt(markInput.value);

  if (!isNaN(marks)) {
    submissions[index].marks = marks;
    renderSubmissions();
  } else {
    alert('Enter a valid mark');
  }
}
