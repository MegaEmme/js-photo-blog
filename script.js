// recupero i dati da API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
console.log(endpoint);
// creo elemento dashboard
const dashBoard = document.querySelector('.row');
console.log(dashBoard);
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

    })
// creo messaggio di errore
    .catch(error =>{
        console.error(error);
        dashBoard.innerHTML=(`<div class="alert alert-danger text-center" role="alert">
  ERRORE!!!
</div>`);
    })
//funzione per creare eleemtni HTML
function createHTML(element){

    const{title, date, url} = element;
    
    const newElement = `<div class="col col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">                        
                    <img class="translate-middle m-1 start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                    <img src="${url}" class="p-3" alt="${title}">
                    <div class="card-body pt-0 pb-4">
                    <p class="card-text date my-0">${date}</p>
                    <p class="card-text title">${title}</p>
                    </div>
                </div>
            </div>`

    return newElement;
};

