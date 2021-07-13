    function draw() {
      var canvas = document.getElementById('canvas');
        console.log(canvas);

      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

      }
    

  var canvas1 = document.getElementById('canvas1');
  console.log(canvas1);


  var ctx1=canvas1.getContext('2d');


  console.log(ctx1);
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx1.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ', 0)';
      ctx1.fillRect(j * 25, i * 25, 25, 25);
    }
  }



 var canvas2 = document.getElementById('canvas2');
  if (canvas2.getContext) {
     var ctx2 = canvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx2.moveTo(110, 75);
    ctx2.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx2.moveTo(65, 65);
    ctx2.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx2.moveTo(95, 65);
    ctx2.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx2.stroke();
  }


var ctx3 = document.getElementById('canvas3').getContext('2d');
  // draw background
  ctx3.fillStyle = '#FD0';
  ctx3.fillRect(0, 0, 75, 75);
  ctx3.fillStyle = '#6C0';
  ctx3.fillRect(75, 0, 75, 75);
  ctx3.fillStyle = '#09F';
  ctx3.fillRect(0, 75, 75, 75);
  ctx3.fillStyle = '#F30';
  ctx3.fillRect(75, 75, 75, 75);
  ctx3.fillStyle = '#FFF';

  // set transparency value
  ctx3.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (var i = 0; i < 7; i++) {
    ctx3.beginPath();
    ctx3.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx3.fill();
  }



  var ctx4 = document.getElementById('canvas4').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx4.save();
      ctx4.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx4.translate(10 + j * 50, 10 + i * 50);
      ctx4.fillRect(0, 0, 25, 25);
      ctx4.restore();
    }
  }


  var ctx5 = document.getElementById('canvas5').getContext('2d');

  // left rectangles, rotate from canvas origin
  ctx5.save();
  // blue rect
  ctx5.fillStyle = '#0095DD';
  ctx5.fillRect(30, 30, 100, 100);
  ctx5.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx5.fillStyle = '#4D4E53';
  ctx5.fillRect(30, 30, 100, 100);
  ctx5.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx5.fillStyle = '#0095DD';
  ctx5.fillRect(150, 30, 100, 100);

  ctx5.translate(200, 80); // translate to rectangle center
                          // x = x + 0.5 * width
                          // y = y + 0.5 * height
  ctx5.rotate((Math.PI / 180) * 25); // rotate
  ctx5.translate(-200, -80); // translate back

  // draw grey rect
  ctx5.fillStyle = '#4D4E53';
  ctx5.fillRect(150, 30, 100, 100);



            




}





draw();



