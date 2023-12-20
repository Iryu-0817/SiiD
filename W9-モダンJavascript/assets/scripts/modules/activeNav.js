export default class ActiveNav {
    constructor(obj) {
        this.$nav = document.getElementById(obj.navElement);
        this.activateNavStyle()
    }

    activateNavStyle() {
        const $navItems = this.$nav.getElementsByTagName('a');

        // 現在のウェブページのURLを取得するためのコード。
        // 具体的には、window.location オブジェクトを使用し、その中の href プロパティを取得
        const url = window.location.href;

        let topPageFlag = true;

        for(let index = 0; index < $navItems.length; index++) {
            const pageKey = $navItems[index].dataset.page;
            if(url.indexOf(pageKey) !== -1){
                $navItems[index].className += ' is-active ';
                topPageFlag = false;
            }

            if(topPageFlag) {
                $navItems[0].className += 'is-active';
            }
        }


    }


}
