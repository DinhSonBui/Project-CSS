$(document).ready(function(){
    $('.card').mousemove(function(e){
        var x = e.offsetX / 6;
        var y = e.offsetY / 6;
        $(this).css('transform','rotateX('+ x +'deg) rotateY('+ y +'deg)');
        $(this).children('.image').css({'top':y, 'left':x});
    })
    $('.card').mouseleave(function(){
        
        $(this).css('transform','rotateX('+ 0 +'deg) rotateY('+ 0 +'deg)');
        $(this).children('.image').css({'top':'0', 'left':'0'});
    })
}