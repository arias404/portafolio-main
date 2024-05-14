const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

/**===== Mouseover habilidades =====**/

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards--habilidades');
    const color_H = '#e6e6e6';

cards.forEach(function(card) {
    const parrafo = card.querySelector('p');
    card.addEventListener('mouseover', function() {
            // Cambiar el color del texto del párrafo al color deseado
            if (parrafo) {
                parrafo.style.color = color_H;
            }
    card.addEventListener('mouseout', function() {
        console.log('Mouse fuera del elemento');

            if (parrafo) {
                parrafo.style.color = '#D9C8A9'; // Esto restablece el color al valor predeterminado
            }
    });

    });
});
});

/*===== MouseOver - Proyectos =====*/

function btn_pro (color, id) {

    var project_Title_one = document.querySelector('.title-project_one');
    var project_Title_two = document.querySelector('.title-project_two');

    var project_Title_three = document.querySelector('.title-project_three');

    /* Boton DEMO-proyectos */
    if(id == 'one-true'){
        project_Title_one.style.color = color;
        var textContent = project_Title_one.textContent || project_Title_one.innerText;
        project_Title_one.textContent = textContent.toUpperCase();
        project_Title_one.style.fontSize = '21px';
        project_Title_one.style.textDecoration = 'underline';
    }

    if(id == 'one-false'){
        project_Title_one.style.color = color;
        var textContent = project_Title_one.textContent || project_Title_one.innerText;
        project_Title_one.style.textDecoration = 'none';
        project_Title_one.style.fontSize = '20px';
    }

    if(id == 'two-true'){
        project_Title_two.style.color = color;
        var textContent = project_Title_two.textContent || project_Title_two.innerText;
        project_Title_two.textContent = textContent.toUpperCase();
        project_Title_two.style.fontSize = '21px';
        project_Title_two.style.textDecoration = 'underline';
    }

    if(id == 'two-false'){
        project_Title_two.style.color = color;
        var textContent = project_Title_two.textContent || project_Title_two.innerText;
        project_Title_two.style.textDecoration = 'none';
        project_Title_two.style.fontSize = '20px';
    }

    if(id == 'three-true'){
        project_Title_three.style.color = color;
        var textContent = project_Title_three.textContent || project_Title_three.innerText;
        project_Title_three.textContent = textContent.toUpperCase();
        project_Title_three.style.fontSize = '21px';
        project_Title_three.style.textDecoration = 'underline';
    }

    if(id == 'three-false'){
        project_Title_three.style.color = color;
        var textContent = project_Title_three.textContent || project_Title_three.innerText;
        project_Title_three.style.textDecoration = 'none';
        project_Title_three.style.fontSize = '20px';
    }
}




/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else {
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('.nav_menu').classList.remove('not-active');
        document.querySelector('.nav_menu').classList.add('active');
    }
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/*===== class active por secciones =====*/
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

/*===== Boton y función ir arriba =====*/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

