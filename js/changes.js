jQuery(document).ready(function($) {
    $("input[name=mlwUserName]").attr('placeholder', 'Napište svoje jméno');
    $("input[name=mlwUserEmail]").attr('placeholder', 'Uveďte platnou e-mailovou adresu');
    $("textarea[name=question1]").attr('placeholder', 'Vyplňte správnou odpověď');
    
    $("form#quizForm").submit(function() { if($("#mlw_error_message_bottom").html()) { $("#mlw_error_message_bottom").html('! Vyplňte všechna povinná pole !'); } });

    /* Facebook Likebox changes */
    /*var autoshow = true;
    $('.fblbInner a').css('display','none');
    $('.fblbHead').on('mouseover', function() { autoshow = false; })

    setTimeout(function() {
	if(autoshow) {
            var default_left = $(".fblbLeft").css('left');
	    $(".fblbLeft").animate({left: 0},750);
    	    $(".fblbLeft").delay(5000).animate({left: default_left},750);
	}
    }, 5000); */
});