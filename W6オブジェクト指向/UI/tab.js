

(() => {
    // ここに命令を書く

    // 変数名に＄マークつけると変数はDOM要素だと明示的に示す。
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]')
    const $content= $tab.querySelectorAll('[data-content]')


    const init = () => {
        // [data-content[0]]CSSのdisplayをブロック要素に変換している
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたらイベントが起きる
    const handleClick = (e) =>  {

        // 'e'=クリクされた時にイベント自体のオブジェクトを取得する。
        //  e.preventDefault()=リンク要素を無効化させることができる
        e.preventDefault();
        console.log('Clicked');
        
    }

    $nav[0].addEventListener('click', (e) => handleClick(e) );

})();