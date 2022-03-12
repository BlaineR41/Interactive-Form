/*
Treehouse FSJS Techdegree:
* Project 3 - Interactive Form
*/
/********************************/
/* Var Bank to store form inputs*/
/*******************************/

/*Basic Info Section*/
const form = document.querySelector('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');

/*Job Role Section*/
const selectJob = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

/*T-Shirt Info Section*/
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOption = color.children;

/*Register For Activities Section*/
const activites = document.getElementById('activites')
/********************/
/*Basic Info Section*/
/********************/

//Set focus state on Name on initial load
userName.focus();

/******************/
/*Job Role Section*/
/******************/

//Hides "other Job Role" field by default
otherJobRole.style.display = 'none';

//Displays or Hides the "other job role" option depending on the 'Job role' selected
selectJob.addEventListener('change', e => {
  e.target.value === 'other'
      ? otherJobRole.style.display = 'block'
      : otherJobRole.style.diplay = 'none';
});

/***********************/
/*T-Shirt info Section*/
/*********************/

//Disables the color field by default
color.disabled = true;

//Displays the color option after selecting a design then displaysdifferent color options based on the design selected
design.addEventListener('change', e => {
    color.disabled = false;
    for ( let i = 0; i < colorOption.length; i++ ) {
        const designSelected = colorOption[i].getAttribute('data-theme');
        const target = e.target.value;
        if (designSelected === target ) {
          colorOption[i].hidden = false;
          colorOption[i].setAttribute('selected', 'selected');
        } else {
            colorOption[i].hidden = true;
            colorOption[i].removeAttribute('selected');
        }
    }
});

/**********************************/
/*Register For Activities Section*/
/********************************/
