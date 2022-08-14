let debouncediv = document.querySelector(".text");
let id;
const debounce = (timer)=>{
    if(id){
        clearTimeout(id)
    }
        id=setTimeout(()=>{
            let h1 = document.createElement('h1')
            h1.innerText="Debounce text displayed after 3sec";
            debouncediv.innerHTML=null;
            debouncediv.append(h1);
        },timer);
}