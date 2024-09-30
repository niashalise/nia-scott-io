/*
Nav menu start
*/
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
/*
Nav menu end
*/

const footer = document.createElement("footer");

const body = document.body;

body.appendChild(footer);

// Create a variable named today and assign it a new date object
const today = new Date();

// Create a variable named thisYear and assign it the current year from your date object
const thisYear = today.getFullYear(today);

// Create a variable named copyright and use it to create a new paragraph (p) element
const copyright = document.createElement("p");

// Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `<span>&#169; Nia Scott ${thisYear}</span>`;

footer.appendChild(copyright);

// List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ["HTML", "CSS", "JavaScript", "Python", "GitHub", "Figma"];

// Create a variable named skillsSection and use "DOM Selection" to select the skills section by id
const skillsSection = document.getElementById("skills-section");

const skillsList = skillsSection.querySelector("ul");

// Create a for loop to iterate over your skills Array
for (i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

let entryById = {};
// Create a variable named messageForm to select the "leave_message" form by name attribute
const messageForm = document.querySelector("[name='leave_message']");
const messageSection = document.getElementById("messages");
const messageList = document.querySelector(".message-list");
messageSection.hidden = true;

let idCounter = 0;
function makeId() {
    let id = 'entry' + idCounter++;
        return id;
}

// Add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    let uid = makeId();

    //Create a variable named newMessage that makes a new list item (li) element
    const newMessage = document.createElement("li");
    newMessage.classList.add('message-item');
    newMessage.innerHTML = `<a href="mailto:${email} ">${name} </a><span>wrote: ${message}</span>`;

    //create remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = 'button';
    removeButton.className = 'remove-btn'


    entryById[uid] = { usersName: name, usersEmail: email, usersMessage: message};
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
    messageSection.hidden = false;

    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        let uid1 = entry.getAttribute('id');
        delete entryById[uid1];
        entry.remove();
            if (messageList.childElementCount === 0) {
                messageSection.hidden = true;
            };
})
})

// projects section
const projectsSection = document.querySelector('.projects-section');
const projectList = document.querySelector('.projects-list');

// fetch request
fetch('https://api.github.com/users/niashalise/repos')
    .then(response => response.json())
    .then(repositories => {
        repositories.forEach(repo => {
        const project = document.createElement('li');
        project.innerText = repo.name;
        projectList.appendChild(project);
    })
    })
    .catch(error => console.error('Error: ', error));

/* JS for flip cards */
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const cardInner = document.querySelector('.card__inner');
const cardFront = document.querySelector('card__face--front')

/* Click event for cards */
// Select all card__inner elements
const cardInners = document.querySelectorAll('.card__inner');

// Function to flip the card
function flipCard() {
  this.classList.toggle('is-flipped');
}

// Add click event listener to each card__inner
cardInners.forEach(cardInner => {
  cardInner.addEventListener('click', flipCard);
});
