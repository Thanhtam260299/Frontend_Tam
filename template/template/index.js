
ELEMENT_BTN.addEventListener('click',function() {
   if(toggleForm) {
      ELEMENT_FORM.style.display = 'block'
      ELEMENT_BTN.style.backgroundColor = 'red'
      ELEMENT_BTN.innerText = 'Close Task'
   } else {
      ELEMENT_FORM.style.display= 'none'
      ELEMENT_BTN.style.backgroundColor = '#5BC0DE'
      ELEMENT_BTN.innerText = 'Add Task'
   }
   toggleForm = !toggleForm
})

ELEMENT_SUBMIT.addEventListener('click',function(){
   var name    = ELEMENT_INPUT.value
   var medium  = ELEMENT_LEVEL.value
   id = (Math.floor(Math.random() * 10000000))

   if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', '[]')
   }

   var listTask = JSON.parse(localStorage.getItem('data'));
   listTask.push({id: id, name: name, medium: medium});
   localStorage.setItem('data', JSON.stringify(listTask))
   
   // in ra các phần tử, duyệt qua array
   listTask.forEach((listTask,index) => {
      index++
      var levelMedium = listTask.medium == 2 ? '<span  class="label label-danger">High</span>' : '<span  class="label label-info">Medium</span>';
      var nameId = index
      listContent += 
      `<tr>
      <td class="text-center task-number">${index}</td>
      <td  class="task-content">${listTask.name}</td>
      <td class="text-center">${levelMedium}</td>
      <td>
      <button type="button" class="btn btn-warning">Edit</button>
      <button type="button" onclick="elementDelete(${nameId})" class="btn btn-danger" id="btn-delete">Delete</button>
      </td>
      </tr>`
   });
   document.getElementById('data_new').innerHTML = listContent
   var listContent = ''
})

   function elementDelete(nameId){
      listTask.splice(nameId,1)
      console.log(listTask)
   }
   


