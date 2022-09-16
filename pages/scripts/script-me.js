// ---------------------------------------------------------------------------
//menu
const menuToggle = document.querySelector("div[class='toggle']");
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click',funkcja);
function funkcja(){
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
}
// ---------------------------------------------------------------------------


  