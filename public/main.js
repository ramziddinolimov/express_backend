
const buttonElement1 = document.querySelector("#buttonStudents")
const buttonElement2 = document.querySelector("#buttonCourses")
const buttonElement3 = document.querySelector("#buttonSources")

const inputElement = document.querySelector(".searchbox")
const selectElement = document.querySelector(".navitem")
const navElement = document.querySelector(".navbar")
const btnElement = document.querySelector(".btn")


function create1() {
     let divElement = document.createElement('div')
     let formElement = document.createElement('form')
     let inputElement = document.createElement('input')
     let iElement = document.createElement('i')

     
     formElement.appendChild(inputElement)
     formElement.appendChild(iElement)

     divElement.appendChild(formElement)
     // navElement.appendChild(divElement)

     divElement.classList.add("searchbox")
     iElement.classList.add("fa fa-search")

     inputElement.placeholder = "search"
     inputElement.type = "text"
     iElement.ariaHidden = "true"

     return divElement

     
     
}


create1()



btnElement.addEventListener('click', () => {
     
})

buttonElement1.addEventListener('click', () => {
    
     inputElement.textContent = ""
     selectElement.textContent = ""
     
     navElement.appendChild(create1())
     // create1()

     

})





buttonElement2.addEventListener('click', () => {
    

})





buttonElement3.addEventListener('click', () => {
    

})