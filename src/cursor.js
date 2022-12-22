import { useEffect } from "react";

var timer;

const Cursor = () => {
  useEffect(() => {
        const setXY = (e) => {
            let cursor1 = document.getElementById("cursor-1");
            let cursor2 = document.getElementById("cursor-2");
            let cursor3 = document.getElementById("cursor-3");
            let cursor4 = document.getElementById("cursor-4");
            let cursor5 = document.getElementById("cursor-5");
            let cursor6 = document.getElementById("cursor-6");
            let cursor7 = document.getElementById("cursor-7");
            let cursor8 = document.getElementById("cursor-8");

            cursor1.style.left = `${e.pageX}px`;
            cursor1.style.top = `${e.pageY}px`;

            cursor2.style.left = `${e.pageX}px`;
            cursor2.style.top = `${e.pageY}px`;

            cursor3.style.left = `${e.pageX}px`;
            cursor3.style.top = `${e.pageY}px`;

            cursor4.style.left = `${e.pageX}px`;
            cursor4.style.top = `${e.pageY}px`;

            cursor5.style.left = `${e.pageX}px`;
            cursor5.style.top = `${e.pageY}px`;
            cursor5.classList.remove("squatters-2");

            cursor6.style.left = `${e.pageX}px`;
            cursor6.style.top = `${e.pageY}px`;
            cursor6.classList.remove("squatters");

            cursor7.style.left = `${e.pageX}px`;
          cursor7.style.top = `${e.pageY}px`;

            cursor8.style.left = `${e.pageX}px`;
            cursor8.style.top = `${e.pageY}px`;

          clearTimeout(timer);
          timer = setTimeout(() => {
            cursor5.classList.add("squatters-2");
            cursor6.classList.add("squatters");
          },300);
        }

        window.addEventListener("mousemove", setXY);
        return _ => {
            window.removeEventListener("mousemove", setXY);
        }
  });
  

  return <>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="d-none">
  <defs>
    <filter id="goo">
  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 75 -10" result="goo" />
  <feBlend in="SourceGraphic" in2="goo"/>
  
</filter>
  </defs>
        </svg>
        
        <div className="wrapper d-sm-block d-none">
            <div id="cursor-1" className="cursor-default-hhh"></div>
            <div id="cursor-2" className="cursor-default-hhh"></div>
            <div id="cursor-3" className="cursor-default-hhh"></div>
            <div id="cursor-4" className="cursor-default-hhh"></div>
            <div id="cursor-5" className="cursor-default-hhh"></div>
            <div id="cursor-6" className="cursor-default-hhh"></div>
            <div id="cursor-7" className="cursor-default-hhh"></div>
            <div id="cursor-8" className="cursor-default-hhh"></div>
        </div>
  </>
}

export default Cursor;