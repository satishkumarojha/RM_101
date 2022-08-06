let dragged_element;
let start_y_position;
let element_to_replace;
let end_y_position;

 const startDrag = (event)=>{
    dragged_element = event.target;
    start_y_position = event.clientY;
    // console.log(dragged_element);
 }

 const dragEnter = (event)=>{
    element_to_replace = event.target;
    element_to_replace.classList.add("element_dragged_done")
}
const dropElement = (event)=>{
    let parent_element = document.getElementById("container");
    let end_y_position = event.clientY;
    element_to_replace.classList.remove("element_dragged_done");
    
    end_y_position > start_y_position? parent_element.insertBefore(element_to_replace, dragged_element):parent_element.insertBefore(dragged_element, element_to_replace);
}
const dragOver = (event)=>{
    event.preventDefault();
}

const removeDragClass = (event)=>{
    let element = event.target;
    element.classList.remove("element_dragged_done");

}