import { useCanvas } from "../../hooks/UseCanvas";
import axios from 'axios'
import { useEffect, useState } from "react";
import treeElem from './tree2.jpg'
import '../../style/treeanimation.css'
export function TreeAnimation(props) {
    const [ls , setLs] = useState([])
    const client = axios.create()
    const playAlert = setInterval(function() {
        try {
            client.get('http://127.0.0.1:8000/getTree')
            .then(res => {
                    setLs(res.data)
                }
            )
        } catch (err) {
            console.log(err)
        }
        
     }, 2000);

     useEffect(()=> {
        client.get('http://127.0.0.1:8000/getTree')
        .then(res => {
                setLs(res.data)
            }
        )
     },[])

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
        ctx.fillStyle = 'rgba(232, 216, 195, 0.13)'
        ctx.roundRect (props.canvasWidth * 0.27 , props.canvasHeight * 0.55 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.55 , props.canvasHeight * 0.4 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.4 , props.canvasHeight * 0.15 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.12 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.3 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.5 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.02 , props.canvasHeight * 0.7 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.8 , props.canvasHeight * 0.12 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.8 , props.canvasHeight * 0.3 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.8 , props.canvasHeight * 0.5 , 250 , 100,30);
        ctx.fill();
        ctx.roundRect (props.canvasWidth * 0.8 , props.canvasHeight * 0.7 , 250 , 100,30);
        ctx.fill();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[0].author, props.canvasWidth * 0.28 , props.canvasHeight * 0.57, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[0].text, props.canvasWidth * 0.28 , props.canvasHeight * 0.61, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[1].author, props.canvasWidth * 0.56 , props.canvasHeight * 0.43, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[1].text, props.canvasWidth * 0.56 , props.canvasHeight * 0.47, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[2].author, props.canvasWidth * 0.41 , props.canvasHeight * 0.18, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[2].text, props.canvasWidth * 0.41 , props.canvasHeight * 0.22, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[3].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.15, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[3].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.19, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[4].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.33, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[4].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.37, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[5].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.53, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[5].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.57, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[6].author, props.canvasWidth * 0.03 , props.canvasHeight * 0.73, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[6].text, props.canvasWidth * 0.03 , props.canvasHeight * 0.77, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[7].author, props.canvasWidth * 0.81 , props.canvasHeight * 0.15, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[7].text, props.canvasWidth * 0.81 , props.canvasHeight * 0.19, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[8].author, props.canvasWidth * 0.81 , props.canvasHeight * 0.33, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[8].text, props.canvasWidth * 0.81 , props.canvasHeight * 0.37, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[9].author, props.canvasWidth * 0.81 , props.canvasHeight * 0.53, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[9].text, props.canvasWidth * 0.81 , props.canvasHeight * 0.57, 230)
        ctx.font = '20px sans-serif'
        ctx.fillText(generalLs[10].author, props.canvasWidth * 0.81 , props.canvasHeight * 0.73, 230)
        ctx.font = '16px sans-serif'
        ctx.fillText(generalLs[10].text, props.canvasWidth * 0.81 , props.canvasHeight * 0.77, 230)
    }
    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <div id="treecover">
            <img src={treeElem} id="treeimg"/>
            <canvas ref={canvasRef} id='treecanvas'/>
        </div>
    )
}