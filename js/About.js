$(document).ready(function(){
    $('#menuDownIcon').click(function(){
        $('.NavMenu').slideDown();
       // $('.top_nav').css('border-bottom','none');
        $(this).css('display','none');
        $('#menuUpIcon').fadeIn(1000);
    })
    $('#menuUpIcon').on('click',function(){
        $('.NavMenu').slideUp();
        $(this).css('display','none');
        $('#menuDownIcon').fadeIn(1000);
        //$('.top_nav').css('border-bottom','2px solid white');
        });
})
