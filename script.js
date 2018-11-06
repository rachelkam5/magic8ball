$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["For sure.", "No way.", "I have no clue.", "Maybe?", "Ask again!"];
magic8Ball.ask8Ball = function (question) {
	var random = Math.random();
	var randomAnswer = random * 					this.listOfAnswers.length;
	var randomIndex = Math.floor(randomAnswer);
	var answer = this.listOfAnswers[randomIndex];
	$("#8ball").effect("shake");
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};
	$("#answer").hide();
var questionPrompt = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
		function() {
	var question = prompt("Ask a yes/no question!");
	magic8Ball.ask8Ball(question);
		}, 1500);			
};
$("#questionButton").click(questionPrompt);

});