$(document).ready(function(){

    var allPanels = $('.accordion > dl > dd').hide();
        var allPanels2 = $('.accordion > dl > dt > a');
        allPanels2.addClass('accordion-title is-collapsed');
            
        $('.accordion > dl > dt > a').on( "click", function() {
            allPanels.slideUp();
            $(this).parent().next().slideDown();
            allPanels2.removeClass('is-expanded');
            allPanels2.addClass('is-collapsed');
            $(this).removeClass('is-collapsed');
            $(this).addClass('is-expanded');
            return false;
        });
});