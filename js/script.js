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
//===============
//call functions
//===============
otherJob()
colorSelect()
totalCost()
