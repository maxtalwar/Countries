var backgroundNumber = 0;
var backgrounds = ["url(fuji.jpeg)", "url(eiffel-tower.jpeg)", "url(oslo.jpeg)", "url(seoul.webp)", "url(singapore.jpeg)", "url(tokyo.webp)"];

function backgroundSwitcher()
{
    backgroundNumber = (backgroundNumber + 1) % backgrounds.length;
    let body = document.querySelector("body");
    body.style.backgroundImage = backgrounds[backgroundNumber];
}

setInterval(backgroundSwitcher, 5000);