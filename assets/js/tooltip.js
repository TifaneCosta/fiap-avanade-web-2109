/*const tooltip =document.querySelector('#tooltip');
const body = document.querySelector('body')
const header = document.querySelector('.top-site');

//alvo.addEventListener('evento', função);
//mouseover, função arrow no body
//mouseout, função arrow no body 
//unset é desfazer ou desativar

body.addEventListener('mouseover', (e)=>{
    body.style.background = 'gray';
});

body.addEventListener('mouseout', (e)=>{
    body.style.background = 'unset';
});



/*const tooltip = (id, text) => {

}
//outro parametro
tooltip.addEventListener('mouseover', (e)=>{


    console.log('Altura da pagina', body.clientHeight);
    console.log('Largura da pagina', body.clientWidth);
    console.log('Altura do tooltip', tooltip.clientHeight);
    console.log('Largura do tooltip', tooltip.clientWidth);
    console.log('Altura do mouse', e.clientY);
    console.log('Largura do mouse', e.clientX);

    if (document.querySelector('.tooltip')){
        document.querySelector('.tooltip').remove();
    }
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('tooltip');
    newDiv.innerHTML = 'texto do tooltip';
    //o texto vai ser o parametro da função

    const largura = 200;
    newDiv.style.position = 'fixed';
    newDiv.style.width = largura + 'px';
    newDiv.style.top = e.clientY + 'px';
    newDiv.style.left =
    (e.clientX + largura > body.clientWidth
      ? e.clientX - largura - 20
      : e.clientX + largura) + "px";

  console.log(newDiv.style.width, "width");
    
    
    
    
    //newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX - 210: e.clientX + 200) + 'px';


    newDiv.style.display = 'flex';
    header.appendChild(newDiv);
});

//tooltip("#tooltip", "texto do tooltip");


const tooltip = (id, text) => {
    const tooltip = document.querySelector(id);
    tooltip.addEventListenner('mouseover', ()=>{
        if (document.querySelector('.tooltip')){
            document.querySelector('.tooltip').remove();
        }
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('tooltip');
        newDiv.innerHTML = text;
        //o texto vai ser o parametro da função
        const largura =200;
        newDiv.style.position = 'fixed';
        newDiv.style.width = largura + 'px';
        newDiv.style.top = e.clientY + 'px';
        newDiv.style.left =
        (e.clientX + largura > body.clientWidth
          ? e.clientX - largura - 20
          : e.clientX + largura) + "px";
          newDiv.style.display = 'flex';
          console.log(newDiv.style.width, 'width');
          header.appendChild(newDiv);
    });
   
}
console.log("#tooltip", "texto do tooltip");

// TRANSFORMANDO EM FUNÇÃO

const tooltip = (target, text) =>{
    const body = document.querySelector('header');
    const tooltipTarget = document.querySelector(target);
    tooltipTarget.addEventListenner('mouseover', (e)=>{
        if (document.querySelector('.tooltip')){
            document.querySelector('.tooltip').remove();
        }
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('tooltip');
        newDiv.innerHTML = text;
        //o texto vai ser o parametro da função
        const largura =200;
        newDiv.style.position = 'fixed';
        newDiv.style.width = largura + 'px';
        newDiv.style.top = e.clientY + 'px';
        newDiv.style.left =
        newDiv.style.display = 'flex';
        (e.clientX + largura > body.clientWidth
          ? e.clientX - largura - 20
          : e.clientX + largura) + "px";
          console.log(newDiv.style.width, 'width');
          header.appendChild(newDiv);
    });

    tooltipTarget.addEventListenner('mouseout', (e)=>{
        if (document.querySelector('.tooltip')){
            document.querySelector('.tooltip').remove();
    
}
tooltip("#tooltip", "texto do tooltip");*/



const tooltip = (target, texto) => {
    const body = document.querySelector("body");
    const tooltipTarget = document.querySelector(target);
  
    tooltipTarget.addEventListener("mouseover", (e) => {
      if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
      }
  
      const newDiv = document.createElement("div");
      newDiv.classList.add("tooltip");
      newDiv.innerHTML = texto;
  
      const largura = 200;
      newDiv.style.position = "fixed";
      newDiv.style.width = largura + "px";
      newDiv.style.top = e.clientY + "px";
      newDiv.style.display = "flex";
      newDiv.style.left =
        (e.clientX + largura > body.clientWidth
          ? e.clientX - largura - 20
          : e.clientX + largura) + "px";
  
      body.appendChild(newDiv);
    });
  
    tooltipTarget.addEventListener("mouseout", (e) => {
      if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
      }
    });
  };
  
  tooltip("#tooltip", "texto do tooltip");