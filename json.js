function getQuestion(){
  fetch('https://questions.aloc.ng/api/q?subject=chemistry')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here

    // Access the data object
    let allQuestions = data.data;

    // grab the UI for questions
     var question = document.getElementById('questionUI');

     // create p element for question
     let paraQuestion = document.createElement('p');
          
     // Display question to UI
     const yourQuestion = allQuestions.question;
     question.appendChild(paraQuestion);
     paraQuestion.innerHTML = yourQuestion;

     // Show Options
    function addOptions() {
      // convert options object into an array
         let allOptions = Object.values(allQuestions.option);

      // create array of list elements
         let optionUI = document.querySelector(".options").childNodes;
         let listOptions = [];

         // loop through childNodes
         for (let i = 0; i < optionUI.length; i++) {
          let child = optionUI[i];
          if (child.nodeType == 1) {
            listOptions.push(child);
          }
         }

          // Match options to list elements
           for(let j = 0; j < listOptions.length; j++) {
            listOptions[j].textContent = allOptions[j];
          }
    }
     addOptions();

     //console.log(this.question);
     console.log(data);
     console.log(allQuestions.answer);
     //console.log(question);
    // console.log(typeof (allOptions[0]));
    // console.log(optionUI);
    // console.log(listOptions);

  })
  .catch(err => {
    // Do something for an error here
  })
}

getQuestion();


// Get chosen answer
var choice = document.querySelector('#answer');
    function getChoice() { 
      console.log(choice.value);
    }



// 
document.querySelector('button').addEventListener('click', function(){
  // SELECT ELEMENTS
  var createdPara = document.querySelectorAll('#questionUI p');
  var createdOptions = document.querySelectorAll('.options li');
  //createdPara.style.display = 'none';
  for(var i = 0; i < createdPara.length; i++){
    createdPara[i].classList.add('hide');
  }
  
  for(var i = 0; i < createdOptions.length; i++){
    //createdOptions[i].classList.add('hide');
    createdOptions[i].textContent = '';
  }
  getQuestion();
  getChoice();
  //clearAnswer();
  console.log('test is my name')
})

