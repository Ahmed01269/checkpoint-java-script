var btnplus =Array.from(document.getElementsByClassName('fas fa-plus-circle'))
console.log('fas fa-plus-circle' ,btnplus);
for(let el of btnplus){
    el.addEventListener("click",function(){
        let t=(el.previousElementSibling).value;
        let s=parseInt(t);
        s++;
        (el.previousElementSibling).value=s;
        sum();
    })
}
var btnminus  =Array.from(document.getElementsByClassName('fas fa-minus-circle'))
for(let el of btnminus){
    el.addEventListener("click",function(){
        let t=(el.nextElementSibling).value;
        let s=parseInt(t);
        if(s>0){
            s--;
        }
        (el.nextElementSibling).value=s;
        sum();
    })
}
function sum(){
    var price=Array.from(document.getElementsByClassName('unit-price'))
    var quantity=Array.from(document.getElementsByClassName('quantity'))
    var s=0
    for (let i = 0; i<price.length; i++) {
        s+=parseInt(price[i].innerText)*parseInt(quantity[i].value)
    }
    return (document.querySelector(".total").innerHTML=s+" "+"TND")
}
var heart=Array.from(document.getElementsByClassName('fas fa-heart'))
for(let el of heart){
    el.addEventListener("click",function(){
        el.classList.toggle("red")
    })
}

var dl=Array.from(document.getElementsByClassName('fas fa-trash-alt'))

for(let el of dl){
    el.addEventListener("click",function(){
        el.parentNode.remove();;
    })
}