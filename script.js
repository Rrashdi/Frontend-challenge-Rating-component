let numbers = document.querySelectorAll('[data-number]');
let result = document.querySelector('.selected-p span'); 
let ratings = document.querySelector('.first');
let thankYou = document.querySelector('.thanksCard');
let submit = document.querySelector('.submit');

for(let ii = 0; ii < numbers.length; ii++){
    numbers[ii].addEventListener('click', () => {
        result.innerText = numbers[ii].innerText;
    })
}
submit.addEventListener('click', () => {
    ratings.classList.toggle('display-none');
    thankYou.classList.toggle('display-none');
})
thankYou.addEventListener('click', () => {
    thankYou.classList.toggle('display-none');
    ratings.classList.toggle('display-none');
})

