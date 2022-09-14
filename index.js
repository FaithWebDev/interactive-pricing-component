//grab slider , per-month , toggle and view/$$ from html
const slider = document.querySelector('.slider');
const toggleBtn = document.querySelector('#toggle-btn');
//set default discount toggle to false
toggleBtn.checked = false;
const pageViews = document.querySelector('#page-views');
const price = document.querySelector('#price');
//sets the default value on loading the page to 16 
price.innerText = '$16.00';
//set default pageviews text
pageViews.innerText = '100K PAGEVIEWS';


//event listeners for each element
slider.addEventListener('input', setCurrentValues)
slider.addEventListener('input', colorSlider)
toggleBtn.addEventListener('change', setCurrentValues)


//make the price/views values update with slider movement
function setCurrentValues() {
    current = parseFloat(slider.value).toFixed(2)
    price.innerText = `$${current}`;
    const views = Math.round((current * 6250) / 1000)
    if (slider.value < 100, 000) {
        pageViews.innerText = `${views} PAGEVIEWS`;
    } else {
        pageViews.innerText = `${views}K PAGEVIEWS`;
    }
    function applyDiscount() {
        // const current = slider.value;
        const discount = (current - (current * .25)).toFixed(2);
        if (toggleBtn.checked === true) {
            price.innerText = `$${discount}`;
        } else {
            price.innerText = `$${current}`;
        }
    }
    applyDiscount()
}


// make the slider bar fill with color
function colorSlider() {
    valPercent = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right,#10d5c2  ${valPercent}%, #eaeefb ${valPercent}%)`
}

colorSlider()