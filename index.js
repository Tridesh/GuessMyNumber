let initial_score = 20;
ran_number = Math.trunc(Math.random() * 19 + 1);
console.log(ran_number);
document.querySelector('.check-it').addEventListener('click', function(){
    if (document.querySelector('.answer').value == ran_number){
        document.querySelector('.wait').textContent = 'Congrats';
        document.querySelector('.score-number').textContent = initial_score;
        document.querySelector('.box').textContent = ran_number;
        document.querySelector(".instruct").textContent = `Wow! That's correct👌 YOur Score is ${initial_score}`
        document.querySelector('body').style.backgroundColor = '#2afc2a';
    } else if (document.querySelector('.answer').value > ran_number) {
        document.querySelector('.wait').textContent = "It's high👆";
        initial_score = initial_score - 1;
        document.querySelector('.score-number').textContent = initial_score;
        document.querySelector('body').style.backgroundColor = '#ff0000';
    } else if (document.querySelector('.answer').value < ran_number) {
        document.querySelector('.wait').textContent = "It's low👇";
        initial_score = initial_score - 1;
        document.querySelector('.score-number').textContent = initial_score;
        document.querySelector('body').style.backgroundColor = '#ff0000';
    } else {
        document.querySelector('.wait').textContent = "Try Again";
        initial_score = initial_score - 1;
        document.querySelector('.score-number').textContent = initial_score;
        document.querySelector('body').style.backgroundColor = '#ff0000';
    }
})

document.querySelector(".restart").addEventListener('click', function(){
    location.reload();
})
  
