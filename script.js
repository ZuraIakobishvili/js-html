const mainText = document.createElement('h1')
mainText.innerHTML = 'Welcome to Magticom '
document.body.appendChild(mainText)
mainText.classList.add('h1-main')

const formDiv = document.createElement('div')
document.body.appendChild(formDiv)
formDiv.classList.add('form-div')

const aLogin = document.createElement('a')
formDiv.appendChild(aLogin)
aLogin.innerHTML = "Login"
aLogin.href = 'login.html'
aLogin.classList.add('btn','btn-success')

const aReg = document.createElement('a')
formDiv.appendChild(aReg)
aReg.innerHTML = 'Registration'
aReg.classList.add('btn', 'btn-warning')
aReg.href = 'register.html'






