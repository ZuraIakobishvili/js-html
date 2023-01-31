const registerH1 = document.createElement('h1')
document.body.appendChild(registerH1)
registerH1.innerHTML = "Registration"
registerH1.classList.add('register-h1')

const regDiv = document.createElement('div')
document.body.appendChild(regDiv)
regDiv.classList.add('reg-container')

const regForm = document.createElement('form')
regDiv.appendChild(regForm)
regForm.classList.add('reg-form')

const regFirstName = document.createElement('input')
regForm.appendChild(regFirstName)
regFirstName.type = 'text'
regFirstName.placeholder = 'John'

const regLastName = document.createElement('input')
regForm.appendChild(regLastName)
regLastName.type = 'text'
regLastName.placeholder = 'Doe'

const regEmail = document.createElement('input')
regForm.appendChild(regEmail)
regEmail.type = 'email'
regEmail.placeholder = 'example@gmail.com'

const regDateOfBirth = document.createElement('input')
regForm.appendChild(regDateOfBirth)
regDateOfBirth.type = 'date'

const regFile = document.createElement('input')
regForm.appendChild(regFile)
regFile.type = 'file'
regFile.classList.add('file')
// regFile.title = ' '


const regPassword = document.createElement('input')
regForm.appendChild(regPassword)
regPassword.type = 'password'
regPassword.placeholder = '123456'

const regPassConfirm = document.createElement('input')
regForm.appendChild(regPassConfirm)
regPassConfirm.type = 'password'
regPassConfirm.placeholder = "Confirm your password"

const regSubmitBtn = document.createElement('button')
regForm.appendChild(regSubmitBtn)
regSubmitBtn.type = 'submit' 
regSubmitBtn.innerHTML = 'Submit'
regSubmitBtn.classList.add('btn', 'btn-success')

console.log(regEmail.value)