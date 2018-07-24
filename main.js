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
// var postContainer = document.querySelector('.post-container');

for (var index = 0; index < images.length; index++) {
    var image = images[index];
    
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.classList.add("feed-pic");

    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add("feed-caption");

    var postContainer = document.createElement('li');
    postContainer.classList.add("postContents");

    postContainer.appendChild(newImage);
    postContainer.appendChild(caption);

    feed.appendChild(postContainer);
    // This needs cleaned up still, as the list bullets are still showing in the code. 
    // Need to add click listener to let the program know what was clicked. 
    // Also need to add to the functionality a light box to highlight a clicked image by the user. 
    
}

// add left and right buttons inside of light box inside a for loop assigning an index number to each image so you can
// move from left to right inside of the light box 

var clickTest = document.querySelectorAll(".postContents");
var lightButton = document.querySelector(".lightButton");

lightButton.addEventListener('click', function(event){
    var lightBox = document.querySelector(".lightBox");
    lightBox.classList.add("hidden");
});

clickTest.forEach(function (element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(event.target);
        console.log('Click Registered');

        var selectedImage = event.target.getAttribute('src');
        console.log(selectedImage);
        var lightBoxImage = document.querySelector(".lightBoxImage");
        lightBoxImage.setAttribute('src', selectedImage);
        var lightBox = document.querySelector(".lightBox");
        lightBox.classList.remove("hidden");

    });
    
});