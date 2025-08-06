// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let secretFriendArray = [];
let friendNameInput = 'amigo';
let frinedListOutput = 'listaAmigos';

function addSecretFriend() {
    const name = document.getElementById(friendNameInput).value;

    if (typeof name !== 'string' || name.trim() === '') {
        alert('El nombre no puede ser vacio!');
        return;
    }
    secretFriendArray.push(name.trim());
    console.log(secretFriendArray);
    addToList(name);
    clearInput(friendNameInput);
}

function clearInput(input) {
    document.getElementById(input).value = '';    
}

function clearList(list) {
    document.getElementById(list).innerHTML = '';
}

function addToList(name) {
    const ul = document.getElementById(frinedListOutput);
    const li = document.createElement('li');
    li.innerText = `Concursante: ${name}`;    
    ul.appendChild(li);
}

function pickFriend() {
    if (!Array.isArray(secretFriendArray) || secretFriendArray.length <= 1) {
        aler("Debe tener al menos dos amigos para sortear");
    }

    const randomIndex = Math.floor(Math.random() * secretFriendArray.length);
    alert("El amigo secreto es" + secretFriendArray[randomIndex]);
    clearList(frinedListOutput);
}