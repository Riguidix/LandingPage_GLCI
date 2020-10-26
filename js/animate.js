$(document).ready(function() {
    // Check if element is scrolled to view
    function isScrolledIntoView(element) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(element).offset().top;
        var elemBottom = elemTop + $(element).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // If Element is scrolled into view 
    $(window).scroll(function() {
        console.log('Scrolling');
        $('#services').each(function() {
            if (isScrolledIntoView(this)) {
                $(this).addClass('animate__fadeIn animate__slower');
            }
        });
        $('#services_features').each(function() {
            if (isScrolledIntoView(this)) {
                $(this).addClass('animate__fadeIn animate__slower');
            }
        });        
    });
});