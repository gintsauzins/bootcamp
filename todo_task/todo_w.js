//sakuma definet notikumu, kaa parkert notikumu (klikski)


let container = document.querySelector('.ul_container');
let list_el_template = document.querySelector('.template');
let list_el_clone;

let submited = false;

document.querySelector('#todo').onsubmit = function (event) {  //event var izmantot pamata 3 lietam.   visbiezak izmanto  kko izsaukt no objekta event.preventDefault() -partver noklusejuma darbibu
    event.preventDefault();
    let input = this.querySelector('[name=todo_text]');
    addNewListElement(input.value);
    input.value = '';

};

for(let todo of Object.values(data)) {
    addNewListElement(todo.text);
}


    function addNewListElement(text) {
        list_el_clone = list_el_template.cloneNode();
        list_el_clone.textContent = text;
        list_el_clone.classList.remove('template');
        container.append(list_el_clone);
 
}

function addEntryToLocalStorage(text) {
    const id = data['next_id'];
    data[id] = {
        id: id,
        text: text,
        completed: false
    };

    ++data['next_id'];
    localStorage.setItem('js_todo_list_data', JSON.stringify(data));
}

