let div = document.createElement("div") // la div de la page entiere 
div.id = 'divv'
let divcalc = document.createElement("div") // le rectangle de la calculette
divcalc.id = 'divcalc'
let body = document.getElementsByTagName("body")[0]
body.insertAdjacentElement("afterbegin", div)
div.insertAdjacentElement("afterbegin", divcalc)

//let out = document.createElement("output")
//out.id = "out2"

// creation des 3 recangle de la calculette
let rec0 = document.createElement("div")
divcalc.insertAdjacentElement("afterbegin", rec0)
rec0.id="rec0"

let rec1 = document.createElement("div")
divcalc.insertAdjacentElement("afterbegin", rec1)
rec1.id ="rec1"

let rec2 = document.createElement("div")
divcalc.insertAdjacentElement("afterbegin", rec2)
rec2.id="rec2"

let rec3 = document.createElement("div")
divcalc.insertAdjacentElement("afterbegin", rec3)
rec3.id="rec3"

let rec4 = document.createElement("div")
divcalc.insertAdjacentElement("afterbegin", rec4)
rec4.id ="rec4"

let divaff = document.createElement("div")
let para = document.createElement("p")
divcalc.insertAdjacentElement("afterbegin",divaff)
divaff.id = "divaff"
divaff.insertAdjacentElement("afterbegin",para)

// les operateurs

let plus = document.createElement("button")
rec1.insertAdjacentElement("afterbegin", plus)
plus.innerText = "+"

let moins = document.createElement("button")
rec2.insertAdjacentElement("afterbegin", moins)
moins.innerText = "-"

let division = document.createElement("button")
rec4.insertAdjacentElement("afterbegin", division)
division.innerText = ":"

let multiplication = document.createElement("button")
rec0.insertAdjacentElement("afterbegin", multiplication)
multiplication.innerText = "x"

let effacer = document.createElement("button")
rec0.insertAdjacentElement("afterbegin",effacer)
effacer.innerText = "C"
let egale = document.createElement("button")
egale.innerText = "="
rec0.insertAdjacentElement("afterbegin",egale)

// les button(chiifre)

let chiffre8 = document.createElement("button")
rec1.insertAdjacentElement("afterbegin", chiffre8)
let chiffre7 = document.createElement("button")
rec1.insertAdjacentElement("afterbegin", chiffre7)
let chiffre6 = document.createElement("button")
rec1.insertAdjacentElement("afterbegin", chiffre6)

let chiffre5 = document.createElement("button")
rec2.insertAdjacentElement("afterbegin", chiffre5)
let chiffre4 = document.createElement("button")
rec2.insertAdjacentElement("afterbegin", chiffre4)
let chiffre3 = document.createElement("button")
rec2.insertAdjacentElement("afterbegin", chiffre3)

let chiffre2 = document.createElement("button")
rec4.insertAdjacentElement("afterbegin", chiffre2)
let chiffre1 = document.createElement("button")
rec4.insertAdjacentElement("afterbegin", chiffre1)
let chiffre0 = document.createElement("button")
rec4.insertAdjacentElement("afterbegin", chiffre0)

let chiffre9 = document.createElement("button")
rec0.insertAdjacentElement("afterbegin", chiffre9)
// lien button = chiffre 
chiffre0.innerText = 0
chiffre1.innerText = 1
chiffre2.innerText = 2
chiffre3.innerText = 3
chiffre4.innerText = 4
chiffre5.innerText = 5
chiffre6.innerText = 6
chiffre7.innerText = 7
chiffre8.innerText = 8
chiffre9.innerText = 9




chiffre1.addEventListener("click",function(){
    para.innerText = divaff.innerText + "1"
})

chiffre2.addEventListener("click",function(){
    para.innerText = divaff.innerText + "2"
})

chiffre3.addEventListener("click",function(){
    para.innerText = divaff.innerText + "3"
})

chiffre4.addEventListener("click",function(){
    para.innerText = divaff.innerText + "4"
})

chiffre5.addEventListener("click",function(){
    para.innerText = divaff.innerText + "5"
})

chiffre6.addEventListener("click",function(){
    para.innerText = divaff.innerText + "6"
})

chiffre7.addEventListener("click",function(){
    para.innerText = divaff.innerText + "7"
})

chiffre8.addEventListener("click",function(){
    para.innerText = divaff.innerText + "8"
})
chiffre9.addEventListener("click",function(){
    para.innerText = divaff.innerText + "9"
})

chiffre0.addEventListener("click",function(){
    para.innerText = divaff.innerText + "0"
})
let valeur1
let operation 
let valeur2
let verification
plus.addEventListener('click',function(){
    valeur1 = para.innerText
    operation = "+"
    para.innerText= ""
})

moins.addEventListener('click',function(){
    valeur1 = para.innerText
    operation = "-"
    para.innerText= ""
})

division.addEventListener('click',function(){
    valeur1 = para.innerText
    operation = "/"
    para.innerText= ""
})

multiplication.addEventListener('click',function(){
    valeur1 = para.innerText
    operation = "*"
    para.innerText= ""
})

egale.addEventListener("click",function(){
    if(operation == "+"){
        let reponse 
    reponse = parseInt(valeur1) + parseInt(para.innerText)
    para.innerText = reponse 
    }
    
    if(operation == "-"){
        let reponse 
    reponse = parseInt(valeur1) - parseInt(para.innerText)
    para.innerText = reponse 
    }

    if(operation == "/"){
        let reponse 
    reponse = parseInt(valeur1) / parseInt(para.innerText)
    para.innerText = reponse 
    }

    if(operation == "*"){
        let reponse 
    reponse = parseInt(valeur1) * parseInt(para.innerText)
    para.innerText = reponse 
    }
})
effacer.addEventListener("click",function(){
    para.innerText = ""
})