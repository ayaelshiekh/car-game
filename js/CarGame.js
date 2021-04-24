    $(function(){
    var anim_id;
    //dom objects
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var car_4 = $('#car_4');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var continueGm = $('#continueGm');
    var restart_btn = $('#restart');
    var continueBtn = $('#continueBtn');
    var score = $('#score');
    //initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());
    //other declaration
    var game_over = true;
    var score_counter = 1;
    var speed = 2;
    var line_speed = 5;
    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;
    var gllry = $('#strtbtn');
    var mus = $('#mus');
    var mute = $('#mute');
    var play=$('#play');
    var pause=$('#pause');


var aud = document.getElementById('aud');
    //start Div
    var gallery = setTimeout(galleryView,0)
    var gallery2 = setTimeout(galleryView2,1000)
    var gallery3 = setTimeout(galleryView3,2000)
    var gallery4 = setTimeout(galleryView4,3000)
    
    function galleryView(){
        document.images[4].src = document.images[0].src;
    }
    function galleryView2(){
        document.images[4].src = document.images[1].src;
    }
    function galleryView3(){
        document.images[4].src = document.images[2].src;
    }
    function galleryView4(){
        document.images[4].src = document.images[3].src;
    }
    gllry.focus();
    gllry.click(strtGame)

    function strtGame(){
        game_over = false;
        $('.startDiv').css('display','none');
        anim_id = requestAnimationFrame(repeat);
        aud.play();
    }
  mus.click(function(){
      aud.play();
      mus.css('display','none');
      mute.css('display','block');

  })
  mute.click(function(){
    aud.pause();
    mute.css('display','none');
    mus.css('display','block');
})
play.click(function(){
    play.css('display','none');
    pause.css('display','block');
    mus.css('display','none');
      mute.css('display','block');
    $('#continueGm').slideUp();
    aud.play();
    game_over = false;
    anim_id= requestAnimationFrame(repeat);
    requestAnimationFrame(anim_id);
    requestAnimationFrame(move_left);
    requestAnimationFrame(move_right);
    requestAnimationFrame(move_up);
    requestAnimationFrame(move_down);

})
pause.click(function(){
    aud.pause();
    mute.css('display','none');
    mus.css('display','block');
 pause_the_game();
  pause.css('display','none');
  play.css('display','block');
})
    //End start div
//start game
$(document).ready(function(){
    $('#menuDownIcon').click(function(){
        $('.NavMenu').show(1000);
        $(this).css('display','none');
        $('#menuUpIcon').fadeIn(1000);
    })
    $('#menuUpIcon').on('click',function(){
        $('.NavMenu').hide(1000);
        $(this).css('display','none');
        $('#menuDownIcon').fadeIn(1000);
    })
})
   $(document).on('keydown',function(e){
        if(game_over === false){
          var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }else if(key === 39 && move_right === false){
                move_right = requestAnimationFrame(right);
            }else if(key === 38 && move_up === false){
                move_up = requestAnimationFrame(up);
            }else if(key === 40 && move_down === false){
                move_down = requestAnimationFrame(down);
            }else if(key === 32){
                aud.pause();
                pause_the_game();
            }

        }
    });
    $(document).on('keyup',function(e){
        if(game_over === false){
          var key = e.keyCode;
            if(key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }else if (key === 39){
                cancelAnimationFrame(move_right);
                move_right = false;
            }else if (key === 38){
                cancelAnimationFrame(move_up);
                move_up = false;
            }else if (key === 40){
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });
    

   function left(){
       if(game_over === false && parseInt(car.css('left')) > 0){
           car.css('left',parseInt(car.css('left')) - 5);
           move_left = requestAnimationFrame(left);
       }
   }
   function right(){
        if(game_over === false && parseInt(car.css('left')) < container_width - car_width){
            car.css('left',parseInt(car.css('left')) + 5);
            move_right = requestAnimationFrame(right);
        }
    }
    function up(){
        if(game_over === false && parseInt(car.css('top')) > 0){
            car.css('top',parseInt(car.css('top')) - 5);
            move_up = requestAnimationFrame(up);
        }
    }
    function down(){
        if(game_over === false){
            car.css('top',parseInt(car.css('top')) + 5);
            move_down = requestAnimationFrame(down);
        }
    }

    function repeat(){
        if(game_over === false){
            if(collision(car,car_1)||collision(car,car_2)||collision(car,car_3)||collision(car,car_4)){
                aud.pause();
                stop_the_game();
            }
            score_counter+=1;

            if(score_counter %20 == 0){
              score.text(parseInt(score.text()) + 1);
            }
            if(score_counter % 200 == 0){
                speed++;
                line_speed++;
            }

            car_down(car_1);
            car_down(car_2);
            car_down(car_3);
            car_down(car_4);

            line_down(line_1);
            line_down(line_2);
            line_down(line_3);

               anim_id= requestAnimationFrame(repeat);
        }
    }
    function car_down(car){
        var current_top = parseInt(car.css('top'));
        if(current_top > container_height){
            current_top = -200;
            var car_left = parseInt(Math.random()*(container_width - car_width));
            car.css('left', car_left);
        }
        car.css('top', current_top + speed);
    }
    function line_down(line){
        var line_current_top = parseInt(line.css('top'));
        if(line_current_top > container_height){
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
   
    }
    function stop_the_game(){
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();
    }
    function pause_the_game(){
        game_over = true;
        aud.pause();
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        continueGm.slideDown();
        continueBtn.focus();
    }

    restart_btn.click(function(){
        location.reload();
    });
    continueBtn.click(function(){
        $('#continueGm').slideUp();
        aud.play();
        game_over = false;
        anim_id= requestAnimationFrame(repeat);
        requestAnimationFrame(anim_id);
        requestAnimationFrame(move_left);
        requestAnimationFrame(move_right);
        requestAnimationFrame(move_up);
        requestAnimationFrame(move_down);

    });
//end game
function collision($div1,$div2){
 var x1 = $div1.offset().left;
 var y1 = $div1.offset().top;
 var h1 = $div1.outerHeight(true)-30;
 var w1 = $div1.outerWidth(true)-30;
 var b1 = y1 + h1;
 var r1 = x1 + w1;
 var x2 = $div2.offset().left;
 var y2 = $div2.offset().top;
 var h2 = $div2.outerHeight(true)-30;
 var w2 = $div2.outerWidth(true)-15;
 var b2 = y2 + h2;
 var r2 = x2 + w2;
 if(b1 < y2 || y1 > b2 || r1 < x2 -15 || x1 > r2 -15)return false;
 return true;
}
});