var top = window.scrollY
var speed = 500;
var easing = 'linear';
const layer = document.getElementById('nav')
var layerTopOffset = 0;
layer.style.position = 'absolute'
layer.style.zIndex = '1'

if (top > 0) {
    window.scrollTo(0, layerTopOffset)
} else {
    window.scrollTo(0,0)
}

window.addEventListener('scroll', function(){
    yPosition = window.scrollY - 1100;
    if (yPosition < 0){
        yPosition = 0;
    }
    
    layer.animate(
        {top: '100px'}, 
        {
         duration: speed, 
         easing: easing, 
         queue:false
        }
    );
});
