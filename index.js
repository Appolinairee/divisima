let loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
     loader.style.display = 'none';
    var  divList = document.querySelectorAll('.divList');
    var  listContent = document.querySelectorAll('.listContent');
    var  menuBtn = document.querySelector('.menuBtn');
    var  menu1= document.querySelector('.header');

    for (let i = 0; i < 2; i++) {
        divList[i].addEventListener('click', ()=>{
            listContent[i].classList.toggle("activeList");
        });
    }

    menuBtn.addEventListener('click', ()=>{
        menu1.classList.toggle("activeMenu");
    });


    // HEADER SLIDER CODING
    let slides = document.querySelectorAll('.slide');
    let slideButtons = document.querySelectorAll('.slidePointeur a');
    let slideDots = document.querySelectorAll('.slidePointeur button');
    let slideNume = document.querySelector('.slideNume p');
    var n = 0;

    function slideShown(nom, lenght){
        let largueur = nom[1].getBoundingClientRect().width;
        if (n < lenght-1) {
            n++;
        }else{
            n = 0;
        }

        for (let i = 0; i < lenght; i++) {
        nom[i].style.transform = 'translateX(' + (-(largueur)* n) +'px)';
        nom[i].classList.remove('slideActive');
        slideDots[i].style.opacity = 0.5;
        }
        slides[n].classList.add('slideActive');
        slideDots[n].style.opacity = 0.9;
        slideNume.innerHTML = (n+1) + ' / 2';
    }


    slideShown(slides, 2); 
    for (let i = 0; i < 2; i++) {
    slideButtons[i].addEventListener('click', ()=>{
        slideShown(slides, 2);
    });
    }

    setInterval(() => {
    slideShown(slides, 2);
    }, 7000);



    // LAST PRODUCTS SCRIPTS
    let latestPsliderIncrement  = document.querySelectorAll('.latestPsliderIncrement a');
    let latestPslider = document.querySelectorAll('.latestPslider')
    let v = 0;

    function latest(p){

        l = latestPslider[0].getBoundingClientRect().width;   
            if (v <= 4 || v>= 0) {
                if (p == 0) {
                    v--;
                }
                else{
                    v++;
                }
            }

            if (v > 4){
                v = 0;
            }
            if (v < 0) {
                v = 5;
            }

            for (let i = 0; i < 9; i++) {
                latestPslider[i].style.transform = 'translateX(' + (-(l)* v) +'px)';
                latestPslider[i].style.transition = '.3s ease';

            }
    }


    for (let i = 0; i < latestPsliderIncrement.length; i++) {
        latestPsliderIncrement[i].addEventListener('click', ()=>{
            latest(i);
        })
    }

    setInterval(() => {
        latest(1);
    }, 4000);


})