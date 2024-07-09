'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// 1) click клик - мышью
// 2) mouseenter - наведение стрелки мыши

let i = 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
})

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
})