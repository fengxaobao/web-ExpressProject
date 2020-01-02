window.onload=function () {
  let canvas = document.getElementById("canvas");
  let cxt =canvas.getContext("2d");
    // cxt.fillStyle="#FF0000";
    cxt.beginPath();
    cxt.arc(70,18,15,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
};