const inputEl = document.querySelector("#input-el")
const submitBtn = document.querySelector("#submit-btn")
let container = document.querySelector("#container")
let taskEl = document.getElementsByClassName("task-el")


submitBtn.addEventListener("click", function(){
    render(inputEl.value)
    inputEl.value = ""
})

function mark(element){
    if (element.hasAttribute("style")){
        element.removeAttribute("style")
        element.parentElement.setAttribute("style", "background-color: #E9C46A;")
        // element.removeAttribute("clicked")
    } else {
        element.setAttribute("style", "text-decoration-line: line-through;")
        element.parentElement.setAttribute("style", "background-color: #918463;")
        // element.setAttribute("clicked", "")
    } 
}

function removeItem(element){
    element.parentElement.remove()
}


function render(task){
    if (task) {
        container.innerHTML += `
        <span class="task-el">
            <p onclick="mark(this)">${task}</p>
            <button onclick="removeItem(this)"><i class="material-icons">delete</i></button>
        </span>
        `
    }
    
    // add more to container later
}