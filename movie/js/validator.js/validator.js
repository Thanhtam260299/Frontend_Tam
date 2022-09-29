ELEMENT_BTN_SIGN_UP                 = document.querySelector('.header__icon--sign-up')
ELEMENT_SIGN_UP                     = document.querySelector('.sign-up')
ELEMENT_BTN_SIGN_IN                 = document.querySelector('.header__icon--sign-in')
ELEMENT_USER                        = document.querySelector('.header__icon--user')
ELEMENT_NAME_USER                   = document.querySelector('.header__name-user')
ELEMENT_SIGN_IN                     = document.querySelector('.sign-in')
ELEMENT_LOG_IN                      = document.querySelector('.login')
ELEMENT_CLOSE_FORM                  = document.querySelectorAll('.form-close')
ELEMENT_INPUT_FULLNAME_SIGN_UP      = document.querySelector('.fullname-sign-up')
ELEMENT_INPUT_PASSWORD_SIGN_UP      = document.querySelector('.password-sign-up')
ELEMENT_INPUT_CONFIRM_SIGN_UP       = document.querySelector('.confirmation-sign-up')
ELEMENT_BTN_SUBMIT_SIGN_UP          = document.querySelector('#form-1 .form-submit')
ELEMENT_RESULT_FAIL                 = document.querySelector('#form-1 .form-message-fail')
ELEMENT_RESULT_SUCCESS              = document.querySelector('#form-1 .form-message-success')
ELEMENT_RESULT_CHECK_USER           = document.querySelector('#form-1 .form-message-checkUser')
ELEMENT_SIGN_IN_FAIL                = document.querySelector('#form-2 .form-message-fail')
ELEMENT_SIGN_IN_SUCCESS             = document.querySelector('#form-2 .form-message-success')
ELEMENT_SIGN_IN_NULL                = document.querySelector('#form-2 .form-message-checkUser')
ELEMENT_NAME_INPUT                  = document.querySelector('#form-2 #fullname1')
ELEMENT_PASSWORD_INPUT              = document.querySelector('#form-2 #password1')
ELEMENT_CHECKBOX                    = document.getElementById("checkbox");
ELEMENT_SHOW_NAME_USER              = document.querySelector('.header__item-name-user')
ELEMENT_OPEN_CHANGE_AVATAR          = document.querySelector('.cover-img')
ELEMENT_CLOSE_LIST_2                = document.querySelector('.header__user-list2')
ELEMENT_OPEN_AVATAR                 = document.querySelector('.header__change-avatar')
ELEMENT_ICON_BACK                   = document.querySelector('.header__background-user i')
ELEMENT_AVATAR                      = document.querySelector('.cover-img img')
ELEMENT_AVATAR_HOME                 = document.querySelector('.header__icon--user img')
ELEMENT_AVATAR_COMMENT              = document.querySelector('.avatar img')
ELEMENT_OVERFLOW_SAVE_AVATAR        = document.querySelector('.header__confirm-save-avatar')
ELEMENT_BTN_LOG_OUT                 = document.querySelector('.header__user-log-out')
ELEMENT_OVERFLOW_LOG_OUT            = document.querySelector('.header__confirm-log-out')
ELEMENT_BTN_COFIRM_SAVE             = document.querySelector('.header__save-avatar')
ELEMENT_BLOCK_USER                  = document.querySelector('.header__item-user')

let resultFullName  = '';
let errFullName     = '';
let resultPassword  = '';
let errPassword     = '';
let resultConfirm   = '';
let errConfirm      = '';
let account         = [];
let checkBox        = false;
let itemUser        = '';
let index;
let toggleForm      = true
let ChangeAvatar    = true


// đăng ký
const btnSignUp = () => {
    ELEMENT_LOG_IN.style.display = 'block'
    ELEMENT_SIGN_UP.style.display = 'block'
}

//  đăng nhập
const btnSignIn = () => {
    ELEMENT_LOG_IN.style.display = 'block'
    ELEMENT_SIGN_IN.style.display = 'block'
}

//  close form
const closeForm = () => {
    ELEMENT_LOG_IN.style.display = 'none'
    ELEMENT_SIGN_UP.style.display = 'none'
    ELEMENT_SIGN_IN.style.display = 'none'
    resetResultSignUp()
}

//reset form
const resetForm = () => {
    ELEMENT_INPUT_FULLNAME_SIGN_UP.value = ''
    ELEMENT_INPUT_PASSWORD_SIGN_UP.value = ''
    ELEMENT_INPUT_CONFIRM_SIGN_UP.value = ''
    ELEMENT_NAME_INPUT.value = ''
    ELEMENT_PASSWORD_INPUT.value = ''
}

//btn đăng ký
ELEMENT_BTN_SIGN_UP.addEventListener('click', btnSignUp)

//btn đăng nhập
ELEMENT_BTN_SIGN_IN.addEventListener('click', btnSignIn)

// btn close đăng ký close and reset
ELEMENT_CLOSE_FORM[0].addEventListener('click', function() {
    closeForm()
    resetForm()
    resetResultSignUp()
})

// btn close đăng nhập close and reset
ELEMENT_CLOSE_FORM[1].addEventListener('click', function() {
    closeForm()
    resetForm()
})

// click overflow login close and reset
ELEMENT_LOG_IN.addEventListener('click', function() {
    closeForm()
    resetForm()
    resetResultSignUp()
})

// stopPropagation sign up
ELEMENT_SIGN_UP.addEventListener('click', function(event){
    event.stopPropagation()
})

// stopPropagation sign in
ELEMENT_SIGN_IN.addEventListener('click', function(event){
    event.stopPropagation()
})

// chuyển từ đăng ký sang đăng nhập
const swapSignIn = () => {
    btnSignIn()
    resetForm()
    ELEMENT_SIGN_UP.style.display = 'none'   
}

// chuyển từ đăng nhập sang đăng ký
const swapSignUp = () => {
    btnSignUp()
    resetForm()
    ELEMENT_SIGN_IN.style.display = 'none' 
}

// constructor function, bên trong nó có 1 cái object=options
function Validator(options) {
    // hàm này để thực thi việc kiểm tra nó có lỗi hay kh
    function validate(inputElment, rule) {
        // Để lấy giá trị nhập vào ở từng ô 
        var errorMessage = rule.test(inputElment.value);

        if(inputElment.id == 'fullname') {
            errFullName    = errorMessage 
            resultFullName = inputElment.value
        } else if (inputElment.id == 'password'){
            errPassword    = errorMessage
            resultPassword = inputElment.value
        } else if (inputElment.id == 'password_confirmation'){
            errConfirm     = errorMessage
            resultConfirm  = inputElment.value
        }

        // Lấy ra cái hiển thị lỗi

        var errorElement = inputElment.parentElement.querySelector(options.error);

        // Nếu mà có giá trị nhập vào thì

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElment.parentElement.classList.add("invalid");
        } 
        else {
            inputElment.parentElement.classList.remove("invalid");
        }
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            
            var inputElment = formElement.querySelector(rule.selector);

            if (inputElment) {
                // xử lý trường hợp người dùng nhập vào hoặc kh nhập vào rồi blur ra khỏi ô input
                inputElment.onblur = function () {

                    validate(inputElment, rule);

                };
                inputElment.oninput = function () {
                    var errorElement =inputElment.parentElement.querySelector(options.error);
                    errorElement.innerText = "";
                    inputElment.parentElement.classList.remove("invalid");
                    ELEMENT_RESULT_FAIL.style.display = 'none'
                    ELEMENT_RESULT_CHECK_USER.style.display = 'none'
                    ELEMENT_RESULT_SUCCESS.style.display = 'none'
                    
                };
            }
        });
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này";
        },
    };
};

Validator.isMinLength = function (selector,min) {
    return {
        selector: selector,
        test: function (value) {        
            return value.length>= min ? undefined : `Vui lòng nhập mật khẩu tối thiểu ${min} ký tự`;
        },
    };
};

Validator.isCheckPassword= function (selector, getValuePassword) {
    return {
        selector: selector,
        test: function (value) {
            return value===getValuePassword() ? undefined : `Vui lòng nhập khớp mật khẩu`;
        },
    };
};

/////////////////////
Validator({
    // Tạo form để khi mình querySelector thì dễ dàng lấy từ thằng form
    form:'#form-1',
    // tạo tên chung là error để mai sau có đổi class thì chỉ cần đổi form-message thành gì đó
    error:'.form-message',
    // rules này là một mảng bao gồm các hàm chứa những cái validate riêng. Duyệt qua từng phần tử
    // để biết nó đang ở đâu và làm gì
    rules:[
      Validator.isRequired('#fullname'),
      Validator.isMinLength('#password',6),
      Validator.isCheckPassword('#password_confirmation', function(){
        return document.querySelector('#form-1 #password').value;
      }),
      ]
  })

// setSaceAccountLocalstorage
const setAccountLocalStorage = () => {
    localStorage.setItem('account', JSON.stringify(account));
}

// getAccountLocalstorage
const getAccountLocalStorage = () => {
    let dataArray = JSON.parse(localStorage.getItem('account'))
    dataArray = dataArray ? dataArray : []
    return dataArray
}

// getDataSaveAccount
const getDataSaveAccount = () => {
    let dataArray = JSON.parse(localStorage.getItem('saveAccount'))
    dataArray = dataArray ? dataArray : []
    return dataArray
}


// sign up
const btnSubmitSignUp = () => {
    account = getAccountLocalStorage()
    let checkName = account.some(item => {
        return item.name == resultFullName
    })

    if (resultFullName == '' || resultPassword == '' || resultConfirm == '') {
        ELEMENT_RESULT_FAIL.style.display       = 'block'
        ELEMENT_RESULT_SUCCESS.style.display    = 'none'
    } else if (checkName){
        ELEMENT_RESULT_CHECK_USER.style.display = 'block'
    } else if (errFullName == undefined && errPassword == undefined && errConfirm == undefined) {
        ELEMENT_RESULT_SUCCESS.style.display = 'block'
        console.log('oke')
        account.push({name: resultFullName, password: resultPassword})
        setAccountLocalStorage()
        resultFullName  = ''
        resultPassword  = ''
        resultConfirm   = ''
        errPassword     = ''
        errConfirm      = ''
    }
}


// check box
const changeBox = (oncheck) => {
    if(oncheck.checked) {
        checkBox = true;
    }
}

// sign in  
const btnSubmitSignIn = () => {
    account = getAccountLocalStorage()
    let checkName = account.find((item) => {
        return item.name == ELEMENT_NAME_INPUT.value
    }) 

    if(checkName) {
        var checkPass = checkName.password ==  ELEMENT_PASSWORD_INPUT.value
        console.log('ok')
        if (checkPass) {
            if(checkBox) {
                // nếu có lưu mật khẩu thì chạy vô đây
                if(checkName.avatar){
                    // đăng nhập nếu thấy user đó có avatar thì lưu avatar lên local
                    localStorage.setItem('saveAccount', JSON.stringify({user :checkName.name , pass : checkName.password, avatar: checkName.avatar }))
                } else {
                    // ngược lại ở trên khỏi lưu avatar
                    localStorage.setItem('saveAccount', JSON.stringify({user :checkName.name , pass : checkName.password }));
                }
            } else {
                // không lưu mật khẩu thì chạy vô đây
                localStorage.setItem('saveAccount', JSON.stringify([]));
            }
        ELEMENT_SIGN_IN_SUCCESS.style.display = 'block'
        ELEMENT_BTN_SIGN_UP.style.display   = 'none'
        ELEMENT_BTN_SIGN_IN.style.display   = 'none'
        ELEMENT_USER.style.display          = 'block'
        ELEMENT_SHOW_NAME_USER.innerText    = checkName.name

            if(checkName.avatar) {
                ELEMENT_AVATAR.src                  = checkName.avatar 
                ELEMENT_AVATAR_HOME.src             = checkName.avatar 
                ELEMENT_AVATAR_COMMENT.src          = checkName.avatar
            }
            localStorage.setItem('login', JSON.stringify({user :checkName.name , pass : checkName.password, avatar: checkName.avatar }))
            location.reload()
        } else {
            // nhập sai mật khẩu
            ELEMENT_SIGN_IN_FAIL.style.display  = 'block'
        }
    } else if (ELEMENT_NAME_INPUT.value == '' || ELEMENT_PASSWORD_INPUT.value == '') {
        ELEMENT_SIGN_IN_NULL.style.display  = 'block'
    } else {
        ELEMENT_SIGN_IN_FAIL.style.display  = 'block'
    }
    checkBox = false;
}

// reset lại trạng thái khi đăng nhập
const resetSTT = () => {
    ELEMENT_SIGN_IN_SUCCESS.style.display   = 'none'
    ELEMENT_SIGN_IN_NULL.style.display      = 'none'
    ELEMENT_SIGN_IN_FAIL.style.display      = 'none'
}

//  reset lại trạng thái khi đăng ký
const resetResultSignUp = () => {
    ELEMENT_RESULT_FAIL.style.display       = 'none'
    ELEMENT_RESULT_CHECK_USER.style.display = 'none'
    ELEMENT_RESULT_SUCCESS.style.display    = 'none'
}

ELEMENT_USER.addEventListener('click', function(event){
    event.stopPropagation()
})

//close block user
const closeUserBlock = () => {
    ELEMENT_BLOCK_USER.style.display = 'none'
    toggleForm = true
}

const toggleChangeAvatar = (open) => {
    if(open) {
        ELEMENT_CLOSE_LIST_2.style.display = 'none'
        ELEMENT_OPEN_AVATAR.style.display = 'block'
        ELEMENT_ICON_BACK.style.display = 'block'
    } else {
        ELEMENT_CLOSE_LIST_2.style.display = 'block'
        ELEMENT_OPEN_AVATAR.style.display = 'none'
        ELEMENT_ICON_BACK.style.display = 'none'
    }
}

// click sẽ mở ra thay đổi avatar
ELEMENT_OPEN_CHANGE_AVATAR.addEventListener('click', function() {
    toggleChangeAvatar(ChangeAvatar)
    ChangeAvatar = !ChangeAvatar
})

// click vô ảnh sẽ thay đổi ảnh trên avatar
const changeAvatar = (element) => {
    ELEMENT_AVATAR.src = element.src
}

// click btn back sẽ quay về trang avatar
ELEMENT_ICON_BACK.addEventListener('click', function(){
    ELEMENT_CLOSE_LIST_2.style.display = 'block'
    ELEMENT_OPEN_AVATAR.style.display = 'none'
    ELEMENT_ICON_BACK.style.display = 'none'
    ChangeAvatar = true
})


// xác nhận save Avatar
ELEMENT_BTN_COFIRM_SAVE.addEventListener('click', function(){
    ELEMENT_OVERFLOW_SAVE_AVATAR.style.display = 'block'
}) 

// tìm User xác nhận save AVATAR
const findUserAddAvatar = () => {
    getAccountLocalStorage().find((items, n) => {
        if(items.name == ELEMENT_SHOW_NAME_USER.innerText) {
            itemUser = items
            index = n
        } 
    })
}

const toggleUser = (open) => {
    if(open) {
        ELEMENT_BLOCK_USER.style.display = 'block'
    } else {
        ELEMENT_BLOCK_USER.style.display = 'none'
    }
}


ELEMENT_USER.addEventListener('click', function(){
    toggleUser(toggleForm)
    toggleForm = !toggleForm
})

// stopPropagation 
ELEMENT_BLOCK_USER.addEventListener('click', function(event){
    event.stopPropagation()
})


const saveAvatarNo = () => {
    ELEMENT_OVERFLOW_SAVE_AVATAR.style.display = 'none'
}

const saveAvatarYes = () => {
    account = getAccountLocalStorage()
    // tìm user xác nhận save avatar
    findUserAddAvatar()
    console.log(itemUser, index)
    itemUser.avatar = ELEMENT_AVATAR.src
    account.splice(index, 1)
    account.push(itemUser)
    setAccountLocalStorage()
    getDataSaveAccount().user ? localStorage.setItem('saveAccount', JSON.stringify({user :itemUser.name , pass : itemUser.password, avatar: itemUser.avatar })) : false 
    ELEMENT_AVATAR_HOME.src = ELEMENT_AVATAR.src
    ELEMENT_AVATAR_COMMENT.src = ELEMENT_AVATAR.src
    ELEMENT_OVERFLOW_SAVE_AVATAR.style.display = 'none'
}


ELEMENT_BTN_LOG_OUT.addEventListener('click', function(){
    ELEMENT_OVERFLOW_LOG_OUT.style.display = 'block'
})

const logOutNo = () => {
    ELEMENT_OVERFLOW_LOG_OUT.style.display = 'none'
    console.log('logout')
}

const logOutYes = () => {
    localStorage.setItem('saveAccount', JSON.stringify([]));
    ELEMENT_OVERFLOW_LOG_OUT.style.display = 'none'
    location.reload()
}

