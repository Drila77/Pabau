
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const shuffleBtn = document.getElementById('shuffle-btn');
const changeBtn = document.getElementById('change-btn');
const showBtn = document.getElementById('show-btn');
const selectedValuesDiv = document.getElementById('selected-values');

function shuffleCheckboxes(event) {
  event.preventDefault(); 
  const container = document.getElementById('checkbox-container');
  const labels = Array.from(container.querySelectorAll('label'));

  const shuffledLabels = Array.from(labels).sort(() => Math.random() - 0.5);


  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  shuffledLabels.forEach((label) => container.appendChild(label));
}


function changeCheckboxValues(event) {
  event.preventDefault(); 

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.value = 'NewValue'; 
      checkbox.nextSibling.textContent = 'NewValue'; 
    }
  });
}


function showSelectedValues(event) {
  event.preventDefault(); 
  const selectedValues = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  selectedValuesDiv.textContent = `Selected Values: ${selectedValues.join(', ')}`;
}

shuffleBtn.addEventListener('click', shuffleCheckboxes);
changeBtn.addEventListener('click', changeCheckboxValues);
showBtn.addEventListener('click', showSelectedValues);