// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const userMail = document.getElementById('user-email');
    const mail = userMail.value;

    // step-3: get password
    // 3.1: get id on the html element
    // 3.2: get the element
    // 3.3: get value from the element
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    // DANGER! DO NOT VERIFY email password on the client site : এভাবে করা যাবে না। শুধু আমরা শিখার জন্য এমন করে করছি।
    // step-4: verify email and password : check wether valid user or not
    if (mail === 'sontan@baap.com' && password === 'secret') {
        window.location.href = "bank.html";
    } else {
        alert('Invalid Email or Password! You are not my son.')
    }
})