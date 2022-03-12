/*
Treehouse FSJS Techdegree:
* Project 3 - Interactive Form
*/

/* Var Bank to store form inputs*/

/*Basic Info Section*/
const form = document.querySelector('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');

/*Job Role Section*/
const selectJob = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

//Set focus state on Name on initial load
userName.focus();

//Hides "other Job Role" field by default
otherJobRole.style.display = 'none';

//Displays or Hides the "other job role" option depending on the 'Job role' selected
selectJob.addEventListener('change', e => {
  e.target.value === 'other'
      ? otherJobRole.style.display = 'block'
      : otherJobRole.style.diplay = 'none';
});
