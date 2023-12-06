
window.onload = () => {
    let savedEmail = localStorage.getItem('userEmail');
    let savedPassword = localStorage.getItem('password');
    

    // もし二つの内容を保持していたらという内容
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

    // 入力した内容を保存し、次回入力されるようにするコード
})

// これらのコードはセキュリティー上懸念があるため、本物の認証システムはサーバー側でやるべき。
