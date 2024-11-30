


//style for rectangle


let rectStyle = {
    height:"20vh",
    width:"40vh",
    border: "2px solid black",
    display:"flex",
    'justify-content': "center",
    'align-items': "center"   

}
// style for circle

let cirStyle = {
    'border-radius' : '50%',
    height:'15vh',
    width:'15vh',
    border:'2px solid black'
}



let btnStyle = {
    padding:"10px",
    width:"10vmin",
    borderRadius:"5px"
}

let divConProperties = {
    display : "flex",
    flexDirection : "column",
    alignItems : "center" , 
    gap : "20px"
}

//creating elements

let divContainer = document.createElement("div")
let divContainerH1 = document.createElement("div")
let inputDiv = document.createElement("div")
let textInput = document.createElement("input")
textInput.type='text'

let rectDiv = document.createElement("div")
let cirDiv = document.createElement("div")

let btnDiv = document.createElement('div')



let btn1 = document.createElement('button')
btn1.innerText= 'Green'


let btn2 = document.createElement('button')
btn2.innerText= 'Red'


let btn3 = document.createElement('button')
btn3.innerText= 'Blue'




for(let i in btnStyle){
    btn1.style[i] = btnStyle[i]
    btn2.style[i] = btnStyle[i]
    btn3.style[i] = btnStyle[i]
}



btnDiv.style.display='flex'
btnDiv.style.gap= '20px'

let arrBtn = [btn1,btn2,btn3]


let btn = document.querySelectorAll(".btn")

btn.forEach((e)=>{
    
    e.style.padding = "10px"
    e.style.width = "10vmin"
    e.style.borderRadius = "5px"
   
})


btn1.addEventListener("click",()=>changeColor('Green'))
btn2.addEventListener("click",()=>changeColor('Red'))
btn3.addEventListener("click",()=>changeColor('Blue'))

let color = ['Green', 'Red', 'blue']


let changeColor = (color)=>{
    cirDiv.style.backgroundColor=color
}



for(let i in rectStyle){
    rectDiv.style[i]= rectStyle[i]
}
for(let i in cirStyle){
    cirDiv.style[i] = cirStyle[i]
}





textInput?.addEventListener("change",(e)=>{
    changeColor(e.target.value)
    
})




let headingTag = document.createElement("h1")
headingTag.innerText = "Enter the color name in input box"

for(let i in divConProperties){
    divContainer.style[i] = divConProperties[i]
}







//child append 
divContainerH1.appendChild(headingTag)
inputDiv.appendChild(textInput)
rectDiv.appendChild(cirDiv)

//map to append more child in one div
arrBtn.map(e=>btnDiv.appendChild(e))

divContainer.appendChild(divContainerH1)
divContainer.appendChild(inputDiv)
divContainer.appendChild(rectDiv)
divContainer.appendChild(btnDiv)





document.body.appendChild(divContainer)