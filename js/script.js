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
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');


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

//adds style to the boxes in the activities field when selected
for ( let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener('focus', e =>{
        e.target.parentElement.classList.add('focus');
    });
    checkBox[i].addEventListener('blur', e =>{
        e.target.parentElement.classList.remove('focus');
    });
}

/***********************/
/*Payment info Section*/
/**********************/

//Sets the preferred payment method
const preferredPayment = paymentOptions[1].setAttribute('selected', 'selected');

//hides the other payment options by default
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//Displays the correct payment details depending on the payment method selected
payment.addEventListener('change', e => {
  for ( let i = 0; i < paymentOptions.length; i++ ) {
      const target = e.target.value;
      switch (target) {
          case 'paypal':
            creditCard.style.display = 'none';
            paypal.style.display = 'block';
            bitcoin.style.display = 'none';
            break;
          case 'bitcoin':
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = 'block';
            break;
          default:
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
            break;
      }
  }
});

//Checks if an input is valid and removes the error message upon validation
function validationPass(e) {
    const parent = e.parentElement;
    parent.classList.add('valid');
    parent.classList.remove('not-valid');
    parent.lastElementChild.style.display = 'none';
}

//Checks if an input is invalid and displays the error message
function validationFail(e) {
    const parent = e.parentElement;
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    parent.lastElementChild.style.display = 'block';
}

    /*helper function to validate name input*/
    function nameValidator () {
        const nameValue = userName.value;
        const nameIsValid = /^\s*?[a-zA-Z]+\s*?[a-zA-Z]*?/.test(nameValue);
        nameIsValid ? validationPass(userName) : validationFail(userName);
        return nameIsValid;
    }

    /*helper function to validate email input*/
    function emailValidator () {
        const emailValue = email.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);
        const emailIsEmpty = /^\s*$/.test(email.value);
        if (emailIsValid){
            validationPass(email);
        }else if (emailIsEmpty) {
            email.nextElementSibling.textContent = 'Email address field cannot be blank';
            validationFail(email)
        }else {
            validationFail(email)
        }
        return emailIsValid;
    }

    /*helper function to validate activities section*/
    function activitiesValidator() {
       const activitiesIsValid = totalCost > 0;
       activitiesIsValid ? validationPass(activitiesBox) : validationFail(activitiesBox);
       return activitiesIsValid;
   }

      /*helper function to validate credit card input*/
      function cardNumberValidator() {
          const cardNumberValue = cardNumber.value;
          const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberValue);
          cardNumberIsValid ? validationPass(cardNumber) : validationFail(cardNumber);
          return cardNumberIsValid;
        }

        /*helper function to validate zipCode input*/
        function zipCodeValidator() {
          const zipCodeValue = zipCode.value;
          const zipCodeIsValid = /^\d{5}$/.test(zipCodeValue);
          zipCodeIsValid ? validationPass(zipCode) : validationFail(zipCode);
          return zipCodeIsValid;
        }

          /*helper function to validate cvv input*/
          function cvvValidator() {
            const cvvValue = cvv.value;
            const cvvIsValid = /^\d{3}$/.test(cvvValue);
            cvvIsValid ? validationPass(cvv) : validationFail(cvv);
            return cvvIsValid;
          }

//provides real-time validation to required fileds
form.addEventListener('keyup', e => {
    if (userName === document.activeElement) {
        nameValidator();
    } else if (email === document.activeElement) {
        emailValidator();
    } else if (cardNumber === document.activeElement ) {
        cardNumberValidator();
    } else if (zipCode === document.activeElement) {
        zipCodeValidator();
    } else if (cvv === document.activeElement) {
        cvvValidator();
    } else if (activities === document.activeElement){
        activitiesValidator();
    }
});
//Checks for the required fields before submission and prevents submission if a field is invalid
form.addEventListener('submit', e => {
    if (!nameValidator()) {
        e.preventDefault();
    }
    if (!emailValidator()) {
        e.preventDefault();
    }
    if (!activitiesValidator()) {
        e.preventDefault();
    }
    if (payment.value === 'credit-card') {
        if (!cardNumberValidator()) {
            e.preventDefault();
        }
        if (!zipCodeValidator()) {
            e.preventDefault();
        }
        if (!cvvValidator()) {
            e.preventDefault();
        }
    }
});
