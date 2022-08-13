// open,close input
const handleToggleForm = (open) => {
    if(open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    }else {
        ELEMENT_FORM_INPUT.setAttribute('hidden' , false)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK' 
    }
}

// random ID
function randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// reset input
const resetData = () => {
    ELEMENT_FORM_INPUT_NAME.value = ''
    ELEMENT_FORM_INPUT_LEVEL.value = 'Small'
    ELEMENT_INPUT_ID.value = ''
}

// Show Data
const ShowData = () =>{
    console.log(arrData)
    let xhtml = '';
    arrData.forEach((item, index) => {
        var levelInput = item.level
        console.log(item.color)
        switch (levelInput) {
            case 'Small':
                levelInput = '<span class="label label-default">Small</span>'
                break;
            case 'Medium':
                levelInput = '<span  class="label label-info">Medium</span>'
                break;
            case 'High':
                levelInput = '<span  class="label label-danger">High</span>'
                break;
        }
        xhtml += ` <tr ${item.color}>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center">${levelInput}</td>
            <td>
                <button type="button" onclick="editItem('${item.id}')" class="btn btn-warning">Edit</button>
                <button type="button" onclick="deletaItem('${item.id}')" class="btn btn-danger">Delete</button>
            </td>
            <td>
            <input type="checkbox" ${item.color?'checked':false} onchange="doneTask('${item.id}')" id="check${index}" class="check_stt" >
            <label for="check${index}" class="text-center">Done</label>
            </td>
        </tr>`
        
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}

// status data
function doneTask(id) {
    var item = arrData.find(ten_gi_cung_duoc => {
        return ten_gi_cung_duoc.id === id 
    })
    var index = arrData.indexOf(item);
    changePosition(arrData, index, arrData.length-1)
    localStorage.setItem('data', JSON.stringify(arrData))
    ShowData()
}

function changePosition(arr, from, to) {
    let changeColor = arr.splice(from, 1)[0]
    arr.splice(to, 0, changeColor = {...changeColor,'color':'style="background-color: #5cb85c;"'}) 
    console.log(changeColor)
    return arr
}  

// delete data
function deletaItem(id){
    alert('Are you sure')
    var item = arrData.find(ten_gi_cung_duoc => {
        return ten_gi_cung_duoc.id === id 
    })
    var index = arrData.indexOf(item);
    arrData.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(arrData))
    ShowData()
}

// edit data
function editItem(id) {
    handleToggleForm(true)
    var item = arrData.find(ten_gi_cung_duoc => {
        return ten_gi_cung_duoc.id === id 
    })
    ELEMENT_FORM_INPUT_NAME.value = item.name
    ELEMENT_FORM_INPUT_LEVEL.value = item.level
    ELEMENT_INPUT_ID.value = item.id
}


 


