document.addEventListener('DOMContentLoaded',function(){

    new MenuOpen();
})


class MenuOpen{

    constructor(){
        this.globalContainer=document.querySelector('#global-container');
        this.headerMenuBtn=document.querySelector('.header-menu-btn');
        this.navMenuBtn=document.querySelector('.nav-menu-btn');
        this._cEvent();
        this._addClass();
    }

    _cEvent(){
    const isTouchCapable = 
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);
    navigator.maxTouchPoints > 0;
    window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
    }

    _toggle(){
        this.globalContainer.classList.toggle('menu-open');
    }

    _addClass(){
        this.headerMenuBtn.addEventListener('click',this._toggle.bind(this));
        this.navMenuBtn.addEventListener('click',this._toggle.bind(this));
    }
}
