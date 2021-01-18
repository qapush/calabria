const krpano_global = krpano.get('global');

// Texts object
const texts = {
    text_1: {
        title: "Just a point of interest",
        description: "So it's just a text which appears when you look here. It looks different on desktop and mobile. The Hotspot is not clickable here and could be invisible. Next one is clickable instead. \n\n Click 'NEXT'"
    },
    text_2: {
        title: "Another point of interest",
        description: "Ok, it's an example of just looking somewhere without any hotspot     ."
    },
    text_3: {
        title: "Pizzeria Calabria",
        description: "Savory Neapolitan pies prepared to perfection in a custom wood-fired stone oven designed and built in Italy. Made with San Marzano tomatoes and only the finest quality ingredients, our customers frequently tell  us our pies are the best in the city, and that’s something we take great pride in."
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
        text__container.style.top = -text__container.scrollHeight * 2 + 'px';
    } else {
        text__container.style.left = -(text__container.scrollWidth + 3) + 'px';
    }
}   
    

// Hide show function 

function showtext(){

        if(krpano.get('current_scene') == krpano.get('xml.scene')) {

            if(krpano_global.stagewidth <= 1200) {
                text__container.style.top = '0px';
            } else {
                text__container.style.left = '0px';
            }

        };
   
        krpano.call('hidemenu()');
        
    
}

// Assign classes function 

function textClasses(){

    

    if(krpano_global.stagewidth <= 1200) {
        text__container.style.top = '';
        text__container.style.left = '';       
        text__container.classList.remove('text__container--desktop');
        text__container.classList.remove('text__container--mobile');
        text__container.classList.add('text__container--mobile');

    } else {
        text__container.style.top = '';
        text__container.style.left = '';
        text__container.classList.remove('text__container--mobile');
        text__container.classList.remove('text__container--desktop');
        text__container.classList.add('text__container--desktop');
    }
}


// Resize functions

function resize(){
    hidetext();
    setTimeout( () => {

        textClasses();

            if( krpano.get('action[get(step_name)].text')){
                showtext();
            }

            krpano.call('updatescreen();');

            
            
            
    }, 550 );



}

// IMAGES

// IMAGES LIST 

const images = [
    'story/img1.jpg',
    'story/img2.png',
    'story/img3.png',
]

const imagesTexts = [

    'Popups like this could be used to showcase images. It\'s also an example of a feature working on JavaScript - it gives more control and works fast. \n \n So it has also a little bit transparent black background, so there remains some connection between the image and the context where it was opened.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    
]


// IMAGES ELEMENTS 

const imgContainer = document.createElement('div');
const imgWrapper = document.createElement('div');
const img = document.createElement('img');
const imgText = document.createElement('p');
const imgClose = document.createElement('button');

imgClose.innerText = "Close";

imgContainer.classList.add('image__container', 'hidden');
imgWrapper.classList.add('image__wrapper');
img.classList.add('image__image');
imgText.classList.add('image__text');
imgClose.classList.add('image__close');

imgContainer.append(imgWrapper);
imgWrapper.append(img);
imgWrapper.append(imgText);
imgWrapper.append(imgClose);

document.getElementById('krpanoSWFObject').insertAdjacentElement('afterbegin', imgContainer);

imgClose.addEventListener('click', (e) => {
    e.preventDefault();
    if(imgContainer.style.opacity == 1) {
        closeimage();
    }
});


function showimage(imgId, textId) {
   
    imgContainer.classList.remove('hidden');
    imgContainer.style.opacity = 0;
    setTimeout(()=>{
        imgContainer.style.opacity = 1;
    },50) ;

    if(textId !== null){
        imgText.innerText = imagesTexts[textId];
    } else {
        console.log('ni');
    }

    img.setAttribute('src', images[imgId]);

}

function closeimage() {
   
    
    imgContainer.style.opacity = 0;
    setTimeout( () => {
        imgContainer.classList.add('hidden');
        imgText.innerText = '';
    }, 500);
    
    



}






function textinit(){

        textClasses();

}


