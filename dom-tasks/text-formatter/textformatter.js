const textAreaEl = document.getElementById("textarea");
const dicebtnEl = document.getElementById("dice");
const ucBtnEl = document.getElementById("ucbtn");
const lcBtnEl = document.getElementById("lcbtn");
const resetBtnEl = document.getElementById("resetbtn");
const textEl = document.getElementById("text");
const errEl = document.getElementById("err");

const ucIcon = document.getElementById("uc-icon");
const lcIcon = document.getElementById("lc-icon");
const tyIcon = document.getElementById("typing-icon")

const randomwords = ["hello world", "hii", "Text", "CYBERDUDE", "PRAKASH", "AHHN VAAZHTHUKKAL VAAZHTHUKKAL", "trisha", "Javascript is easy?", "Random", "Instagram", "telegram"]

textAreaEl.addEventListener("input", () => {
  textAreaEl.value = textAreaEl.value.replace(/[^a-zA-Z\s]/g, "");
});

textAreaEl.addEventListener("focusin", function() {
    tyIcon.classList.add("hidden");
    errEl.classList.add("hidden")
})

textAreaEl.addEventListener("focusout", function() {
    tyIcon.classList.remove("hidden")
})

tyIcon.addEventListener("click", function(){
    textAreaEl.focus();
})

dicebtnEl.addEventListener("click", function(){
    
    const random = randomwords[Math.floor(Math.random() * randomwords.length)]
    
   textAreaEl.innerText = random;
})

console.log(dicebtnEl)


ucBtnEl.addEventListener("click", function () {
  if (textAreaEl.value== "") {
    errEl.classList.remove("hidden")
} else {
    lcIcon.classList.add("hidden")
    errEl.classList.add("hidden")
    textEl.classList.remove("hidden");
    ucIcon.classList.remove("hidden");
    textEl.innerText = textAreaEl.value.toUpperCase();
}
});
lcBtnEl.addEventListener("click", function () {
    if(textAreaEl.value == ""){
    errEl.classList.remove("hidden")
  }
  else{
    errEl.classList.add("hidden")
    textEl.classList.remove("hidden");
    textEl.innerText = textAreaEl.value.toLowerCase();
    lcIcon.classList.remove("hidden")
    ucIcon.classList.add("hidden");
  }
});
resetBtnEl.addEventListener("click", function () {
  textAreaEl.value = "";
  ucIcon.classList.add("hidden");
  lcIcon.classList.add("hidden");
  textEl.innerText = "";
  errEl.classList.add("hidden");
});
