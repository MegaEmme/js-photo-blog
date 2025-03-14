const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
console.log(endpoint);

const dashBoard = document.querySelector('.row');
console.log(dashBoard);

axios.get(endpoint)
    .then(response =>{
        const result = response.data;
        console.log(result);
    })
    .catch(error =>{
        console.error(error);
        dashBoard.innerHTML=(`<h2 class="text-center">ERRORE</h2>`);
    })

function createHTML(element){

    element={title, date, url};

    return `<div class="col col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">                        
                    <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                    <img src="${url}" class="p-3" alt="${title}">
                    <div class="card-body">
                    <p class="card-text">${date}</p>
                    </div>
                </div>
            </div>`
};

