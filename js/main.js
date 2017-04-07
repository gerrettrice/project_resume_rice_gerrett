$(document).ready(function () {
    $('.owl-carousel').owlCarousel();

    $('.landing').backstretch('https://www.bankogaragedoors.com/content/uploads/2015/10/st-petersburg-fl-41.jpg');


    //Clicking the h3s in the resume section will change their highlight color to red
    $('h3').click(function () {
        $('h3').css(
            'background', 'red'
        );
    });
});
