
var fs = require('fs');
var gm = require('gm');

function pad(n, width) {
   n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

var dir = 'imgs/';
var height = 300;
var width = 300;
var fontSize = width / 3;

 try {
    fs.mkdirSync(dir);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }

for (var i = 0; i < 400; i++) { 
    gm(height, width, "#000")
	.fontSize(width/3)
	.stroke('#FFF')
	.fill('#FFF')
	.drawText(width/2 - width/4 , height/2, i)
	.write(dir +  pad(i,3) +".jpg", function (err) {
		if (err) console.error(err);
	});
}
