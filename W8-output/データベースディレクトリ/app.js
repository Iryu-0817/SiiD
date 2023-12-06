
window.onload = () => {
    let savedEmail = localStorage.getItem('userEmail');
    let savedPassword = localStorage.getItem('password');
    
    if (savedEmail && savedPassword) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('password').value = savedPassword;
    }    
}



let myButton = document.getElementById('button');
myButton.addEventListener('click', () => {
    let userEmail = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('password', password);

})