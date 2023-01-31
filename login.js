const loginH1 = document.createElement('h1')
document.body.appendChild(loginH1)
loginH1.innerHTML = "Login"
loginH1.classList.add('login-h1')

const loginContainter = document.createElement('div')
document.body.appendChild(loginContainter)
loginContainter.classList.add('login-container')

const loginForm = document.createElement('form')
loginContainter.appendChild(loginForm)
loginForm.classList.add('login-form')

const loginEmail = document.createElement('input')
loginForm.appendChild(loginEmail)
loginEmail.type = 'email'
loginEmail.placeholder = 'example@email.com'

const loginPassword = document.createElement('input')
loginForm.appendChild(loginPassword)
loginPassword.type = 'password'
loginPassword.placeholder = '123456'

const loginSubmitBtn = document.createElement('button')
loginForm.appendChild(loginSubmitBtn)
loginSubmitBtn.type = 'submit'
loginSubmitBtn.innerHTML = 'Submit'
loginSubmitBtn.classList.add('btn', 'btn-success')


