console.log("JS connected!"); 
const heading = document.querySelector('.projects h3');
const button = document.querySelector('#changeHeading');

button.addEventListener('click', () => {
    heading.textContent = "My interactive portfolio";
});
const themeBtn = document.querySelector('#themeToggle');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
});
