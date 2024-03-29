const adviceNum = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const adviceBtn = document.querySelector("#adviceBtn");

const API_URL = "https://api.adviceslip.com/advice";
const getAdvice = async()=>{
try {
    const response = await fetch(API_URL);
    const advice = await response.json();
    adviceNum.textContent = advice.slip.id;
    adviceText.textContent = advice.slip.advice;
} catch (error) {
    console.log(error);
}

}
getAdvice();
adviceBtn.addEventListener('click',()=>getAdvice());