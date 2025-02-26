const inputBox=document.getElementById('input-box');
const ListContainer=document.getElementById('list-container');

function addTask(){
    if(inputBox.value===''){
        alert('Please enter a task');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00D7';
        li.appendChild(span);
    }
    inputBox.value='';
}