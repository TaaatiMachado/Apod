
//Faz requisição
    let request = new XMLHttpRequest();
//Abre requisição
    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3&date`);
//Tratar eventos antes de enviar
    request.onload = function(){
        let apodObj = JSON.parse(request.responseText);
        let imgAPOD = document.querySelector("#image");
        let videoAPOD = document.querySelector("#video");
        let dataAPOD = document.querySelector("#data");
        let nomeImg = document.querySelector("#nomeImg");
        let textoAPOD = document.querySelector("#textoImg");
        let autorAPOD = document.querySelector("#autor");

            textoAPOD.textContent += apodObj.explanation;
            dataAPOD.textContent = apodObj.date;
            autorAPOD.textContent += apodObj.copyright;
            nomeImg.textContent = apodObj.title;

            textoAPOD.classList.add("textoImg");
            dataAPOD.classList.add("data");
            autorAPOD.classList.add("autor");
            nomeImg.classList.add("nomeImg");


        if (imgAPOD.media_type = "image") {
            imgAPOD.src = apodObj.url;
            videoAPOD.classList.add("someclasse");

            
                
        } else {
            videoAPOD.src = apodObj.url;
            imgAPOD.classList.add("someclasse");
        }
         
        videoAPOD.classList.add("video");
        imgAPOD.classList.add("image");
    }

         //Envia requisição
         request.send();  
