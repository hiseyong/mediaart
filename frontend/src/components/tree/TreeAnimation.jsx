import { useCanvas } from "../../hooks/UseCanvas";
import axios from 'axios'
import { useEffect, useState } from "react";
import treeElem from './tree2.jpg'
import '../../style/treeanimation.css'
export function TreeAnimation(props) {
    const [ls , setLs] = useState([
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'안녕하세요'
        },
        {
            'author': '안세용',
            'text':'여러분이 보고계신 것은 사실 흰 바람벽 입니다'
        }
])
    const client = axios.create()
    

    /*useEffect(()=> {
        client.get('http://127.0.0.1:8000/getTree')
        .then(res => {
                setLs(res.data)
            }
        )
        setInterval(function() {
            client.get('http://127.0.0.1:8000/getTree')
            .then(res => {
                    console.log(res.data)
                    setLs(res.data)
                }
            ) .catch(err => {
                console.log(err)
            })
        
     }, 3000);
     },[])*/

    const generalLs = [
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        },
        {
            'author' : '',
            'text' : ''
        }
    ]

    let repeat = 0
    if (ls.length > 11) {
        repeat = 11
    } else {
        repeat = ls.length
    }

    for (let i = 0; i < repeat; i++) {
        generalLs[i].author = ls[ls.length-1-i].author
        generalLs[i].text = ls[ls.length-1-i].text
    }
    
    var w = props.canvasWidth;
    var h = props.canvasHeight;
    
    
    var init = [];
    var maxParts = 1000;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 5 + 10
      })
    }
    
    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    function drawRain(ctx) {
        ctx.fillStyle = 'rgba(43, 72, 72, 0.6)'
        ctx.strokeStyle = 'rgba(43, 72, 72, 0.6)'
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath()
        ctx.fillRect(0,0,props.canvasWidth,props.canvasHeight)
        ctx.stroke()
        ctx.strokeStyle = 'rgba(0, 0, 100,0.5)';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        for(var c = 0; c < particles.length; c++) {
            var p = particles[c];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            ctx.stroke();
        }
        move();
    }
    
    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    const isRain = true
    

    const animate = (ctx) => {
        ctx.clearRect(0,0,props.canvasWidth,props.canvasHeight);
        if (isRain == true) {
            drawRain(ctx)
        }
        ctx.roundRect = function (x, y, width, height, radius) {
            this.beginPath();
            this.moveTo(x + radius, y);
            this.lineTo(x + width - radius, y);
            this.quadraticCurveTo(x + width, y, x + width, y + radius);
            this.lineTo(x + width, y + height - radius);
            this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            this.lineTo(x + radius, y + height);
            this.quadraticCurveTo(x, y + height, x, y + height - radius);
            this.lineTo(x, y + radius);
            this.quadraticCurveTo(x, y, x + radius, y);
            this.closePath();
          }
        ctx.fillStyle = 'rgba(232, 216, 195, 0.8)'
        ctx.roundRect (props.canvasWidth * 0.27 , props.canvasHeight * 0.55 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.55 , props.canvasHeight * 0.4 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.4 , props.canvasHeight * 0.15 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.12 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.3 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.5 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.7 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.78 , props.canvasHeight * 0.12 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.78 , props.canvasHeight * 0.3 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.78 , props.canvasHeight * 0.5 , 300 , 130,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.78 , props.canvasHeight * 0.7 , 300 , 130,30);
        ctx.fill();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[0].author, props.canvasWidth * 0.28 , props.canvasHeight * 0.58, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[0].text, props.canvasWidth * 0.28 , props.canvasHeight * 0.61, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[1].author, props.canvasWidth * 0.56 , props.canvasHeight * 0.43, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[1].text, props.canvasWidth * 0.56 , props.canvasHeight * 0.47, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[2].author, props.canvasWidth * 0.41 , props.canvasHeight * 0.18, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[2].text, props.canvasWidth * 0.41 , props.canvasHeight * 0.22, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[3].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.15, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[3].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.19, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[4].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.33, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[4].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.37, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[5].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.53, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[5].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.57, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[6].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.73, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[6].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.77, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[7].author, props.canvasWidth * 0.79 , props.canvasHeight * 0.15, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[7].text, props.canvasWidth * 0.79 , props.canvasHeight * 0.19, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[8].author, props.canvasWidth * 0.79 , props.canvasHeight * 0.33, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[8].text, props.canvasWidth * 0.79 , props.canvasHeight * 0.37, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[9].author, props.canvasWidth * 0.79 , props.canvasHeight * 0.53, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[9].text, props.canvasWidth * 0.79 , props.canvasHeight * 0.57, 280)
        ctx.font = '30px sans-serif'
        ctx.fillText(generalLs[10].author, props.canvasWidth * 0.79 , props.canvasHeight * 0.73, 280)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[10].text, props.canvasWidth * 0.79 , props.canvasHeight * 0.77, 280)
    }
    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <div id="treecover">
            <img src={treeElem} id="treeimg"/>
            <canvas ref={canvasRef} id='treecanvas'/>
        </div>
    )
}