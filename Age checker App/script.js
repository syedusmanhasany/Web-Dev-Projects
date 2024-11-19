let inputOpen = false;
let date;
let user_input = document.getElementById("user-input");
let addbutton = document.getElementById("add-btn");
let icon = document.getElementById("setting-icon");
let beforetxt = document.getElementById("before");
let aftertxt = document.getElementById("after");
let year = document.getElementById("year");


const open_close = ()=>{
if(inputOpen==true){
  user_input.classList.add("hide");
  addbutton.classList.add("hide");
  console.log(inputOpen)

}else{
  user_input.classList.remove("hide");
  addbutton.classList.remove("hide");
  console.log(inputOpen)

}
 inputOpen = !inputOpen;
console.log("click")
}


const calculateAge = ()=>{
  let current_date = new Date()
  let age = current_date - date;
  const yearcal = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
  if(yearcal<0){
    year.innerText = "Invalid Date You Cannot Enter date which is grater than current date"
  }
  else{
    if(yearcal==1 || yearcal == 0){
  year.innerText = yearcal + " year"
  }else{
    year.innerText = yearcal + " years"

  }
}
  console.log(age)
}

const setdate = ()=>{
  let dateString = user_input.value
  date = new Date(dateString)
  console.log(date)
  if(date){
    beforetxt.classList.add("hide");
    aftertxt.classList.remove("hide");
    calculateAge() 
  }else{
    aftertxt.classList.add("hide");
    beforetxt.classList.remove("hide");

  }
  // console.log(date);
}
``
   


icon.addEventListener("click",open_close)
addbutton.addEventListener("click", setdate)

