let start = document.getElementById('start');
let restart = document.getElementById('restart');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');


let answerlist = [];

class listitem {
    constructor(a,b,c,d,e) {
      this.name = a;
      this.text = b;
      this.text2 = c;
      this.text3 = d;
      this.text4 = e;
    }

  }

answerlist[0] = new listitem('aaa', 'aaa1', 'aaa2', 'aaa3', 'aaa4');
answerlist[1] = new listitem('bbb', 'bbb1', 'bbb2', 'bbb3', 'bbb4');
answerlist[2] = new listitem('ccc', 'ccc1', 'ccc2', 'ccc3', 'ccc4');




// answerlist[0] = {
//     name: 'aaa',
//     text: 'aaa1',
//     text2: 'aaa2',
//     text3: 'aaa3',
//     text4: 'aaa4'
// };

// answerlist[1] = {
//     name: 'bbb',
//         text: 'bbb1',
//         text2: 'bbb2',
//         text3: 'bbb3',
//         text4: 'bbb4'
// };
   
// answerlist[2] = {
//     name: 'ccc',
//         text: 'ccc1',
//         text2: 'ccc2',
//         text3: 'ccc3',
//         text4: 'ccc4'
// };
   

let rand = Math.floor(Math.random() * answerlist.length);
var rValue = answerlist[rand];

start.addEventListener('click', function () {
    console.log('按到了');

    let rand = Math.floor(Math.random() * answerlist.length);

    let rValue = answerlist[rand];
    console.log(rValue);
    answer1.innerHTML = `<h3> ${rValue.name} </h3>`;
    answer2.innerHTML =
        `<p> 整體 :   ${rValue.text} </p> \ 
    <p> 項目 :  ${rValue.text2} </p> \ 
    <p> 項目 :  ${rValue.text3} </p> \
    <p> 建議 :  ${rValue.text4} </p> \ `
        ;
    restart.classList.remove('none');
    start.classList.add('none');
})

restart.addEventListener('click', function () {
    console.log('我要重新來一次');
    answer1.innerText = '';
    answer2.innerText = '';
    start.classList.remove('none');
    restart.classList.add('none');
})