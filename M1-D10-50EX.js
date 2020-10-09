const htmlEx5e6 = () => {
	let rows = document.querySelector("#htmlN4").children[0].children
	for (let i = 0; i < rows.length; i++) {
		image = document.createElement("img")
		image.src = image.src.concat("img/", Math.ceil(Math.random() * 10), ".webp")
		link = document.createElement("a")
		link.href = "https://en.wikipedia.org/wiki/Tyson_Tan"
		link.appendChild(image)
		rows[i].children[1].appendChild(link)
	}
}

const jsEx21 = () => {
	let name = "jhon"
	let familyName = "Doe"
	console.log(name + "<>" + familyName)
}
const jsEx22 = () => {
	const anagraphic = {
		name: "Roberto",
		surname: "Scioni",
		email: "pcTech.RobertoScioni@gmail.com",
	}
	console.log(anagraphic)
	return anagraphic
}

const jsEx23 = () => {
	let tmp = jsEx22()
	delete tmp.email
	console.log("tmp")
	return tmp
}

const jsEx24 = () => {
	const vect = [
		"one",
		"zero",
		"uff",
		"puff",
		"really",
		"pigeon",
		"javaScript",
		"why the java prefix?",
		"this is not a character",
		"i'm a level 5 mage",
	]
	return vect
}

const jsEx25 = () => {
	const tmp = jsEx24()
	for (let i = 0; i < tmp.length; i++) {
		console.log(tmp[i])
	}
}

const jsEx26 = () => {
	const tmp = []
	for (let i = 0; i < 100; i++) {
		tmp.push(Math.ceil(Math.random() * 2000))
	}
	return tmp
}

const jsEx27 = () => {
	tmp = jsEx26()
	let max = -Infinity
	let min = Infinity
	for (let i = 0; i < tmp.length; i++) {
		min = tmp[i] < min ? tmp[i] : min
		max = tmp[i] > max ? tmp[i] : max
	}
	console.log("array", tmp)
	console.log("min ", min)
	console.log("max ", max)
}

const jsEx28 = () => {
	const tmp = []
	let row
	let cell
	for (let i = 0; i < 10; i++) {
		let newRow = []
		for (let y = 0; y < 10; y++) {
			newRow.push(Math.ceil(Math.random() * 10))
		}
		tmp.push(newRow)
	}
	console.log("matrix", tmp)
	for (let i = 0; i < 10; i++) {
		row = ""
		for (let y = 0; y < 10; y++) {
			cell = tmp[i][y]
			row = row.concat(" " + cell)
		}
		console.log(row)
	}
	return tmp
}

const jsEx29 = (a, b) => {
	let out = a.length > b.length ? a : b
	return out
}

const jsEx30 = (a, b) => {
	let sumA = 0
	let sumB = 0
	let out
	for (let i = 0; i < a.length; i++) {
		sumA += a[i]
	}
	for (let i = 0; i < b.length; i++) {
		sumA += b[i]
	}
	console.log("sum of the first array", sumA)
	console.log("sum of the second array", sumB)

	out = sumA > sumB ? a : b

	return out
}

const domEx31 = () => {
	return document.querySelector("#container")
}

const domEx32 = () => {
	return document.querySelectorAll("td")
}

const domEx33p = () => {
	//fills in some innerText
	const cells = domEx32()
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerText = Math.random() * 100
	}
}

const domEx33 = () => {
	const cells = domEx32()
	for (let i = 0; i < cells.length; i++) {
		console.log(cells[i].innerText)
	}
}

const domEx34 = (newText) => {
	document.querySelector("h1").innerText = newText
}

const domEx35 = () => {
	document.querySelector("#htmlN4").appendChild(document.createElement("tr"))
}

const domEx36 = () => {
	const rows = document.querySelector("#htmlN4").children
	for (let i = 0; i < rows.length; i++) {
		rows[i].classList.add("test")
	}
}

const domEx37 = () => {
	document.styleSheets[0].insertRule("a {	background-color: red; }")
}

//domEx38 see window .onload on the html page

const domEx39 = (listID, message) => {
	list = document.querySelector("#" + listID)
	newElement = document.createElement("li")
	newElement.innerText = message
	list.appendChild(newElement)
}

const domEx40 = (listID) => {
	document.querySelector("#" + listID).innerText = ""
}
