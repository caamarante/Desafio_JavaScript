

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        /*Definindo quem o item do array esta sendo selecionado, iniciando o que fica na posição
        0 e somando de 1 em um ate 2 pois tem 3 itens*/
        let item = carouselArr[Carousel._sequence];
        
        const imagemCarousel = document.getElementById("carousel");
        console.log(item.Image)
        imagemCarousel.innerHTML = `<img src="./img/${item.Image}" style="height: 46vh;">`;

        const tituloCarousel = document.getElementById("carousel-title");
        console.log(item.Title)
        tituloCarousel.innerHTML = `<a href="${item.Url}">${item.Title}</a>`;

        Carousel._sequence++;
        //Reiniciando a sequencia
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};
