$(document).ready(function () {

    //Owl Carousel - jQuery Plugin
    $('.owl-carousel').owlCarousel();

    //Backstretch jQuery PLugin
    $('.landing').backstretch('https://www.bankogaragedoors.com/content/uploads/2015/10/st-petersburg-fl-41.jpg');

    //Clicking the h3s in the resume section will change their background color to red
    $('h3').click(function () {
        $('h3').css(
            'background', 'red'
        );
    });
});
