// Meu conteudo principal de JS

function renderizarImagens(){
    let tags = [];
    let imagens = [
        {nome: "Mesa" , href:"https://media.istockphoto.com/photos/empty-table-at-a-restaurant-picture-id1160805942"},
        {nome: "café" , href:"https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg"},
        {nome: "not" , href:"https://cdn.pixabay.com/photo/2014/05/02/21/47/workstation-336369_960_720.jpg"}  
    ];
    
    //gera as tags de imagem com base na api falsa
    for (let index = 0; index < imagens.length; index++) {
        tags.push({tagImage: `<img src="${imagens[index].href}" alt="${imagens[index].nome}">`})
    }
    
    
    //Coloca os elementos dentro do dom
    let galeria = document.getElementById("galeria");
    for (let index = 0; index < tags.length; index++) {
        galeria.innerHTML = galeria.innerHTML + tags[index].tagImage;
    }

}



