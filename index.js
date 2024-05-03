const monday = document.getElementById("monday-hover");
const mondayAmount = document.querySelector(".mon-amount");

const tuesday = document.getElementById("tuesday-hover");
const tuesdayAmount = document.querySelector(".tue-amount");

const wednesday = document.getElementById("wednesday-hover");
const wednesdayAmount = document.querySelector(".wed-amount");

const thursday = document.getElementById("thursday-hover");
const thursdayAmount = document.querySelector(".thu-amount");

const friday = document.getElementById("friday-hover");
const fridayAmount = document.querySelector(".fri-amount");

const saturday = document.getElementById("saturday-hover");
const saturdayAmount = document.querySelector(".sat-amount");

const sunday = document.getElementById("sunday-hover");
const sundayAmount = document.querySelector(".sun-amount");

const sevendaysData = [
    {
      "day": "mon",
      "amount": "$17.45"
    },
    {
      "day": "tue",
      "amount": "$34.91"
    },
    {
      "day": "wed",
      "amount": "$52.36"
    },
    {
      "day": "thu",
      "amount": "$31.07"
    },
    {
      "day": "fri",
      "amount": "$23.39"
    },
    {
      "day": "sat",
      "amount": "$43.28"
    },
    {
      "day": "sun",
      "amount": "$25.48"
    }
  ]

  // Add event listeners for each day
monday.addEventListener("mouseenter", event =>{
    updatedataMon("mon");
});

monday.addEventListener("mouseleave", event =>{
    cleardataMon("mon");
});

tuesday.addEventListener("mouseenter", event =>{
    updatedataTue("tue");
});

tuesday.addEventListener("mouseleave", event =>{
    cleardataTue("tue");
});

wednesday.addEventListener("mouseenter", event =>{
     updatedataWed("wed");
});

wednesday.addEventListener("mouseleave", event =>{
    cleardataWed("wed");
});

thursday.addEventListener("mouseenter", event =>{
    updatedataThu("thu");
});

thursday.addEventListener("mouseleave", event =>{
    cleardataThu("thu");
});

friday.addEventListener("mouseenter", event =>{
    updatedataFri("fri");
});

friday.addEventListener("mouseleave", event =>{
    cleardataFri("fri");
});

saturday.addEventListener("mouseenter", event =>{
    updatedataSat("sat");
});

saturday.addEventListener("mouseleave", event =>{
    cleardataSat("sat");
});

sunday.addEventListener("mouseenter", event =>{
    updatedataSun("sun");
});

sunday.addEventListener("mouseleave", event =>{
    cleardataSun("sun");
});

// Function to update data when hover on the bar
function updatedataMon(day) {
    const data = sevendaysData.find(item => item.day === day);
    
    mondayAmount.innerHTML = data.amount;
    mondayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:63px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"

}

function updatedataTue(day){
    const data = sevendaysData.find(item => item.day === day);

    tuesdayAmount.innerHTML = data.amount;
    tuesdayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:113px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"
}

function updatedataWed(day){
    const data = sevendaysData.find(item => item.day === day);
    
    wednesdayAmount.innerHTML = data.amount;
    wednesdayAmount.style = "position:absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; color:hsl(33, 100%, 98%); min-width:50px; margin-bottom:153px; text-align:center; border-radius: 5px; font-weight:700;"
}

function updatedataThu(day){
    const data = sevendaysData.find(item => item.day === day);
    
    thursdayAmount.innerHTML = data.amount;
    thursdayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:103px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"
}

function updatedataFri(day){
    const data = sevendaysData.find(item => item.day === day);
    
    fridayAmount.innerHTML = data.amount;
    fridayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:83px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"
}

function updatedataSat(day){
    const data = sevendaysData.find(item => item.day === day);
    
    saturdayAmount.innerHTML = data.amount;
    saturdayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:123px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"
}

function updatedataSun(day){
    const data = sevendaysData.find(item => item.day === day);
    
    sundayAmount.innerHTML = data.amount;
    sundayAmount.style = "position: absolute; background:hsl(25, 47%, 15%); padding: 7px 6px; margin-bottom:83px; color:hsl(33, 100%, 98%); min-width:50px; text-align:center; border-radius: 5px; font-weight:700;"
}

//To clear the data when the hover is move away from the bar. 
function cleardataMon(){
    mondayAmount.innerHTML = "";
    mondayAmount.style = "";
}

function cleardataTue(){
    tuesdayAmount.innerHTML = "";
    tuesdayAmount.style = "";
}

function cleardataWed(){
    wednesdayAmount.innerHTML = "";
    wednesdayAmount.style = "";
}

function cleardataThu(){
    thursdayAmount.innerHTML = "";
    thursdayAmount.style = "";
}

function cleardataFri(){
    fridayAmount.innerHTML = "";
    fridayAmount.style = "";
}

function cleardataSat(){
    saturdayAmount.innerHTML = "";
    saturdayAmount.style = "";
}

function cleardataSun(){
    sundayAmount.innerHTML = "";
    sundayAmount.style = "";
}

function fetchData(){
    fetch("JSON/data.json")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.error(error);
    })
}

fetchData()