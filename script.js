function addTask(){
    const taskTitle= document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle){
        //clonar o template
        const template= document.querySelector('.template');
       
        const newTask=template.cloneNode(true);
        
        newTask.querySelector('.task-title').textContent = taskTitle;

        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        const list=document.querySelector('#task-list');
        list.appendChild(newTask);
        
        //adicionar o evento remover 
        const removeBtn= newTask.querySelector(".btn-remove")
        .addEventListener("click",function(){
            removeTask(this);
        })
        
        //adicionar  o evento completrar tarefa
        const doneBtn= newTask.querySelector(".btn-done")
        .addEventListener("click",function(){
            completeTask(this);
        })
        } 

        
    }

    //limpar texto
    document.querySelector('#task-title').value="";


const addBtn = document.querySelector('#btn-add');

addBtn.addEventListener("click", function(e){
    e.preventDefault();//não efetuar reload ou [f5] no navegador
    console.log('eu cliquei no botão');
    addTask();
 })
 function removeTask(task){
     task.parentNode.remove(task);}
    
function completeTask(task){
    const taskComplete= task.parentNode;
    taskComplete.classList.toggle("done")
}