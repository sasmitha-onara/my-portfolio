let count = 0;

const countEl = document.querySelector('#count');
const increaseBtn = document.querySelector('#increase');
const plusBln = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const stepInput = document.querySelector('#stepinput');
const addStepBtn = document.querySelector('#addStep');

increaseBtn.addEventListener('click', () => { 
    count = count + 1;
    countEl.textContent = count;
    updateCounter();
});
const decreaseBtn = document.querySelector('#decrease');
decreaseBtn.addEventListener('click', () =>  {
    count = count - 1 ;
    countEl.textContent = count;
    updateCounter();
});
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() => {
    count=0;
    countEl.textContent = count;
    updateCounter();
});
plusBln.addEventListener('click' , () => {
    count=count+5;
    countEl.textContent = count;
    updateCounter();
});
minusBtn.addEventListener('click',() =>{
    count = count-5;
    countEl.textContent =count;
    updateCounter();
})
addStepBtn.addEventListener('click', () => {
    const amount = Number(stepInput.value);
    count = count + amount;
    updateCounter();
});
function updateCounter() {
    countEl.textContent = count;

    if (count > 10) {
        countEl.style.color = 'red';
    } else if (count < 0) {
        countEl.style.color = 'blue';
    } else {
        countEl.style.color = '#333';
    }
}
