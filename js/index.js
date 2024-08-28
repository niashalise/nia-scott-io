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
const messageList = document.querySelector("message-list");
messageSection.hidden = true;

let idCounter = 0;
function makeId() {
    let id = 'entry' + idCounter++;
        return id;
}

// Add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener("click", (event) => {
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

    entryById[uid] = { usersName: name, usersEmail: email, usersMessage: message};
    newMessage.appendChild(removeBtn());
    messageList.appendChild(newMessage);
    messageForm.reset();
    messageSection.hidden = false;
})

//create remove button
function removeBtn() {
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = 'button';
    removeButton.className = 'remove-btn'

    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        let uid1 = entry.getAttribute('id');
        delete entryById[uid1];
        entry.remove();
        if (messageList.childElementCount === 0) {
            messagesSection.hidden = true;
        };
    });
    return removeBtn;
};