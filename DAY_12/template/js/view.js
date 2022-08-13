ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click',function(){
    var name    = ELEMENT_FORM_INPUT_NAME.value
    var medium  = ELEMENT_FORM_INPUT_LEVEL.value
    var id      = randomString(22)
    if (ELEMENT_INPUT_ID.value == '') {
        arrData.unshift({id, name, level: medium})
    } else {
        id = ELEMENT_INPUT_ID.value
        for (let index = 0; index < arrData.length; index++) {
            if (arrData[index].id === id) {
                arrData[index] = {id, name, level: medium};
                break;
            }
        }
    }
    localStorage.setItem('data', JSON.stringify(arrData))
    
    arrData = JSON.parse(localStorage.getItem('data'))
    ShowData()
    handleToggleForm(false)
    toggleFrom = true
    resetData()
})
arrData = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
ShowData()

ELEMENT_CANCLE.addEventListener('click', function() {
    handleToggleForm(false)
    toggleFrom = true
    resetData()
})



