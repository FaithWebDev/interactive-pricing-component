//grab slider , per-month , toggle and view/$$ from html
const slider = document.querySelector('.slider');
let defaultValue = slider.defaultValue;
let currentValue = slider.value;
const toggleBtn = document.querySelector('#toggle-btn');
//set default toggle to false
toggleBtn.checked = false;
const pageViews = document.querySelector('#page-views');
const price = document.querySelector('#price');
//sets the default value on loading the page to 16 
price.innerText = '$16';
//set default pageviews text
pageViews.innerText = '100K PAGEVIEWS';


//make the price/views values update with slider movement
function setCurrentValues() {
    current = slider.value;
    price.innerText = `$${current}`;
    const views = Math.round((current * 6250) / 1000);
    if (slider.value < 100, 000) {
        pageViews.innerText = `${views} PAGEVIEWS`;
    } else {
        pageViews.innerText = `${views}K PAGEVIEWS`;
    }
}


//apply discount if toggle is checked
function applyDiscount() {
    const current = slider.value;
    const discount = current - (current * .25);
    if (toggleBtn.checked === true) {
        price.innerText = `$${discount}`;
    } else {
        price.innerText = `$${current}`;
    }
}

// linear-gradient(-90deg, hsl(224, 65%, 95%) 50%, hsl(174, 86%, 45%) 30%)
// make the slider bar fill with color
function colorSlider() {
    valPercent = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right,#10d5c2  ${valPercent}%, #eaeefb ${valPercent}%)`
}

colorSlider()