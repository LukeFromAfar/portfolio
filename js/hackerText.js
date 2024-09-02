// const letters = "abcdefghijklmnopqrstuvwxyz";


// // ABCDEFGHIJKLMNOPQRSTUVWXYZ

// let interval = null;

// document.getElementsByClassName(".heroTitle").onmouseover = event => {  
//   let iteration = 0;
  
//   clearInterval(interval);
  
//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
      
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
    
//     if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
    
//     iteration += 1 / 3;
//   }, 30);
// }

const letters = "abcdefghijklmnopqrstuvwxyz";

const elements = document.getElementsByClassName("heroTitle");

Array.from(elements).forEach(element => {
  let interval = null;  // Create a separate interval variable for each element
  
  element.onmouseover = event => {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if (iteration >= event.target.dataset.value.length) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  };
});