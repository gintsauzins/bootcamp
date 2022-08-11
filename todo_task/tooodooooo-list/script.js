// add button
document.getElementById("addinput").onsubmit = function(event){
  event.preventDefault();
  var input=document.getElementById('addin').value;
  if(input==''){
      alert("Please Enter a Task")
  }
  else{
      document.getElementById('tasks').innerHTML +=`
      <div class="task">
          <div id="taskname">
              ${document.getElementById('addin').value}
          </div>
          <button class="delete">
          X
          </button>
       </div>
  `;
  document.getElementById('addin').value='';
  }
//delete button
var current_tasks = document.querySelectorAll(".delete");
for(var i=0; i<current_tasks.length; i++){
  current_tasks[i].onclick = function(){
      this.parentNode.remove();
  }
}
}




//localstorage


const storageInput = document.querySelector('·add__input');
const submit = document.querySelector('.submit');