/**
 * Atbild par HTML izmaiņām ToDo list uzdevumā
 */
class ToDoElementEditor {
    constructor (list_selector, select_selector, settings) {
        this.list = document.querySelector(list_selector);
        this.select_element = document.querySelector(select_selector);
        this.settings = settings;
    }
    addTask(parent_id, id, text, status = false) {
        if (parent_id == 0) {
            this.addToList(parent_id, id, text, status, this.list);
            this.addToSelect(id, text);
        }
        else {
            this.addToSubList(parent_id, id, text, status);
        }
    }

    addToList(parent_id, id, text, status, list_element) {
        const obj = this,
            item = document.createElement('li'),
            checkbox = document.createElement('input'),
            span = document.createElement('span'),
            delete_btn = document.createElement('a');
        item.dataset.id = id;
        item.dataset.parent_id = parent_id;
        checkbox.checked = status;
        checkbox.setAttribute('type', 'checkbox');
        if (this.settings.hasOwnProperty('done')) {
            checkbox.onchange = this.settings.done;
        }
        span.textContent = text;

        delete_btn.setAttribute('href', "#");
        delete_btn.textContent = "x";
        delete_btn.classList.add('delete_btn');

        delete_btn.onclick = function (event) {
            event.preventDefault();
            if (obj.settings.hasOwnProperty('delete')) {
                obj.settings.delete.bind(this)(event);
            }

            if (parent_id == 0) {
                obj.select_element.querySelector('[value="' + id +  '"]').remove();
            }

            delete_btn.parentNode.remove();
        }

        item.append(checkbox, span, delete_btn);

        list_element.append(item);
    }

    addToSubList(parent_id, id, text, status) {
        const parent_item = this.list.querySelector('[data-id="' + parent_id +  '"]');
        let sub_list = parent_item.querySelector('ol');
        if (sub_list == null) {
            sub_list = document.createElement('ol');
            parent_item.append(sub_list);
        }

        this.addToList(parent_id, id, text, status, sub_list);
    }

    addToSelect(id, text) {
        const item = document.createElement('option');
        item.value = id;
        item.textContent = text;

        this.select_element.append(item);        
    }
}