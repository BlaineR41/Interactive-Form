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
//===============
//call functions
//===============
otherJob()
