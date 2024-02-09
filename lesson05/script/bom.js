const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if(input.value != ""){
        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        listElement.innerHTML = input.value;
        deleteButton.textContent = "❌";
        listElement.append(deleteButton);
        list.append(listElement);
        deleteButton.addEventListener('click', function () {
            list.removeChild(listElement);
            input.focus();
        });
        input.value='';
    }
    else{
        input.focus();
    }
});