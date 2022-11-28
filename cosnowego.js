const userName = document.querySelector("#userName");
const age = document.querySelector("#age");
const btnUserdata = document.querySelector("main button");
const dataInput = document.querySelector("#dataInput");
const btnAddData = document.querySelector("article button");
const display = document.querySelector("section p");
let howManydata;
let liczba = 0;
let string = 0;
const tab_liczby [];
const tab_stringi [];
let liczby_do_wpisania = howManydata;

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
let liczba
let string
function sortowanie() {
    let dataValue = data.value;
    if (liczba + string < howManydata) {
        is (isNaN(dataValue)) {
            tab_stringi.push(dataValue);
            string++;
            else {
                tab_liczby.push(dataValue);
                wynik.innerHTML = 'mozesz wprowadzic ${liczby_do_wpisania}'
                string++;
                liczby_do_wpisania--;

            }
            else{
                tab_liczby.push(dataValue);
                liczba++;
            }
        }
    }
    if 
}


btnUserdata.addEventListener("click", checkUserData);
