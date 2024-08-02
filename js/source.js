console.log("Coming from source javascript file")

const formulas = {
triangle: (b,h)=>0.5*b*h,
rectangle: (l,w) => l*w,
square:(l,w)=> l*w,
pentagone: (p,a) => 0.5*p*a
}

let calcButton = document.querySelectorAll("#calculate")
for (let btn of calcButton){
    btn.addEventListener('click',calculateArea)
    btn.parentNode.querySelector("#alert").addEventListener('click',function(event){
        btn.parentNode.querySelector('#alert').classList.add('hidden');
    })
}

function calculateArea(event){
    let card = event.target.parentNode.parentNode.parentNode
    let alert = card.querySelector("#alert")
    let symbleName = card.getAttribute('id')
    let firstValue = parseFloat(card.querySelector('#value-1').value)
    let secondValue = parseFloat(card.querySelector('#value-2').value)
    if (!firstValue){
        alert.classList.remove('hidden')
    }
    if (!secondValue){
        alert.classList.remove('hidden')
    }
    let result = card.querySelector('#result')
    let asideResult = document.querySelector("#result-aside")
    let area = formulas[symbleName](firstValue,secondValue)
    if(area){
        alert.classList.add('hidden')
         result.innerText = `Your ${symbleName} Area is ${area} cm square`
         asideResult.innerText = `Result of calculation: ${area}`
    }
    
}