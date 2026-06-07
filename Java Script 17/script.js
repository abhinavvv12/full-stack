
// Reflow Time >> Repaint Time


const t1 = performance.now();
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para '+ i;
    // 1reflow and 1repaint every time loop runs
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Total time taken by code1: "+ (t2-t1));



const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para '+ i;
    // only 1 reflow every time
    mydiv.appendChild(para);
}
// 1reflow and 1repaint (1 time only)
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("Total time taken by code2: "+ (t4-t3));





// Best code

const t5 = performance.now();
// Light Weight Document which does not take any repaint and reflow.
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para '+ i;
    // NO reflow and NO repaint for the below line
    fragment.appendChild(para);
}
// 1reflow and 1 repaint (only 1 time)
document.body.appendChild(fragment);
const t6 = performance.now();

console.log("Total time taken by code3: "+ (t5-t6));


