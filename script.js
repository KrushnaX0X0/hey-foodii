
let obtn=document.querySelector("#orderNow")

obtn.addEventListener("click",()=>{
      let form=document.querySelector("#form-div")
      form.style.display='block';
})


let cross=document.querySelector("#cross")
cross.addEventListener("click",()=>{
    
    let form=document.querySelector("#form-div")
    form.style.display='none';
})