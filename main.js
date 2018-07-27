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
var feed = $('.feed');
var bigImage = $('.lightBoxImage');
var currentI;

images.forEach(function(image, i){
    var newImage = $('<img>');
    var caption = $('<p>');
    var postContainer = $('<li>');
    var handleClick = $(".postContainer");

    newImage.attr('src', image.url);
    newImage.addClass("feed-pic");
    caption.text(image.caption);
    caption.addClass("feed-caption");
    postContainer.addClass("postContents");
    postContainer.append(newImage);
    postContainer.append(caption);
    feed.append(postContainer);

    handleClick = function() {
        currentI = i;
        event.preventDefault();
        bigImage.attr('src', image.url);
        var lightBox = $(".lightBox");
        lightBox.removeClass("hidden");
    };
    postContainer.on('click', handleClick);
    }
); 

var lightButton = $(".lightButton");

lightButton.on('click', function(){
    var lightBox = $(".lightBox");
    lightBox.addClass("hidden");
});

var clickAnywhere = $(".lightBox");

clickAnywhere.on('click', function(event){
    if (event.target === clickAnywhere[0]){
        clickAnywhere.addClass("hidden");
    }
});

var handleClickLeft = function(){
    event.preventDefault();
    currentI = (currentI + images.length -1) % images.length;
    bigImage.attr('src', images[currentI].url);    
};

var handleClickRight = function(){
    event.preventDefault();
    currentI = (currentI + 1) % images.length;
    bigImage.attr('src', images[currentI].url);    
};

var leftButton = $('.leftButton');
var rightButton = $('.rightButton');
leftButton.on('click', handleClickLeft);
rightButton.on('click', handleClickRight);

