var images = [
    {caption:'Four Pour', url:"img/chemex-pour.jpg"},
    {caption:'Step by Step', url:"img/step-by-step.jpg"},
    {caption:'Beans', url:"img/beans.jpg" },
    {caption:'Drops', url:"img/drops.jpg"},
    {caption:'Coffee in the Wild', url:"img/coffee-in-wild.jpg"},
    {caption:'Coffee Waves', url:"img/coffee-waves.jpg"},
    {caption:'Ugh', url:"img/ugh.jpg"},
    {caption:'Grounds', url:"img/grounds.jpg"},
    {caption:'Steam', url:"img/steam.jpg"},
    {caption:'Coffee Candles', url:"img/coffee-candles.jpg"},
    {caption:'Sea of Beans', url:"img/sea-of-beans.jpg"},
    {caption:'Circle of Life', url:"img/cups-circle.jpg"}
];
var feed = document.querySelector('.feed');
var bigImage = document.querySelector('.lightBoxImage');
var currentI;

for (var index = 0; index < images.length; index++) {
    (function(){
    var image = images[index];
    var newImage = document.createElement('img');
    var caption = document.createElement('p');
    var postContainer = document.createElement('li');
    var indexNum = index;

    newImage.setAttribute('src', image.url);
    newImage.classList.add("feed-pic");
    caption.textContent = image.caption;
    caption.classList.add("feed-caption");
    postContainer.classList.add("postContents");
    postContainer.appendChild(newImage);
    postContainer.appendChild(caption);
    feed.appendChild(postContainer);

    var handleClick = document.querySelectorAll(".postContents");

    handleClick = function() {
        currentI = indexNum;
        event.preventDefault();
        // console.log(event.target);
        // console.log('Click Registered');
        var selectedImage = event.target.getAttribute('src');
        // console.log(selectedImage);
        bigImage.setAttribute('src', selectedImage);
        var lightBox = document.querySelector(".lightBox");
        lightBox.classList.remove("hidden");
    };
    postContainer.addEventListener('click', handleClick);
})();
}

// add left and right buttons inside of light box inside a for loop assigning an index number to each image so you can
// move from left to right inside of the light box 
var lightButton = document.querySelector(".lightButton");

lightButton.addEventListener('click', function(){
    var lightBox = document.querySelector(".lightBox");
    lightBox.classList.add("hidden");
});


var handleClickLeft = function(){
    event.preventDefault();
    currentI = (currentI + images.length -1) % images.length;
    bigImage.setAttribute('src', images[currentI].url);
    
};
var handleClickRight = function(){
    event.preventDefault();
    currentI = (currentI + 1) % images.length;
    bigImage.setAttribute('src', images[currentI].url);
    
};

var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');
leftButton.addEventListener('click', handleClickLeft);
rightButton.addEventListener('click', handleClickRight);

