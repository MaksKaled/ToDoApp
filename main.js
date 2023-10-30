const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
console.log(inputBox.value)


function addTask(){
if(inputBox.value === '')
{
    alert('нужно что-то написать')
}else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let editButton = document.createElement('button');
    editButton.innerHTML = '&#9998;';
    li.appendChild(editButton);

    let deleteSpan = document.createElement('span');
    deleteSpan.innerHTML = '\u00D7';
    li.appendChild(deleteSpan);
  }
inputBox.value =''
saveData();
}



listContainer.addEventListener('click',function(e){
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveData();
}else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
}else if(e.target.tagName === 'BUTTON'){
    let li = e.target.parentElement;
    let taskText = li.firstChild.textContent;
    let changed = prompt('измени сообщение',taskText)
    
    if(changed!==null){
        li.firstChild.textContent = changed;
        saveData()
    }
    

}
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}


showTask()