
//car
let carArr = [];

const idsArr = ['modelo', 'alturacacamba', 'alturaveiculo', 'alturasolo', 'capacidadecarga', 'motor', 'potencia', 'volumecacamba', 'roda', 'preco'];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }

    
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){    
        if(el.checked){
            carArr.push(carClass);
        } else {
            const index = GetCarArrPosition(carArr, carClass);
            carArr.splice(index,1);
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    
    if(carArr.length < 2 || carArr.length == 3) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "flex";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for (let i=0; i < carArr.length; i++){   
        let item = carArr[i]; 
        const imagemCar = document.getElementById(`compare_image_${i}`);
        imagemCar.innerHTML = `<img src="${item.image}" style="width: 200px">`;
        for (let j = 0; j < idsArr.length; j++){
            let escrever = document.getElementById(`compare_${idsArr[j]}_${i}`);
            switch (idsArr[j]) {
                case 'modelo': 
                    escrever.innerHTML = `${item.nome}`;
                    break;
                    case 'alturacacamba': 
                    escrever.innerHTML = `${item.alturaCacamba}`;
                    break;
                    case 'alturaveiculo': 
                    escrever.innerHTML = `${item.alturaVeiculo}`;
                    break;
                    case 'alturasolo': 
                    escrever.innerHTML = `${item.alturaSolo}`;
                    break;
                    case 'capacidadecarga': 
                    escrever.innerHTML = `${item.capacidadeCarga}`;
                    break;
                    case 'motor': 
                    escrever.innerHTML = `${item.motor}`;
                    break;
                    case 'potencia': 
                    escrever.innerHTML = `${item.potencia}`;
                    break;
                    case 'volumecacamba': 
                    escrever.innerHTML = `${item.volumeCacamba}`;
                    break;
                    case 'roda': 
                    escrever.innerHTML = `${item.roda}`;
                    break;
                    case 'preco': 
                    escrever.innerHTML = `${item.preco}`;
                    break;
            }
        }
    } 
}
