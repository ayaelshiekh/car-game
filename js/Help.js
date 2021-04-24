$(document).ready(function(){
    $('#menuDownIcon').click(function(){
        $('.NavMenu').slideDown();
        $(this).css('display','none');
        $('#menuUpIcon').fadeIn(1000);
        $('.left').css('top','1450px')
        $('.right').css('top','1450px')
    })
    $('#menuUpIcon').on('click',function(){
        $('.NavMenu').slideUp();
        $(this).css('display','none');
        $('#menuDownIcon').fadeIn(1000);
        $('.left').css('top','1085px')
        $('.right').css('top','1085px')
        });
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}