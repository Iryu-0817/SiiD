(() => {

// 独立して存在しているのは関数！！！
// クラスの中にあるものはメソッドと呼ばれる！！！



    class Accordion {
        //constructor=初期化 インスタンス作った時に一番最初に呼ばれる関数（メソッド）
        constructor() {
            const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a')


    const $triggerLen = $trigger.length
    let index = 0;
    while (index < $triggerLen) {
        $trigger[index].addEventListener('click', (e) => clickHandler(e)); 
        index++;
            }
        }

         clickHandler = (e) => {
        
            e.preventDefault();
    
            const $target = e.currentTarget;
    
            const $content = $target.nextElementSibling;
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }

    




    
        
    

})();


