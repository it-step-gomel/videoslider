// console.log('Ура! Заработало!!!');

let itemImg1 = document.querySelector('.itemImg1');
let itemImg2 = document.querySelector('.itemImg2');
let itemImg3 = document.querySelector('.itemImg3');
let itemImg4 = document.querySelector('.itemImg4');

itemImg1.addEventListener('click', function(){
    document.querySelector('video').src = "video/cloud.mp4";
});

itemImg2.addEventListener('click', function(){
    document.querySelector('video').src = "video/islands.mp4";
});

itemImg3.addEventListener('click', function(){
    document.querySelector('video').src = "video/moon.mp4";
});

itemImg4.addEventListener('click', function(){
    document.querySelector('video').src = "video/star.mp4";
});

// ------------------------- title focus tabs

let t = document.querySelector('head title').innerHTML;
let timer;

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout( () => {
        changeTitle('./img/favicon/favicon2.ico','Вернись! мы скучаем...😭');
    }, 3000)
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('./img/favicon/favicon.ico', t);
}