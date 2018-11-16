// Automatically crops length of content based on class 'crop-(number)'
// I.E. Adding class 'crop-40' to a paragraph element will crop the paragraph to 40 characters long.

(function ( $ ) {
 
    $.fn.crop = function( options ) {
        // These are the default settings. 
        var settings = $.extend({
            append: '...',
            clickToShow: false
        }, options );
        $('[class^="crop"]').each(function(){
			var cropNum;
			var theClass = $(this).attr('class');
			theClass = theClass.split(" ");
			for (var i = 0; i < theClass.length; i++) {
				if (theClass[i].indexOf('crop') > -1) {
					cropNum = theClass[i].substr(5, theClass[i].length -5);
				};
			};
			var theContent = $(this).html();
			var croppedContent = theContent.substr(0, cropNum) + settings.append;
			$(this).html(croppedContent);

			if (settings.clickToShow === true) {
				$(this).click(function(){
					$(this).fadeOut(300, function(){
						$(this).html(theContent);
						$(this).fadeIn(300);
					})
				});
			};
		}); 
    };
 
}( jQuery ));

$(function() {

	/* Simple version, using default options.

	$('body').crop();

	*/

	/* With options */

	$('body').crop({
		append: '... <a href="#">more</a>',
		clickToShow: true
	});

});