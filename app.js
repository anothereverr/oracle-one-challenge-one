// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let secretFriendArray = [];

function addSecretFriend() {
    const name = document.getElementById('amigo').value;

    if (typeof name !== 'string' || name.trim() === '') {
        alert('El nombre no puede ser vacio!');
        return;
    }
    secretFriendArray.push(name.trim());
    console.log(secretFriendArray);
    addToList(name);
}

function addToList(name) {
    const ul = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.innerText = `Concursante: ${name}`;    
    ul.appendChild(li);
}


