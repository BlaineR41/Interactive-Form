//============================================
// Focus state for the first input on the form
//============================================

//Create a variable to referrence the "Name"
const userName = document.querySelector('#name');

//Add a focus state to the Name field
userName.focus();

//=====================================
//Hide Other input field under Job Role
//=====================================

//Create a variable name for the other input fieldset
const other = document.querySelector('#other-job-role');
other.style.display = 'none'

//Create a function 'otherJob'
const otherJob = () => {

  //give the job role select dropdown menu to the 'select' variable
  const select = document.querySelector('#title');

  //If 'value' is clicked unhide 'other' input field, if not keep hidden
  select.addEventListener('change', e => {
    //check if the right option is being selected
    if(e.target.value === 'other'){
      //if true unhide
      other.style.display = 'block';
    }else{
      //if false keep hidden
      other.style.display = 'none'
    }
  })
}

//===================================================================================
//Disable or enable the color select options depending on the design the user selects
//===================================================================================

//Create a variable name for the color input fieldset
const color = document.querySelector('#color');

//Disable the color input field
color.setAttribute('disabled','disabled')

//Create a function 'colorSelect'
const colorSelect = () => {

    //Give the design input field to the variable 'design'
    const design = document.querySelector('#design');

    design.addEventListener('change', e => {

      //if the user selects an option from the design input fieldset
      if(e.target.value === 'js puns' || e.target.value === 'hear js'){

        //enable the color input field
        color.removeAttribute('disabled')
      }

      //Give the color options the variable 'option'
      const options = color.querySelectorAll('option')

      if(e.target.value === 'js puns'){

        //Provide the color options
        options.forEach(option => {

          //Disable all the options
          option.setAttribute ('hidden', 'hidden')

          //Select individual options based on their data setAttribute and assign them to the 'data' variable
          const data = option.getAttribute('data-theme');

          //if the data attribute is 'js puns' enable those options
          if (data === 'js puns'){
            option.removeAttribute('hidden')
          }
        })
      }else if(e.target.value === 'heart js'){

        //Provide the color options
        options.forEach(option => {

          //disable all the options
          option.setAttribute('hidden','hidden')

          //Select individual options based on their data setAttribute and assign them to the 'data' variable
          const data = option.getAttribute('data-theme');

          //if the data attribute is 'js puns' enable those options
          if (data === 'heart js'){
            option.removeAttribute('hidden')
          }
        })
      }
    })
}
//=====================================================================================================
//Calculate the total of the selected workshops, also is selected then unselected the total is adjusted
//=====================================================================================================

//Give the checkbox elements the 'checkboxes' variable
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//Give the total DOM element the 'totalCost' variable
const cost = document.querySelector('#activities-cost');

//Create a count variable
let count = 0

//Create a function 'totalCost'
const totalCost = () => {

  //provide all the checkboxes and listen for changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', e => {

      //if a checkbox is checked
      if (e.currentTarget.checked){
        //give the data-cost attribute to the 'itemCost' and use ParseInt to turn a string into a number
        const itemCost = parseInt(checkbox.getAttribute('data-cost'));

        //Add the itemCost to the count
        count += itemCost;

        //Show the addition to the total  on the inner html
        cost.innerHTML = `Total: $${count}`;

        //Remove the 'not-valid' class from the activities section
        activities.classlist.remove('not-valid');

        //Add 'valid' class to the activities section
        activities.classList.add('valid');

        //Hide the hint message
        activities.lastElementChild.style.display = 'none'
      }else{

        //Give the data-cost attribute to the 'itemCost' and use ParseInt to turn a string into a number
        const itemCost = parseInt(checkbox.getAttribute('data-cost'));

        //Subtract the itemCost to the count
        count -= itemCost

        //Show the subtraction to the total  on the innerHTML
        cost.innerHTML = `Total: $${count}`;

        if(count <= 0){

          //Add 'not-valid' class to the activities section
          activities.classList.add('not-valid');

          //display a hint message on how to correct an error
          activities.lastElementChild.style.display = 'block';
        }
      }

    })
  })
}

//================================================================
// Focus and blur events on the register for activities checkboxes
//================================================================
//show the checkboxes
checkboxes.forEach(checkbox => {
  //Add an event listener for the focus event
  checkbox.addEventListener('focus', e => {
    //if any of the checkboxes are in focus
    if(e.currentTarget){
      //add the 'focus' class to the parent its contained under
      checkbox.parentElement.classList.add('focus')
    }
  })
  //add an event listener for the blur event
  checkbox.addEventListener('blur', e => {
    //if any checkboxes are in blur
    if(e.currentTarget){
      //Remove the 'focus' class from its parent element
      checkbox.parentElement.classList.remove('focus')
    }
  })
})

//=========================================
//Set Credit Card payment method as default
//=========================================

//Give all payment methods variables
const paymentCard = document.querySelector('#payment')
const paypal = document.querySelector('#paypal')
paypal.style.display ='none'
const bitcoin = document.querySelector('#bitcoin')
bitcoin.style.display ='none'

//Give the options in the paymentcard select element the variable 'options'
const options = paymentCard.querySelectorAll('option');

//Show the options
options.forEach(option => {

  //if any option value matches 'credit-card' add 'selected' attribute
  if(option.value === 'credit-card'){
    option.setAttribute('selected','selected');
  }
})
//=====================================================================================================
//Create a function 'paymentInfo' to show or hide information depending on what paymentCard is selected
//=====================================================================================================

const paymentInfo = () => {

  //Listen for changes on the paymentCard select input field
  paymentCard.addEventListener('change', e => {

    //if value is PayPal
    if(e.target.value === 'paypal'){
      //make paypal info visible, bitcoin and credit card details hidden
      paypal.style.display = 'block'
      bitcoin.style.display = 'none'
      cardNumber.parentElement.style.display = 'none';
      zipCode.parentElement.style.display = 'none';
      cvv.parentElement.style.display = 'none'

      //if value is credit card
    }else if(e.target.value === 'credit-card'){
      paypal.style.display = 'none';
      bitcoin.style.display = 'none'
      cardNumber.parentElement.style.display = 'block';
      zipCode.parentElement.style.display = 'block';
      cvv.parentElement.style.display = 'block'

      //if value is Bitcoin
    }else if(e.target.value === 'bitcoin'){
      bitcoin.style.display = 'block';
      paypal.style.display = 'none'
      cardNumber.parentElement.style.display = 'none';
      zipCode.parentElement.style.display = 'none';
      cvv.parentElement.style.display = 'none'
    }
  })
}

//=================
//Form Validation
//=================

// Automatic update of error messages as fields are being filled
const errorMsg = (valid, parent, value) => {
    // Listen for key strockes
    value.addEventListener('keyup', e => {
        if(valid.test(value.value) !== true){
            // Add the 'not-valid' class to the parent containing the empty field
            value.parentElement.classList.add('not-valid');

            // Display a hint message on how to correct the error
            parent.lastElementChild.style.display = 'block'
        }else{
            // Remove the 'not-valid' class from the parent element
            value.parentElement.classList.remove('not-valid');

            // Add the 'valid' class to the parent element
            value.parentElement.classList.add('valid')

            // Hide the hint message
            parent.lastElementChild.style.display = 'none'
        }
    })
}

// Assign the email input field to the varaiable 'email'
const email = document.querySelector('#email');

// Error Message for email
errorMsg(/^(\w)+@(\w)+\.com$/, email.parentElement, email)

// Error Message for Username
errorMsg(/^[a-z]+(\s[a-z]+)?$/i, userName.parentElement, userName)

// Assign the card number input field to the variable 'cardNumber'
const cardNumber = document.querySelector('#cc-num');

// Error Message for CardNumber
errorMsg(/^\d{13,16}$/, cardNumber.parentElement, cardNumber)

// Assign the zip code input field to the variable 'zipCode'
const zipCode = document.querySelector('#zip');

// Error Message for ZipCode
errorMsg(/^\d{5}$/, zipCode.parentElement, zipCode)

// Assign the cvv input field to the variable 'cvv'
const cvv = document.querySelector('#cvv');

// Error Message for Cvv
errorMsg(/^\d{3}$/, cvv.parentElement, cvv)

// Assign the form html element to the variable 'form'
const form = document.querySelector('form');

// Helper function handling the regex test before submit
const input = (inputTest, value, event, field) => {

     // Assign the parent element to the variable 'parent'
     const parent = field.parentElement;

     // Test the value
     inputTest.test(value);

     if(inputTest.test(value) !== true ){
         //Prevent default submit behaviour
         event.preventDefault();

         // ===================
         // Custom form errors
         // ===================

        // Add the 'not-valid' class to the parent containing the empty field
        field.parentElement.classList.add('not-valid');

        // Display a hint message on how to correct the error
        parent.lastElementChild.style.display = 'block'

     }else{
        // Remove the 'not-valid' class from the parent element
        field.parentElement.classList.remove('not-valid');

        // Add the 'valid' class to the parent element
        field.parentElement.classList.add('valid')

        // Hide the hint message
        parent.lastElementChild.style.display = 'none'
     }
}

// Assign the fieldset containing all the activities to the 'activities' variable
const activities = document.querySelector('#activities');

// Create a function 'activity' to handle a selection from the register for activities section
const activity = (event) => {

    // if count is 0, that also means no activity was selected
    if(count === 0 ){

        // Prevent submit default behaviour
        event.preventDefault();

        // Add 'not-valid' class to the activities section
        activities.classList.add('not-valid');

        // Display a hint message on how to correct the error
        activities.lastElementChild.style.display = 'block'

    }else{

        //Remove the 'not-valid' class from the activities section
        activities.classList.remove('not-valid');

        // Add 'valid' class to the activities section
        activities.classList.add('valid');

        // Hide the hint message
        activities.lastElementChild.style.display = 'none'
    }
}


//Create a function to handle credit-card validation
const creditCard = (event) => {
    // Iterate through  the options
    options.forEach(option => {
        //if any opotion's value is 'credit-card'
        if(option.value === 'credit-card'){
            //if option's attribute is 'selected'
            if(option.getAttribute('selected') ){
            //cardNumber
            input(/^\d{13,16}$/, cardNumber.value, event, cardNumber);
            // zipCode
            input(/^\d{5}$/, zipCode.value, event, zipCode);
            // cvv
            input(/^\d{3}$/, cvv.value, event, cvv);
            }
        }
    })
}

// Listen for form changes before submit and make sure all fields are properly filled
form.addEventListener('submit', e => {
    // name
    input(/^[a-z]+(\s[a-z]+)?$/i, userName.value, e, userName);
    // email
    input(/^(\w)+@(\w)+\.com$/, email.value, e, email);
    // activity selection
    activity(e)
    // creditCard
    if(paymentCard.value === 'credit-card'){
        creditCard(e);
    }


})




// ================
//Call functions
//=================
otherJob()
colorSelect()
totalCost()
paymentInfo()
