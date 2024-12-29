const choices = ['stone.webp','paper.webp','scissor.webp'];
// Replace with your image filenames
const resultText = document.getElementById("result");

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");

const startButton = document.getElementById("startBtn");
const resetButton = document.getElementById("resetBtn");

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const resultCount1 = document.getElementById('resultCount1');
const resultCount2 = document.getElementById('resultCount2');
let player1Count = 0;
let player2Count = 0;

const bestOf = document.getElementById('bestOf');
const bestOfInput = document.getElementById('bestOfInput');
let bestOfCounter = 0;


const fun = () => {
  if(player1.value && player2.value ){
    bestOfCounter++;
 
      resultCount1.innerHTML =`${player1.value}: `;
      resultCount2.innerHTML =`${player2.value}: `;

  image1.style.display = 'inline';
  image2.style.display = 'inline';
const choice1 = Math.floor(Math.random() * 3);
const choice2 = Math.floor(Math.random() * 3);

image1.src = choices[choice1];
image2.src = choices[choice2];

if (choice1 === choice2) {

  resultCount1.innerHTML +=`${player1Count}`;
  resultCount2.innerHTML +=`${player2Count}`;
} else if (
  (choice1 === 0 && choice2 === 2) ||
  (choice1 === 1 && choice2 === 0) ||
  (choice1 === 2 && choice2 === 1)
) {
  
  player1Count++;
  resultCount1.innerHTML +=`${player1Count}`;
  resultCount2.innerHTML +=`${player2Count}`;
  
} else {

  player2Count++;
  resultCount1.innerHTML +=`${player1Count}`;
  resultCount2.innerHTML +=`${player2Count}`;
}

 if(bestOfCounter==bestOfInput.value){
  if(player1Count>player2Count){
    resultText.textContent = `${player1.value} wins`;
  }
  else if(player1Count==player2Count){
    resultText.textContent = "It's a draw";
  }
  else{
    resultText.textContent = `${player2.value} wins`;
  }
   startButton.removeEventListener("click", fun );
    
 }

}
}

// const fun = () => {
//   if(player1.value && player2.value ){
//     bestOfCounter++;
 
//       resultCount1.innerHTML =`${player1.value}: `;
//       resultCount2.innerHTML =`${player2.value}: `;

//   image1.style.display = 'inline';
//   image2.style.display = 'inline';
// const choice1 = Math.floor(Math.random() * 3);
// const choice2 = Math.floor(Math.random() * 3);

// image1.src = choices[choice1];
// image2.src = choices[choice2];

// if (choice1 === choice2) {
//   resultText.textContent = "It's a draw";
//   resultCount1.innerHTML +=`${player1Count}`;
//   resultCount2.innerHTML +=`${player2Count}`;
// } else if (
//   (choice1 === 0 && choice2 === 2) ||
//   (choice1 === 1 && choice2 === 0) ||
//   (choice1 === 2 && choice2 === 1)
// ) {
//   resultText.textContent = `${player1.value} wins`;
//   player1Count++;
//   resultCount1.innerHTML +=`${player1Count}`;
//   resultCount2.innerHTML +=`${player2Count}`;
  
// } else {
//   resultText.textContent = `${player2.value} wins`;
//   player2Count++;
//   resultCount1.innerHTML +=`${player1Count}`;
//   resultCount2.innerHTML +=`${player2Count}`;
// }

//  if(bestOfCounter==bestOfInput.value){
//    startButton.removeEventListener("click", fun );
    
//  }

// }
// }


startButton.addEventListener("click", fun );

resetButton.addEventListener("click", () => {
  
  startButton.addEventListener("click", fun );
  bestOfCounter = 0;
  bestOfInput.value = '';
  
    player1Count =0;
    player2Count =0;
    
    resultCount1.innerHTML =``;
    resultCount2.innerHTML =``;
    
    image1.style.display = 'none';
    image2.style.display = 'none';

  resultText.textContent = "";
  player1.value ="";
  player2.value ="";
});





