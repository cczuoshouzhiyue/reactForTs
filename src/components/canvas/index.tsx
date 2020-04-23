import React from 'react';
import { reactElement } from '../../common/alias';
import './index.scss'
let context: any;
let width: number;
let height: number;
let x: number = 30;
let y: number = 30;
let endX: number = 100;
let endY: number = 100;
let cnt = 0;

class CanvasComponent extends React.PureComponent <any, any> {

    componentDidMount(): void {
        let canvas: any = document.getElementById('canvas');
        context = canvas.getContext('2d');
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        this.draw(1)
        // this.update();
        // let _this = this
        // canvas.addEventListener('click',  (e: any) => {
        //     endX = e.offsetX;
        //     endY = e.offsetY;
        //     _this.update();
        // })
    }
     draw =(scale: number): void =>  {
        let img = new Image();

        img.onload = function() {
            let canvas: any = document.getElementById('canvas');
            // var w=canvas.width;
            // var h=canvas.height;
            // var sw=w*scale;
            // var sh=h*scale;
            // context.drawImage(img, 0,0, sw, sh);
            // context.fillStyle = 'rgb(200, 0, 0)';
            // context.fillRect(10 * scale, 10 * scale, 5, 5);

            context.shadowOffsetX = 2;
            context.shadowOffsetY = 2;
            context.shadowBlur = 2;
            context.shadowColor = 'rgba(0, 0, 0, 0.5)';

            context.font = '20px Times New Roman';
            context.fillStyle = 'Black';
            context.fillText('Sample String', 5, 30);
        };
        img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    };

    change = (): void => {
        cnt++;
        if (cnt === 1) {
            this.draw(1.5)
        }
        if (cnt === 2) {
            this.draw(2)
        }
        if (cnt === 3) {
            this.draw(2.5)
        }
        if (cnt === 4) {
            this.draw(3.5)
        }
    };
    change1 = (): void => {
        cnt--;
        if (cnt === 1) {
            this.draw(1.5)
        }
        if (cnt === 2) {
            this.draw(2)
        }
        if (cnt === 3) {
            this.draw(2.5)
        }
        if (cnt === 4) {
            this.draw(3.5)
        }
    };

    render():reactElement {
        return <>
            <canvas id='canvas'>
            </canvas>

             {/*<p onClick={this.change} >变大</p>*/}
             {/*<p onClick={this.change1}>缩小</p>*/}
            </>


    }
}

export default CanvasComponent
