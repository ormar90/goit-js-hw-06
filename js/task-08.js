const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');
const buttondEl = document.querySelector('[ttype="submit"]');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
    event.preventDefault();
    
    const mail = event.currentTarget.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        mail,
        password,
    }

    if (mail === '' || password === '') {
        alert('please enter your details');
    } else {
        console.log(formData);
        
        event.currentTarget.reset();
    }
}