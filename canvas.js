let canvasForDrawing
const color = ['red', 'green', 'blue', 'yellow', 'black']
const dBody = document.querySelector('body')
dBody.style.backgroundColor = "#eee"
const dStar = {
    draw: function(i, cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI/2*3;
        let x = cx;
        let y = cy;
        let step = Math.PI/spikes;
        canvasForDrawing.beginPath();
        canvasForDrawing.moveTo(cx,cy-outerRadius)
        for(let j = 0; j < spikes; j++){
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            canvasForDrawing.lineTo(x,y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            canvasForDrawing.lineTo(x,y)
            rot += step
        }
        canvasForDrawing.lineTo(cx,cy - outerRadius);
        canvasForDrawing.closePath();
        canvasForDrawing.fillStyle=color[i - 1]
        canvasForDrawing.fill();
    }
};

function createMainCanvas() {
    let dCanvas = document.createElement('canvas');
    dCanvas.id = 'main_canvas'
    dCanvas.width = '600'
    dCanvas.height = '600'

    dCanvas.style.backgroundColor = 'white'
    dCanvas.style.marginRight = '10px'
    dCanvas.addEventListener("click", (el) => {
        const MINICANVAS = document.querySelector('#сanvas_mini')
        pickCanvasColor(el, MINICANVAS)
    });
    dBody.appendChild(dCanvas);
    return canvasForDrawing = document.querySelector('#main_canvas').getContext('2d');
}
function createMiniCanvas() {
    let dCanvasMini = document.createElement('canvas');
    dCanvasMini.id = 'сanvas_mini';
    dCanvasMini.style.backgroundColor = 'white'
    dCanvasMini.width = '50'
    dCanvasMini.height = '600'
    dBody.appendChild(dCanvasMini);
}
function pickCanvasColor(event, canvas) {
    const x = event.layerX;
    const y = event.layerY;
    const pixel = canvasForDrawing.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const rgba = 'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    if (data[3] === 0) {
        canvas.style.background =  'rgba(255, 255, 255, 100)'
    } else {
        canvas.style.background =  rgba;
    }
}

createMainCanvas()
createMiniCanvas()
for (let i = 1; i < 6; i++) {
    dStar.draw(i, 100 * i,100 * i,5,80,35);
}



