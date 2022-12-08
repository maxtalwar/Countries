var backgroundNumber = 0;
var backgrounds = ["url(assets/home/fuji.jpeg)", "url(assets/home/eiffel-tower.jpeg)", "url(assets/home/oslo.jpeg)", "url(assets/home/seoul.webp)", "url(assets/home/singapore.jpeg)", "url(assets/home/tokyo.webp)"];

function backgroundSwitcher()
{
    backgroundNumber = (backgroundNumber + 1) % backgrounds.length;
    let body = document.querySelector("body");
    body.style.backgroundImage = backgrounds[backgroundNumber];
}

setInterval(backgroundSwitcher, 5000);