let count = 0;

const countEl = document.querySelector('#count');
const increaseBtn = document.querySelector('#increase');
const plusBln = document.querySelector('#plus');

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
