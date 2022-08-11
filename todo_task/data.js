/*

const data = {  //aprakstit objektu
 
    "34": {
        id: 34,
        text: 'Pirmais uzdevums',
        completed: false    
    },
    "5": {
        id: 34,
        text: 'Otrais uzdevums',
        completed: false    
    },
    "1": {
        id: 34,
        text: 'Tresais uzdevums',
        completed: false    
    }


}; */


// lai pieklutu text; ir divi pierakstu varianti
// todo.text;  vai todo['text'];

let data = localStorage.getItem('js_todo_list_data');
if (data) {
    data = JSON.parse(data);
}
else {
    data = {
        next_id: 0
    };
}