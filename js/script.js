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
const activities = document.getElementById('activities');
const activitiesBox = document.getElementById('activities-box');
const checkBox = document.querySelectorAll('[type="checkbox"]');
const total = document.getElementById('activities-cost');
let totalCost = 0;

/*Payment info Section*/
const payment = document.getElementById('payment');
const paymentOptions = payment.children;
const creditCard = document.getElementById('credit-card');

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

//Displays and updates the total cost based on the selected activity
activities.addEventListener('change', e => {
    const clicked = e.target;
    const dataCost = +clicked.getAttribute('data-cost');
    clicked.checked ? totalCost += dataCost : totalCost -= dataCost;
    total.innerHTML = `Total: $${totalCost}`;
});

//Prevent Users from selecting activites that occur at the same time
activitiesBox.addEventListener('change', e => {
    const clicked = e.target;
    const clickedType = clicked.getAttribute('data-day-and-time');
    for ( let i = 0; i < checkBox.length; i++ ) {
        const checkboxType = checkBox[i].getAttribute('data-day-and-time');
        if ( checkboxType === clickedType && clicked !== checkBox[i] ) {
            if (clicked.checked) {
                checkBox[i].disabled = true;
                checkBox[i].parentElement.classList.add('disabled');
            } else {
                checkBox[i].disabled = false;
                checkBox[i].parentElement.classList.remove('disabled');
            }
        }
    }
});

/***********************/
/*Payment info Section*/
/**********************/
