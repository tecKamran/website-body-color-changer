const btns=document.querySelectorAll('.btn')
const body=document.querySelector('body')

btns.forEach(function(btn){
    
    btn.addEventListener('click',function(e){
       
        if(e.target.id==='gray'){
            body.style.background=e.target.id
        }
    })
    btn.addEventListener('click',function(e){
       
        if(e.target.id==='white'){
            body.style.background=e.target.id
        }
    })
    btn.addEventListener('click',function(e){
       
        if(e.target.id==='blue'){
            body.style.background=e.target.id
        }
    })
    btn.addEventListener('click',function(e){
       
        if(e.target.id==='yellow'){
            body.style.background=e.target.id
        }
    })

});