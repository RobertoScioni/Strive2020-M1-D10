/*const questions = [
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "What does CPU stand for?",
		correct_answer: "Central Processing Unit",
		incorrect_answers: [
			"Central Process Unit",
			"Computer Personal Unit",
			"Central Processor Unit",
		],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question:
			"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
		correct_answer: "Final",
		incorrect_answers: ["Static", "Private", "Public"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "The logo for Snapchat is a Bell.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question:
			"Pointers were not used in the original C programming language; they were added later on in C++.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question:
			"What is the most preferred image format used for logos in the Wikimedia database?",
		correct_answer: ".svg",
		incorrect_answers: [".png", ".jpeg", ".gif"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "In web design, what does CSS stand for?",
		correct_answer: "Cascading Style Sheet",
		incorrect_answers: [
			"Counter Strike: Source",
			"Corrective Style Sheet",
			"Computer Style Sheet",
		],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question:
			"What is the code name for the mobile operating system Android 7.0?",
		correct_answer: "Nougat",
		incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "On Twitter, what is the character limit for a Tweet?",
		correct_answer: "140",
		incorrect_answers: ["120", "160", "100"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Linux was first created as an alternative to Windows XP.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question:
			"Which programming language shares its name with an island in Indonesia?",
		correct_answer: "Java",
		incorrect_answers: ["Python", "C", "Jakarta"],
	},
]*/

let questions
let questionIndex = 0
let score = 0

const getQuestions = (number, diff) => {
	let url =
		"https://opentdb.com/api.php?amount=" +
		number +
		"&category=18&difficulty=" +
		diff

	fetch(url)
		.then((res) => res.json())
		.then((json) => (questions = json.results))
		.catch((error) => console.log(error))
}

const startQuiz = () => {
	const diff = document.querySelector("#difficulty").value
	const number = document.querySelector("#number").value
	questionIndex = 0
	score = 0
	getQuestions(number, diff)
	console.log(questions)
	document.querySelector("#setup").classList.add("hidden")
	document.querySelector("#result").classList.add("hidden")
	document.querySelector("#result").innerText = ""
	document.querySelector(".questionbox").classList.remove("hidden")
	printQuestion()
}

const printScore = () => {
	const pScore = document.createElement("p")
	pScore.innerText = score
	document.querySelector(".questionbox").classList.add("hidden")
	document.querySelector("#result").appendChild(pScore)
	document.querySelector("#result").classList.remove("hidden")
	document.querySelector("#setup").classList.remove("hidden")
}

const answer = (E) => {
	if (E.srcElement.value === questions[questionIndex].correct_answer) {
		score++
		alert("correct")
	}
	if (questionIndex < questions.length - 1) {
		questionIndex++
		printQuestion()
	} else {
		printScore()
	}
}

const printQuestion = () => {
	const question = questions[questionIndex]
	document.querySelector("#question").innerText = unescape(question.question)
	document.querySelector("#category").innerText = question.category
	document.querySelector("#answers").innerText = ""
	const answers = question.incorrect_answers
	answers.push(question.correct_answer)
	console.log(answers)
	for (let i = 0; i < answers.length; i++) {
		let button = document.createElement("input")
		let label = document.createTextNode(answers[i])
		let container = document.createElement("span")
		container.appendChild(button)
		container.appendChild(label)
		button.type = "radio"
		button.name = "answer"
		button.value = answers[i]
		button.addEventListener("change", answer)
		//console.log(button)
		document.querySelector("#answers").appendChild(container)
	}
}
