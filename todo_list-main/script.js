const storageManager = new StorageManager('todo_list');
const toDoElementEditor = new ToDoElementEditor('.todo_list', '.todo_options', {
    done: function (event) {
        event.preventDefault();
        storageManager.updateStatus(
            this.parentNode.dataset.parent_id,
            this.parentNode.dataset.id,
            this.checked
        );
    },
    delete: function (event) {
        storageManager.delete(
            this.parentNode.dataset.parent_id,
            this.parentNode.dataset.id,
        );
    }
});

for (let parent_id in storageManager.getData()) {
    for (let id in storageManager.getData()[parent_id]) {
        const entry = storageManager.getEntry(parent_id, id);
        toDoElementEditor.addTask(
            parent_id,
            id,
            entry.text,
            entry.status
        );
    }
}


document.querySelector('#todo_list_form').onsubmit = function (event) {
    event.preventDefault();

    const input = this.querySelector('input');
    const select = this.querySelector('select');

    const parent_id = select.value;

    const id = storageManager.add(parent_id, input.value);
    toDoElementEditor.addTask(parent_id, id, input.value);

    input.value = '';
};



/*
const START_VALUE = 1;
const END_VALUE = 10;
for (let i = START_VALUE; i <= END_VALUE; i++)

for (let cell of board.children) -> ejam cauri masīva vērtībām

for (let r in storageManager.storage.moves) -> ejam cauri atstēgām iekš objekta
*/
