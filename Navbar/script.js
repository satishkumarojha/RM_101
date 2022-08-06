let toggle = document.querySelector("#opensidebar");
let sidebar = document.querySelector('.sidebar');

const openSidebar = ()=>{
    if(toggle.checked==true){
        sidebar.classList.add("openside")
    }
    else{
        sidebar.classList.remove("openside")
    }
}