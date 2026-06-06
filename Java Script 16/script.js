
// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello Abhinav";
// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click",changeText);



// function clickfunc(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bhai";
// }
// let anchorElement = document.getElementById("fanchor");
// anchorElement.addEventListener("click",clickfunc);


function alertPara(event) {
    if (event.target.nodeName === 'SPAN'){
    alert("You have Entered on para:"+ event.target.textContent );
    }
}

// paras = document.querySelectorAll('p');
// for (let i = 0; i < paras.length; i++) {
//     para = paras[i];
//     para.addEventListener('click',alertPara);
// }

let mydiv = document.getElementById("wrapper");
document.addEventListener("click",alertPara);
