function getQuestion(callback){
let authToken=sessionStorage.getItem("authorization");
let requestFlag = window.parent.app.$store.state.examHome.requestFlag;
if(requestFlag == 'LearnerExam'){
 let newQuestionDetails = window.parent.app.$store.state.examHome.newQuestionDetails;
 callback(newQuestionDetails); 
}
if(requestFlag == 'ClickerLFExam'){
 let newClickerQuestionDetails = window.parent.app.$store.state.examHome.newClickerQuestionDetails;
 callback(newClickerQuestionDetails); 
}
if(requestFlag == 'ClickerLearnerExam'){
      let learnerClickerCurrentQuestion = window.parent.app.$store.state.examHome.learnerClickerCurrentQuestion;
      callback(learnerClickerCurrentQuestion); 
 }
}

function getLearnerSubmittedAnswer(learnerExamDetailsStore,currentQuestion,submittedAnswer){
    var learnerSubmittedAnswer = {
      programId: learnerExamDetailsStore.programId,
      eCourseId: learnerExamDetailsStore.eCourseId,
      eCoursePatternId: learnerExamDetailsStore.eCoursePatternId,
      languageId: learnerExamDetailsStore.languageId,
      examId: learnerExamDetailsStore.examId,
      sessionAggregationId: learnerExamDetailsStore.sessionAggregationId,
      aggregationId: learnerExamDetailsStore.aggregationId,
      sectionName: currentQuestion.sectionName,
      examType : learnerExamDetailsStore.examType,
      answerDetails: {
        questionId: currentQuestion.question.questionDetails.questionId,
        questionType: currentQuestion.question.questionDetails.questionType,
        answer: JSON.stringify(submittedAnswer)
      }
    };
    return learnerSubmittedAnswer;
}

function getLearnerExamDetails(learnerExamDetailsStore){
let learnerExamDetails = {
      programId: learnerExamDetailsStore.programId,
      eCourseId: learnerExamDetailsStore.eCourseId,
      eCoursePatternId: learnerExamDetailsStore.eCoursePatternId,
      languageId: learnerExamDetailsStore.languageId,
      examId: learnerExamDetailsStore.examId,
      sessionAggregationId: learnerExamDetailsStore.sessionAggregationId,
      aggregationId: learnerExamDetailsStore.aggregationId,
      examType: learnerExamDetailsStore.examType
    };
   return learnerExamDetails;
}

function submitAnswer(learnerSubmittedAnswer,learnerExamDetails){
    let authToken=sessionStorage.getItem("authorization");
    $.ajax({
      type: "POST",
      url: window.parent.serverPath + "/r/c/examevaluation/submit",
      headers: { 'Authorization' : 'Bearer ' + authToken },
      data: JSON.stringify(learnerSubmittedAnswer),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        if(learnerExamDetails.examType === 'exam'){
          window.parent.app.$store.dispatch('loadNewQuestionTemplate',learnerExamDetails)
        } 
        if(learnerExamDetails.examType === 'singleQuestion'){
          learnerExamDetails.data = data
          window.parent.app.$store.dispatch('endSingleQuestionExam',learnerExamDetails)
        }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Error in submitAnswer: " + errorThrown); 
      } 
    });
}

function submitClickerLearnerAnswer(classroompin,answerId,questionId){
  let clickerAnswerDetails = {
      classroompin: classroompin,
      optionId: answerId,
      questionId: questionId
    };
    $.ajax({
      type: "POST",
      url: window.parent.serverPath + "/o/clickerexam/submitclickeranswer",
      headers: { },
      data: JSON.stringify(clickerAnswerDetails),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function (data) {
       window.parent.app.$store.dispatch('loadClickerLearnerQuestionTemplate', classroompin);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Error in submitClickerLearnerAnswer: " + errorThrown); 
      } 
    });
}

function getPollingStatsData(callback){
  let classroompin = window.parent.app.$store.state.examHome.clickerExamDetails.classroompin;
    var x = { 'classroompin': classroompin };    
    $.ajax({
      type: "POST",
      url: window.parent.serverPath + "/o/clickerexam/getPollingStats",
      headers: { },
      data: JSON.stringify(x),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function (result) {
        callback(result);
     },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Error in getPollingStatsData: " + errorThrown); 
      } 
    });
} 