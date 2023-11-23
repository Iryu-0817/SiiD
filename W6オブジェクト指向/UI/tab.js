

(() => {
    // ここに命令を書く

    // 変数名に＄マークつけると変数はDOM要素だと明示的に示す。
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]')
    const $content= $tab.querySelectorAll('[data-content]')
    // これをすると、後で変数名を変えたいときに一箇所の変更ですみます
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

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
        // クリックされたnavとそのdataを取得
        const $this = e.target;
        // dataset= そのDOM要素のデータ属性をとる
        const targetVal = $this.dataset.nav;  //navは属性名


        //対象外のnav, content全て一旦リセットする
        let index = 0;
        while(index < navLen) {
            $content[index].style.display = 'none';
            $nav[index].classList.remove('ACTIVE_CLASS'); //クラスを排除するという命令
            index++;
        }

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add('ACTIVE_CLASS');
    }
    // 全nav要素に対して関数を適応
    let index = 0;

    while(index < navLen) {
        $nav[index].addEventListener('click', (e) => handleClick(e) );
        index++;
    }

})();