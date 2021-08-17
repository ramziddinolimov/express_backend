
const buttonElement1 = document.querySelector("#buttonStudents")
const buttonElement2 = document.querySelector("#buttonCourses")
const buttonElement3 = document.querySelector("#buttonSources")
const formElement = document.querySelector("#formElement")

const nameinputElement = document.querySelector("#nameinputElement")
const ageinputElement = document.querySelector("#ageinputElement")
const selectElement = document.querySelector(".navitem")
const navElement = document.querySelector(".navbar")
const btnElement = document.querySelector(".btn")
const tbodyElement = document.querySelector("#tbodyElement")
const kursElement = document.querySelector("#kursElement")
const manbaElement = document.querySelector("#manbaElement")

window.addEventListener("DOMContentLoaded", async e=>{students ()})
async function students(){
     let respon = await fetch("/form",{
         method: "GET",
     });
     respon = await respon.json()
     create1(respon.data);
     
}


function create1(array) {


     tbodyElement.innerHTML = ""
     for(let i of array){
          let trElement = document.createElement('tr')
          let tdElement = document.createElement('td')
          let td2Element = document.createElement('td')
          let td3Element = document.createElement('td')
          let td4Element = document.createElement('td')
          let td5Element = document.createElement('td')
          let deleteButton = document.createElement('button')
     
          trElement.appendChild(tdElement)
          trElement.appendChild(td2Element)
          trElement.appendChild(td3Element)
          trElement.appendChild(td4Element)
          trElement.appendChild(td5Element)

          tdElement.textContent = i.name
          td2Element.textContent = i.age
          td3Element.textContent = i.kursi
          td4Element.textContent = i.manba
          td5Element.appendChild(deleteButton)
          deleteButton.textContent = "delete"
          tbodyElement.appendChild(trElement)
     }
    

     
     
}


formElement.addEventListener("submit", async event => {
     event.preventDefault()
    let response = await fetch("/uform",      {
     headers: {"Content-Type": "application/json",},
     method: "POST",
 
     body: JSON.stringify({
         name: nameinputElement.value,
         age: ageinputElement.value,
         kurs: kursElement.value,
         manba: manbaElement.value,
   
     })
    })
    response = await response.json()
    students()
 
 
    
 });



//  formElement2.addEventListener('submit', async event => {
//       event.preventDefault()
//  })

