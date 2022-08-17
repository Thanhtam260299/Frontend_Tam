// search
const handleToggleFormSearch = (open) => {
    if(open) {
        var contenTask = ELEMENT_SEARCH.value.toUpperCase()
        if(!contenTask.trim()) {
            alert('Vui long nhap thong tin')
            toggle = false
            return false
        } else {
            ELEMENT_BTN_GO.style.backgroundColor = 'red'
            ELEMENT_BTN_GO.innerHTML = 'CLOSE'

            var đk = arrData.some(item =>item.name.toUpperCase().includes(contenTask))
            console.log(đk)
            if (!đk) {
                ELEMENT_CONTENT.innerHTML = 'Không có dữ liệu cần tìm'
                ELEMENT_CONTENT.classList.add('no-data-search')
                alert('no')
            } else {
                findItemSearch()
                ShowData()
                arrData = getItemLocalstorage()
            }
        }
    } else {
        ELEMENT_BTN_GO.style.backgroundColor = '#46b8da'
        ELEMENT_BTN_GO.innerHTML = 'Go!'
        ELEMENT_SEARCH.value = ''
        ELEMENT_CONTENT.classList.remove('no-data-search')
        ShowData() 
    }
}

// find item search
const findItemSearch = () => {
    contenTask = ELEMENT_SEARCH.value.toUpperCase()
    arrData = arrData.filter(items => items.name.toUpperCase().includes(contenTask))
}

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
        xhtml += ` <tr ${item.color} id="no_data">
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
    console.log(done)
    if(done) {
        var item = arrData.find(ten_gi_cung_duoc => ten_gi_cung_duoc.id === id)
        var index = arrData.indexOf(item);
        changePosition(arrData, index, arrData.length-1)
        setItemLocalstorage()
        ShowData()
        // done = false;
    }else {
        var item = arrData.find(ten_gi_cung_duoc => ten_gi_cung_duoc.id === id)
        var index = arrData.indexOf(item);
        returnPosition(arrData, index, 0)
        setItemLocalstorage()
        ShowData()
    }
    done = !done  
}

function returnPosition(arr, from, to) {
    let changeColor = arr.splice(from, 1)[0]
    delete changeColor.color
    arr.splice(to, 0, changeColor) 
    console.log(changeColor)
    return arr
}  

function changePosition(arr, from, to) {
    let changeColor = arr.splice(from, 1)[0]
    arr.splice(to, 0, changeColor = {...changeColor,'color':'style="background-color: #5cb85c;"'}) 
    console.log(changeColor)
    return arr
}  

// delete data
function deletaItem(id){
            let text;
        if (confirm("Press a button!") == true) {
            // let item = arrData.find(ten_gi_cung_duoc => ten_gi_cung_duoc.id === id )
            // var index = arrData.indexOf(item);
            // arrData.splice(index, 1)
            arrData = arrData.filter(item => item.id != id)
            setItemLocalstorage()
            if (toggle===false) {
                getItemLocalstorage()
                findItemSearch()
                ShowData()
                arrData = getItemLocalstorage()
            } else {
                ShowData()
            }
        }
            
}

// editItem
function editItem(id) {
    handleToggleForm(true)
    var item = arrData.find(ten_gi_cung_duoc => {
        return ten_gi_cung_duoc.id === id 
    })
    ELEMENT_FORM_INPUT_NAME.value = item.name
    ELEMENT_FORM_INPUT_LEVEL.value = item.level
    ELEMENT_INPUT_ID.value = item.id
}


//add
function add(itemArr) {
    arrData.unshift(itemArr)
}

// getItemLocalstorage
const getItemLocalstorage = () => {
    let dataArray = JSON.parse(localStorage.getItem('data'))
    dataArray = dataArray ? dataArray : []
    return dataArray
}

// setItemLocalstorage
const setItemLocalstorage = () => {
    localStorage.setItem('data', JSON.stringify(arrData))
}
 


