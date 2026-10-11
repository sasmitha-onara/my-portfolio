const colors = ['red', 'blue', 'green','yellow'];
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
    document.body.style.background = colors[1];
    const index = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[index];
    colorBtn.textContent = colors[index];

    
});

