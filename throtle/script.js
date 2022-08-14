let button = document.querySelector('.btn');

const throttler = (cb,delay)=>{
return function(){
    button.disabled=true;
    setTimeout(()=>{
      cb();
    },delay);
}
}

button.addEventListener('click',throttler(()=>{
    button.disabled=false;
    let h1=document.createElement('h1');
    h1.innerText='Throttling text displayed after 3sec and button enabled';
    document.querySelector('.text').innerHTML=null;
    document.querySelector('.text').append(h1);
},3000));