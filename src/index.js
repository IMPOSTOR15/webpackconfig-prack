
import './index.html';
import './index.scss';
import logo from './img/logoimg.png'
import {mult, sum} from './modules/calc.js';

const imgWrap = document.querySelector('.img')
const img = new Image();
img.src = logo;
img.width = 300;
imgWrap.append(img)

console.log(mult(3, 4));
console.log(sum(3, 4));