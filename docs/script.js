//  Modified from: https://codepen.io/cathydutton/pen/GBcvo
//  Author: Matt Nguyen
//  Course: CPSC332 
//  Assigment: Homework 6
//  Last Modified: 11.11.2022

$(document).ready(function () {

    var seconds = 00;
    var tens = 00;
    var $appendTens =$('#tens');
    var $appendSeconds = $("#seconds");
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var $timerPara = $('#timer');
    var interval;

    $buttonStart.click( function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $timerPara.css("background-color", "green");
    });

    $buttonStop.click(function () {
        clearInterval(interval);

        if(!($appendTens.html() === "00" || $appendSeconds.html() === "00"))
            $timerPara.css("background-color", "red");

        // resetting background opacity
        $('.inside').css('background-color', 'rgba(254,250,224,1.0)');
    });

    $buttonReset.click(function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timerPara.css("background-color", "grey");

        // resetting background opacity
        $('.inside').css('background-color', 'rgba(254,250,224,1.0)');
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
    
    // --  done w/ js -> jquery... moving on  -- 

    // adding class to timer paragraph
    $timerPara.addClass('timer-background');

    // adding class to each button & stying w/ single object literal
    $buttonStart.addClass('btn');
    $buttonStop.addClass('btn');
    $buttonReset.addClass('btn');
    
    $('.btn').css({
       'border-radius':'10px',
       'background-color':'#52796f',
       'color':'#cad2c5',
       'padding':'2px 5px',
       'margin-top':'4px',
       'margin-bottom':'8px',
       'width':'50px',
       'font-size':'16px',
       'font-family': 'belleza'
    });
    
    // styling timer using JQuery
    $('.wrapper').css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-around',
        'align-items': 'center',
        'text-align': 'center',
        'padding': '20px',
    });

    $('.inside').css({
        'background-color': '#fefae0',
        'margin': '40px 50px',
        'padding': '30px',
        'border' : '5px dashed #dda15e',
        'border-radius': '20px',
        'font-family': 'belleza',
        'text-shadow': '1px 1px #dda15e'
    });

    $('#timer').css({
        'border': '2px solid burlywood',
        'border-radius': '7px',
        'width': '200px',
        'text-align': 'center',
    });


});
