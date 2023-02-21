//script for activate and desactivate the details box in each card product
var btns = [...document.querySelectorAll('.btn-details')]
var close = [...document.querySelectorAll('.close')]
var items =[...document.querySelectorAll('.details')]

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',(e)=>{
       e.preventDefault()
       var index = btns.indexOf(e.target)
       console.log(index)
        items[index].classList.add('active')

    })
    
}
close.forEach(element => {
    element.addEventListener('click',function(e){
        e.preventDefault()
        var index = close.indexOf(e.target)
        items[index].classList.remove('active')
})
})
