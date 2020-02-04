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
     
     // Display question to UI
     const yourQuestion = allQuestions.question
     question.innerHTML = yourQuestion;
     
     //console.log(this.question);
    console.log(data);
    console.log(question);
  })
  .catch(err => {
    // Do something for an error here
  })
}

getQuestion();
