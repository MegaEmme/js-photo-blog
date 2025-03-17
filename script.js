// recupero i dati da API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
console.log(endpoint);
// creo elementi
const dashBoard = document.querySelector('.row');
console.log(dashBoard);

const overlayElement = document.getElementById('overlay');
console.log(overlayElement);

const buttonElement = document.getElementById('button');
console.log(buttonElement);

const imageElement = document.getElementById('image');
console.log(imageElement);

buttonElement.addEventListener('click', function(){
    overlayElement.classList.add("d-none");
 });
// chiamo l'API con axios
axios.get(endpoint)
// creo una card che attinge da API
    .then(response =>{
        const result = response.data;
        console.log(result);

        let newCard = '';

        result.forEach(element => {
            newCard += createHTML(element)
        });

        dashBoard.innerHTML=newCard;
// creo elemento per overlay
        const cardsElement = document.querySelectorAll(".card");
        console.log(cardsElement);
// collego le immagini dalla dashboard all'overlay
        cardsElement.forEach(card =>{
            card.addEventListener('click', function(){
                const image = this.querySelector('.zoom');
                console.log(image);
                imageElement.src=image.src;
                overlayElement.classList.replace("d-none","d-block");
            })
        })

    })
// creo messaggio di errore
    .catch(error =>{
        console.error(error);
        dashBoard.innerHTML=(`<div class="alert alert-danger text-center" role="alert">
  ERRORE!!!
</div>`);
    })
//funzione per creare elementi HTML
function createHTML(element){

    const{title, date, url} = element;
    
    const newElement = `<div class="col col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">                        
                    <img class="pin translate-middle m-1 start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                    <img src="${url}" class="zoom p-3" alt="${title}">
                    <div class="card-body pt-0 pb-4">
                    <p class="card-text date my-0">${date}</p>
                    <p class="card-text title">${title}</p>
                    </div>
                </div>
            </div>`

    return newElement;
};

