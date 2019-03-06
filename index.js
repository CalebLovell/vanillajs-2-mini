function addTodo(event) {
    event.preventDefault()
    let list = document.querySelector('ul');

    let item = document.createElement('li');
    let text = document.getElementById('item').value
    item.innerText = text
    item.addEventListener('click', toggleTodo)

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.addEventListener('click', removeTodo)
    item.appendChild(deleteButton)

    list.appendChild(item)
    document.getElementById('item').value = ''
}

function removeTodo(event) {
    event.target.parentNode.remove();
}

let nowVisible = `visibility: visible;`;
let notVisible = `visibility: hidden;`;

function toggleTodo(event) {
    let value = event.target.getAttribute('aria-checked')
    if(value !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
        document.getElementById('completed-message').style = nowVisible
        setTimeout(function(){
        document.getElementById('completed-message').style = notVisible
        }, 2000)
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}

function success(event) {

}

document
    .querySelector('button')
    .addEventListener('click', addTodo)