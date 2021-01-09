const krpano_global = krpano.get('global');

// Texts object
const texts = {
    text_1: {
        title: "Pizzeria Calabria",
        description: "Savory Neapolitan pies prepared to perfection in a custom wood-fired stone oven designed and built in Italy. Made with San Marzano tomatoes and only the finest quality ingredients, our customers frequently tell us our pies are the best in the city, and that’s something we take great pride in."
    },
    text_2: {
        title: "Title 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    text_3: {
        title: "Title 3",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
} 

  // Create text elements 

  const text__container = document.createElement('div');
  const text__title = document.createElement('p');
  const text__description = document.createElement('p');   
  
  // Styles 

  text__title.classList.add('text__title');
  text__description.classList.add('text__description'); 

    // Append 

    text__container.append(text__title);
    text__container.append(text__description);
    document.getElementById('krpanoSWFObject').insertAdjacentElement('afterbegin', text__container);


// Render text function
 
function rendertext(textid){
        text__title.innerText = texts[textid].title;
        text__description.innerText = texts[textid].description;     
    }

// Hide text function 

function hidetext(){
    if(krpano_global.stagewidth <= 1200) {
        text__container.style.top = -text__container.scrollHeight + 'px';
    } else {
        text__container.style.left = -(text__container.scrollWidth + 3) + 'px';
    }
}
   

// Hide show function 

function showtext(){
     if(krpano_global.stagewidth <= 1200) {
        text__container.style.top = '0px';
    } else {
        text__container.style.left = '0px';
    }
}

// Assign classes function 

function textClasses(){
    if(krpano_global.stagewidth <= 1200) {
        text__container.style.top = '';
        text__container.style.left = '';       
        text__container.classList.remove('text__container--desktop');
        text__container.classList.add('text__container--mobile');

    } else {
        text__container.style.top = '';
        text__container.style.left = '';
        text__container.classList.remove('text__container--mobile');
        text__container.classList.add('text__container--desktop');
    }
}


// Resize functions

function resize(){
    hidetext();
    setTimeout( () => {
        textClasses();
        showtext();
    }, 550 );



}




function textinit(){

        textClasses();

}


