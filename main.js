function confetti() {
  const container = document.querySelector(".confetti-container");
  
  let quantity = Math.floor(Math.random()*30)+60;
  let confetti = '';
  console.log(quantity);
  for(let i = 0; i< quantity; i++) {
    confetti += `
    <div class="confetti-element" style="--x: ${Math.floor(Math.random()*31)-15}rem; --y: ${Math.floor(Math.random()*-5)-25}rem; --duration: ${((Math.random()*0.5)+0.5).toFixed(1)}s; --delay: ${(Math.random()*1).toFixed(1)}s;">
      <div class="confetti" style=" background: #${Math.floor(Math.random()*16777215).toString(16)};"></div></div>
    `;
  }
  container.innerHTML = confetti;
}