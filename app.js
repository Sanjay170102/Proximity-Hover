var body = document.querySelector('body');

body.addEventListener('mousemove',moveEyeBall);

function moveEyeBall(){
    var eyeBall = document.querySelectorAll('.eye');
    eyeBall.forEach(function(eyeBall){
        let x = (eyeBall.getBoundingClientRect().left) + (eyeBall.clientWidth/2);
        let y = (eyeBall.getBoundingClientRect().top) + (eyeBall.clientHeight/2);
        console.log(x);
        let radian = Math.atan2(event.pageX - x,event.pageY-y);
        let rotate = (radian * (180 / Math.PI) * -1)+ 270;
        eyeBall.style.transform = "rotate("+rotate+"deg)";
    })
}