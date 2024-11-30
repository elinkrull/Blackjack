
let firstCard = 10
let secondCard = 5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//store the message-el paragraph in a variable called messageEL
let messageEL = document.getElementById("message-el")
//store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el")
//store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")


function startGame() {
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
	sumEl.textContent = "Sum: " + sum
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	}
	else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
	}
	else {
		message = "You're out of the game!"
		isAlive = false
	}

	//Display the message in the messageEL using messageEL.textContent
	messageEL.textContent = message
}

function newCard() {
	let card = 4
	sum += card

	cards.push(card)

	renderGame()
}

