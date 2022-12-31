
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const res = document.querySelector('#result');
const btn = document.querySelector('#btn');
const form = document.querySelector('#form');

form.addEventListener('submit', (evt)=>{
  evt.preventDefault();
});

btn.addEventListener('click', calculate);

function calculate() {
  let result = parseInt(n1.value) + parseInt(n2.value);
  res.innerText = 'Resultado: ' + result;
}

// const pId = document.querySelector('#p_id');
// const name = document.querySelector('input');
// const pList = document.querySelectorAll('p');


