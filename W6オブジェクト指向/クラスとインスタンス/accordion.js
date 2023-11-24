(() => {

// 独立して存在しているのは関数！！！
// クラスの中にあるものはメソッドと呼ばれる！！！



    class Accordion {
    //constructor=初期化 インスタンス作った時に一番最初に呼ばれる関数（メソッド）
        constructor(obj) {
        const $elm = document.querySelector(obj.hookName);
        const $trigger = $elm.getElementsByTagName(obj.tagName)
        




        const $triggerLen = $trigger.length
        let index = 0;
        while (index < $triggerLen) {
            $trigger[index].addEventListener('click', (e) => this.clickHandler(e)); 
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

    const fuckingAccordion = new Accordion( {
        hookName: '#js-faq',
        tagName: 'p'
    });




    
        
    

})();


