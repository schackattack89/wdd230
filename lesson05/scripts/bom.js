const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

var unsortedItems = [];
var sortedItems = [];

button.addEventListener('click', () => {
    if(input.value != ''){
        addItem();
        input.focus();
        input.value = "";
    }
});

function addItem(){
    unsortedItems.push(input.value);
    console.log(unsortedItems);
    updateList();
}

function updateList(){
    sortedItems = unsortedItems.sort();
    console.log(sortedItems);
    list.innerHTML = "";

    sortedItems.forEach(function(item){
        const listItem = document.createElement("li");
        const deleteButton = document.createElement('button');
        listItem.innerHTML = item;
        deleteButton.textContent = '✖';
        listItem.append(deleteButton);
        list.appendChild(listItem);        
        
        deleteButton.addEventListener('click', () =>{
            list.removeChild(listItem);
            input.focus();
        });
    });
}