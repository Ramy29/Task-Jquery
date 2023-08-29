
/// <reference types="../@types/jquery"/>
$('.settings .sigth i').on('click', function(){
    $('.settings .open').animate({width:"toggle"},1000)
})
$('#contact').on('click',function(){
    let contachigh =$('#contact').offset().top+500
    $('html,body').animate({scrollTop:contachigh},2000)
})
$('.settings .open ').on('click', function(e){
    let currentid= $(e.target).attr('id')
    console.log(currentid)
})
$('.firstsinger').on('click',function(){
    $('#lorem1').slideDown()
    $('#lorem2,#lorem3,#lorem4').hide()
})
$('.secondsinger').on('click',function(){
    $('#lorem2').slideDown()
    $('#lorem1,#lorem3,#lorem4').slideUp()
})
$('.secondsinger').on('click',function(){
    $('#lorem2').slideDown()
    $('#lorem1,#lorem3,#lorem4').slideUp()
})
$('.thirdsinger').on('click',function(){
    $('#lorem3').slideDown()
    $('#lorem1,#lorem2,#lorem4').slideUp()
})
$('.fourthsinger').on('click',function(){
    $('#lorem4').slideDown()
    $('#lorem1,#lorem2,#lorem3').slideUp()
})
var countdowndate =new Date('Oct 29, 2023 00:00:00').getTime()
var x =setInterval(function(){
    var now =new Date().getTime()
    var different =countdowndate-now

    var days =Math.floor(different/(1000*60*60*24))
    var hours =Math.floor((different%(1000*60*60*24))/(1000*60*60))
    var minutes =Math.floor((different%(1000*60*60))/(1000*60))

    document.getElementById('days').innerHTML=days
    document.getElementById('hours').innerHTML=hours
    document.getElementById('minutes').innerHTML=minutes

},1000)


$('.allinputs .textarea').keyup(function(){
 let mylength=$(this).val().length
 $('#nums').text(100-mylength+" Character")
})

        
    
     
    