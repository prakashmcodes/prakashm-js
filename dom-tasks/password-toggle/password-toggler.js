const form = document.querySelector("form");
const inputEl = document.getElementById("input");
const nameInputEl = document.getElementById("name-input");
const mailInputEl = document.getElementById("mail-input");
const text = document.getElementById("text");
const loginBtnEl = document.getElementById("login-btn")

let password = true;


nameInputEl.addEventListener("input", ()=>{
    nameInputEl.value = nameInputEl.value.replace(/[^a-zA-Z\s]/g, "");
})

function bindEyeClick() {
  const eyeIcon = document.getElementById("eye");

  eyeIcon.addEventListener("click", function () {

    if(inputEl.value == 0){
        text.classList.remove("hidden")
    }
    else{
        text.classList.add("hidden")
    }
    
    
    if (password) {
        inputEl.type = "text";
        eyeIcon.setAttribute("data-lucide", "eye-off");
    } else {
        inputEl.type = "password";
        eyeIcon.setAttribute("data-lucide", "eye");
    }

    password = !password;
    lucide.createIcons();  
    bindEyeClick();
  });
}

lucide.createIcons();
bindEyeClick();

inputEl.addEventListener("focusin", ()=>{
    text.classList.add("hidden")
})


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInputEl.value.trim();
  const email = mailInputEl.value.trim();
  const userPassword = inputEl.value.trim();

  if (!name || !email || !userPassword) {
    text.classList.remove("hidden");
    text.innerText = "Please fill all fields";
    return;
  }

  loginBtnEl.innerText = "Logging in...";
  loginBtnEl.classList.remove("hidden");
 loginBtnEl.classList.remove("text-red-500");
  loginBtnEl.classList.add("text-green-400");

  setTimeout(() => {
    loginBtnEl.innerText = "Login successful";
    loginBtnEl.classList.remove("text-red-500");
    loginBtnEl.classList.add("text-white");
    form.reset();

    setTimeout(() => {
      loginBtnEl.classList.add("hidden");
      loginBtnEl.innerText = "Submit";
      loginBtnEl.classList.remove("text-green-400");
    }, 1000);
}, 2000);


});
