let ShowMebtn = document.querySelector(".showme");
let SongsName = document.querySelector(".SongsName");

SongsName.classList.toggle("active");

ShowMebtn.addEventListener("click", showIt);
ShowMebtn.addEventListener("click", hideIt);

function showIt() { SongsName.classList.toggle("active");}
function hideIt() {ShowMebtn.classList.toggle("active");}
