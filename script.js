
let inputDate = document.querySelector("#date");
let btnShow = document.querySelector("#btnShow");

//Faz requisição
let request = new XMLHttpRequest();

inputDate.addEventListener("submit", function (event) {
    event.preventDefault();

//Abre requisição
    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3&date=${this.elements.date.value}`);
//Envia requisição
    request.send(); 
})

        
request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3`);
//Tratar eventos antes de enviar
request.onload = function(){
            if (request.status == 200) {
                let apodObj = JSON.parse(request.responseText);
                let imgAPOD = document.querySelector("#image");
                let videoAPOD = document.querySelector("#video");
                let dataAPOD = document.querySelector("#data");
                let nomeImg = document.querySelector("#nomeImg");
                let textoAPOD = document.querySelector("#textoImg");
                let autorAPOD = document.querySelector("#autor");

                textoAPOD.textContent = apodObj.explanation;
                dataAPOD.textContent = apodObj.date;
                autorAPOD.textContent = apodObj.copyright;
                nomeImg.textContent = apodObj.title;

                textoAPOD.classList.add("textoImg");
                dataAPOD.classList.add("data");
                autorAPOD.classList.add("autor");
                nomeImg.classList.add("nomeImg");

//Condição imagem/vídeo
            if (imgAPOD.media_type = "image") {
                imgAPOD.src = apodObj.url;
                videoAPOD.classList.add("someclasse");               
            } else {
                videoAPOD.src = apodObj.url;
                imgAPOD.classList.add("someclasse");
            }
         
            videoAPOD.classList.add("video");
            imgAPOD.classList.add("image");
        
//erro 404        
    } else {
          window.location.href = '404.html'
    }
}

         //Envia requisição
         request.send();  

