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
