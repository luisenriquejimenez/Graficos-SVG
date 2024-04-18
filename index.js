let s = document.querySelector('svg');

for (let i = 0; i < 500; i++){
    let x = Math.floor(Math.random()*innerWidth)
    let y = Math.floor(Math.random()*100)
    let t = Math.floor(Math.random()*20)
    let c = ['gray','#b7b7b7']
    let n = document.createElementNS("http://www.w3.org/2000/svg","circle");
    s.appendChild(n);
    n.setAttribute("r", `${t}`);
    n.setAttribute("cx", `${x}`);
    n.setAttribute("cy", `${50+y}`);

    setInterval(()=>{
        let e = Math.floor(Math.random()*c.length)
        n.setAttribute("fill",c[e]);

    },3000)
};

setInterval(() => {
    let x = Math.floor(Math.random()* innerWidth);
    let y = 0;
    let yv = 10;
    let n = document.createElementNS("http://www.w3.org/2000/svg","circle");
    s.appendChild(n);
    n.setAttribute("r", "3");
    n.setAttribute("cx", `${x}`);
    n.setAttribute("cy", `${100+y}`);
    n.setAttribute("fill","#467cd2");
    
    function animar(){
        let cy = parseFloat(n.getAttribute("cy"));
        cy += yv;
        n.setAttribute("cy",cy);
        if (cy >= 600){
            s.removeChild(n);
            clearInterval(interlId);
        }
    }
    let interlId = setInterval(animar,1000/60);

}, 10);