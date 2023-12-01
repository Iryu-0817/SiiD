let user = "Mike";
/* 

localStorageは.setItemというメソッドを持っていて、それはさらに二つのメソッドを持っている
*/
localStorage.setItem('userName', user);

// 呼び出す時はValueを書かなくて
const AAA = localStorage.getItem('userName');

const text = `こんにちは${AAA}さん`

document.getElementById('js-userName').textContent = text;



