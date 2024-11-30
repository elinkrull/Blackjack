let age = 22

if ( age <= 22 ) {
	console.log("You can not enter the club!")
}
else {
	console.log("Welcome!")
}


let personAge = 100

if (personAge < 100) {
	console.log("Not elegible")
}
else if (personAge === 100) {
	console.log("Here is your birthday card from the King!")
}
else {
	console.log("Not elegible, you have already gotten one")
}

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let listOfExperience = [
    "Front-End development at Noroff", // 0 index
    "Experiance with Figma, VSC and GitHub", // 1 index
    "HTML and CSS", //2 index
    "CSS-frameworks" //3 index
]

console.log(listOfExperience.length)


// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop(messages)
console.log(messages)


//for loop
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    console.log(count)
}


for (let i = 0; i < 5; i += 1) {
    console.log(messages[i])
}

//to make sure you get the whole array of messages, use messages.lengt
for (let i = 0; i < messages.length; i += 1) {
    console.log(messages)
}

// i += 1 can also be written i++


let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent = sentence[i]
}

//console.log will then be: Hello, my name is Per