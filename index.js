'use strict'

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCup = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    
    if(fullCup ===  0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCup / totalCups * 330}px`;
        percentage.innerText = `${fullCup / totalCups * 100}%`
    }

    if(fullCup === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCup / 1000)}L`
    }
}