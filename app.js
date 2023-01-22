function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber +" of "+quiz.questions.length;

};

function showScores()
{
	var gameOverHtml="<h1> Result of the quiz..</h1>"
	gameOverHtml+="<h2 id='score'>Your Score is :  "+quiz.score+"</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;


};

var questions=[
	new Question("What is the name of the man who launched eBay back in 1995?",["Pierre Omidyar","Alexander Fleming","Marie Curie"," Clint Barton"],"Pierre Omidyar"),
	new Question("What is the name of the song that Queen Elsa sings as she builds her ice castle in the movie Frozen?",["Let It Go","Game of Thrones","Hugh Jackman","The Camdens"],"Let It Go"),
	new Question("About how many taste buds does the average human tongue have?",["50,000","40,000","30,000","10,000"],"10,000"),
	new Question("The Chinese New Year is celebrated on what day and month?",["2nd November","14th February","25th January","3rd March"],"25th January"),
	new Question("Which of these games includes the phrase “Do not pass go, do not collect $200”?",["Pac-Man","The Beetle","Monopoly"," Virgin Atlantic"],"Monopoly"),
	new Question("Who is the richest person in the world as of 2021?",["Jeff Bezos","Elon Musk","Gautam Adani","Bill Gates"],"Jeff Bezos"),
	new Question("What year was the very first model of the iPhone released?",["2009","2006","2005","2007"],"2007"),
	new Question("Which god is considered the “destroyer” and is part of the Hindu Trinity?",["Shiva","Krishna","Rama","Buddha"],"Shiva"),
	new Question("How many soccer players should each team have on the field at the start of each match?",["11","10","9","8"],"11"),
	new Question("Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?",["Usain Bolt","Michael","Maize","Schumacher"],"Usain Bolt")
];
var quiz=new Quiz(questions);
populate();