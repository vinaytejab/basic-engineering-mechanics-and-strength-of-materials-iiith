
//shows the questions container and closes the instructions container div tag
$('#b1').on('click', function () {
    $('#container-fluid').hide();
    $('#container').show();
  });



var mins=10;
  var check= 0;
        //calculate the seconds 
        var secs = mins*60; 
  
        //countdown function is evoked when page is loaded 
        function countdown() { 
            setTimeout('Decrement()', 60); 
        } 
  
        //Decrement function decrement the value. 
        function Decrement() { 
            if (document.getElementById) { 
                minutes = document.getElementById("minutes"); 
                seconds = document.getElementById("seconds"); 
  
                //if less than a minute remaining 
                //Display only seconds value. 
                if (seconds < 59) { 
                    seconds.value = secs; 
                } 
  
                //Display both minutes and seconds 
                //getminutes and getseconds is taken by respective function 
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
                //when less than a minute remaining 
                //colour of the minutes and seconds 
                //changes to red 
                if (mins < 1) { 
                    minutes.style.color = "red"; 
                    seconds.style.color = "red"; 
                } 
                //if seconds becomes zero, 
                //then page alert time up 
                if (mins < 0) { 
                    var temp =cl();
                    var flag=cl1();
                    if(flag==0){
                        flag=1;
                                if(temp===0){
                                    alert('Time up'); 
                                    minutes.value = 0; 
                                    seconds.value = 0; 
                                    displayNext(1);
                    
                                }else{
                                        minutes.value = 0; 
                                        seconds.value = 0; 
                                         displayNext(1);
                                     }
                    }
                    
                } 
                //if seconds > 0 then seconds is decremented 
                else { 
                    secs--; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() { 
            //minutes is seconds divided by 60, rounded down 
            mins = Math.floor(secs / 60); 
            return mins; 
        } 
  
        function getseconds() { 
            //take minutes remaining (as seconds) away  
            //from total seconds remaining 
            return secs - Math.round(mins * 60); 
        } 

//array containing questions and answers.

 /* var questions = [{
    question: "Heart of Data Encryption Standard (DES), is the ?",
    choices: ["DES function","Rounds","Cipher"],
    correctAnswer: 0
  }, {
    question: "Data Encryption Standard (DES), was designed by ?",
    choices: ["IBM","Intel","none"],
    correctAnswer: 0
  }, {
    question: "In symmetric key cryptography, key used by sender and receiver is ?",
    choices: ["shared","different","None"],
    correctAnswer: 0
  }, {
    question: "Symmetric-key cryptography started thousands of years ago when people needed to exchange ?",
    choices: ['Files','Secrets', 'Packets'],
    correctAnswer: 1
  }, {
    question: "Relationship between a character in plaintext to a character is ?",
    choices: ['many-to-one relationship',"one-to-many relationship", 'many-to-many relationship'],
    correctAnswer: 1
  },
  {
    question: " A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['block of packets','block of symbols','block of signals'],
    correctAnswer: 1
  },
  {
    question: "A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['Caesar cipher', 'XOR cipher','ciphe'],
    correctAnswer: 1
  },
  {
    question: "Cryptography can provide ?",
    choices: ['entity authentication','nonrepudiation of messages', 'All of them'],
    correctAnswer: 2
  },
  {
    question: "Ciphers of today are called ?",
    choices: ['Substitution Cipher','Round ciphers', 'Transposition Cipher'],
    correctAnswer: 1
  },
  {
    question: "Shift cipheris sometimes referred to as the ?",
    choices: ['Caesar cipher','Julia cipher', 'plain cipher'],
    correctAnswer: 0
  },
  {
    question: "Heart of Data Encryption Standard (DES), is the ?",
    choices: ["DES function","Rounds","Cipher"],
    correctAnswer: 0
  }, {
    question: "Data Encryption Standard (DES), was designed by ?",
    choices: ["IBM","Intel","none"],
    correctAnswer: 0
  }, {
    question: "In symmetric key cryptography, key used by sender and receiver is ?",
    choices: ["shared","different","None"],
    correctAnswer: 0
  }, {
    question: "Symmetric-key cryptography started thousands of years ago when people needed to exchange ?",
    choices: ['Files','Secrets', 'Packets'],
    correctAnswer: 1
  }, {
    question: "Relationship between a character in plaintext to a character is ?",
    choices: ['many-to-one relationship',"one-to-many relationship", 'many-to-many relationship'],
    correctAnswer: 1
  },
  {
    question: " A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['block of packets','block of symbols','block of signals'],
    correctAnswer: 1
  },
  {
    question: "A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['Caesar cipher', 'XOR cipher','ciphe'],
    correctAnswer: 1
  },
  {
    question: "Cryptography can provide ?",
    choices: ['entity authentication','nonrepudiation of messages', 'All of them'],
    correctAnswer: 2
  },
  {
    question: "Ciphers of today are called ?",
    choices: ['Substitution Cipher','Round ciphers', 'Transposition Cipher'],
    correctAnswer: 1
  },
  {
    question: "Shift cipheris sometimes referred to as the ?",
    choices: ['Caesar cipher','Julia cipher', 'plain cipher'],
    correctAnswer: 0
  },
  {
    question: "Heart of Data Encryption Standard (DES), is the ?",
    choices: ["DES function","Rounds","Cipher"],
    correctAnswer: 0
  }, {
    question: "Data Encryption Standard (DES), was designed by ?",
    choices: ["IBM","Intel","none"],
    correctAnswer: 0
  }, {
    question: "In symmetric key cryptography, key used by sender and receiver is ?",
    choices: ["shared","different","None"],
    correctAnswer: 0
  }, {
    question: "Symmetric-key cryptography started thousands of years ago when people needed to exchange ?",
    choices: ['Files','Secrets', 'Packets'],
    correctAnswer: 1
  }, {
    question: "Relationship between a character in plaintext to a character is ?",
    choices: ['many-to-one relationship',"one-to-many relationship", 'many-to-many relationship'],
    correctAnswer: 1
  },
  {
    question: " A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['block of packets','block of symbols','block of signals'],
    correctAnswer: 1
  },
  {
    question: "A transposition cipher reorders (permutes) symbols in a ?",
    choices: ['Caesar cipher', 'XOR cipher','ciphe'],
    correctAnswer: 1
  },
  {
    question: "Cryptography can provide ?",
    choices: ['entity authentication','nonrepudiation of messages', 'All of them'],
    correctAnswer: 2
  },
  {
    question: "Ciphers of today are called ?",
    choices: ['Substitution Cipher','Round ciphers', 'Transposition Cipher'],
    correctAnswer: 1
  },
  {
    question: "Shift cipheris sometimes referred to as the ?",
    choices: ['Caesar cipher','Julia cipher', 'plain cipher'],
    correctAnswer: 0
  }];*/
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var check1=0;
  var w=0;
  var w1=0;
  // Display initial question
  displayNext(check1);

   $('#Sub').on('click', function (e) {
    e.preventDefault();
    questionCounter=questions.length;
    w=1;
    w1=1;
    displayNext();
  });
   function cl(){
    if(w==1)
      return 1;
    else
      return 0;
   }
   function cl1(){
    if(w1==1)
      return 1;
    else
      return 0;
   }
  // Click it to skip the current question
      $('#skip').on('click', function (e) {
    e.preventDefault();
    selections[questionCounter] =" ";
     questionCounter++;
     $("[id="+questionCounter+"]").css("background-color", "yellow");
    if(questionCounter===questions.length)
       questionCounter=0;
    displayNext();
  });
    
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      if(questionCounter===questions.length)
       questionCounter=0;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    if(!(isNaN(selections[questionCounter]))){
      questionCounter+=1;
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      questionCounter-=1;
    }
    questionCounter-=1;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  function tab(val){
  
    questionCounter=val-1;
    displayNext(0);
  }
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext(check1) {
    quiz.fadeOut(function() {
      $('#question').remove();
      if(check1===1){
        questionCounter=questions.length;
      }
          if(questionCounter < questions.length){
            if(questionCounter>1)
              $('#prev').show();
            if(isNaN(selections[questionCounter])){
              questionCounter+=1;
            $("[id="+questionCounter+"]").css("background-color", "yellow");
            questionCounter-=1;
            }
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {

        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
         document.getElementById("quiz").style.marginTop = "5%";
        document.getElementById("quiz").style.marginLeft = "5%";
        $('#head').show();
        $('#timer').hide();
        $('#next').hide();
        $('#prev').hide();
        $('#skip').hide();
        $('#Sub').hide();
        $('#start').show();
        $('#q1').hide();
        document.getElementById("quiz").style.textAlign = "center";
        document.getElementById("start").style.cssFloat = "none";
        document.getElementById("start").style.marginLeft = "45%";
      }
         
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    if(numCorrect===questions.length){
      score.append('Congratulations you got them all ' + numCorrect + ' out of ' +
                 questions.length + '');
       return score;
    }
    else{
      if(numCorrect===0){
        score.append('Very sorry to say but you got ' + numCorrect + ' out of ' +
                 questions.length + ' Please go through the theory section of the experiment (Best of luck) ');
         return score;
      }else{
        score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
         return score;
      }
      
    }
  }


//when start over button is clicked goes to instructions page

function refreshPage(){
   	window.location.reload();
}



