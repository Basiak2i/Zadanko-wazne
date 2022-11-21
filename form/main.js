const userName = document.querySelector("#userName");
const age = document.querySelector("#age");
const btnUserdata = document.querySelector("main button");
const dataInput = document.querySelector("#dataInput");
const btnAddData = document.querySelector("article button");
const display = document.querySelector("section p");
let howManydata;

function checkUserData() {
  const userNameVal = userName.value;
  const ageVal = Number(age.value);

  if (userNameVal !== "" && ageVal) {
    display.innerHTML = `halo halo ${userNameVal}`;
    if (ageVal >= 18) {
      howManydata = 10;
      console.log(howManydata);
    } else {
      howManydata = 6;
      console.log(howManydata);
    }
  } else {
    display.innerHTML = "dodaj prawidlowe dane";
  }
}

function elementSort


btnUserdata.addEventListener("click", checkUserData);
btnAddData.addEventListener("click", elementSort);
