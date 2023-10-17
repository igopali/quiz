$(function(){
   $("h3").text("In The Lord of the Rings, how many rings of power were there?"); 
})
$('.btn1').on('click', function(){
    $('#result').text("Incorrect! Hand in your nert card immediately!").css("background-color", "orange")
    .css("color", "red")
    $('.btn2').prop("disabled", true);
    $('.btn3').prop("disabled", true);
    $('.btn4').prop("disabled", true);
})
$('.btn2').on('click', function(){
    $('#result').text("Correct! There were 9 rings of power").css("background-color", "green")
    .css("color", "white")
    $('.btn1').prop("disabled", true);
    $('.btn3').prop("disabled", true);
    $('.btn4').prop("disabled", true);
})
$('.btn3').on('click', function(){
    $('#result').text("Incorrect! Hand in your nert card immediately!").css("background-color", "orange")
    .css("color", "red")
    $('.btn1').prop("disabled", true);
    $('.btn2').prop("disabled", true);
    $('.btn4').prop("disabled", true);
})
$('.btn4').on('click', function(){
    $('#result').text("Incorrect! Hand in your nert card immediately!").css("background-color", "orange")
    .css("color", "red")
    $('.btn1').prop("disabled", true);
    $('.btn2').prop("disabled", true);
    $('.btn3').prop("disabled", true);
})