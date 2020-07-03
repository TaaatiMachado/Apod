
        //Faz requisição
        let request = new XMLHttpRequest();
        //Abre requisição
        request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3");
        //Tratar eventos antes de enviar
        request.onload = function(){
            let apod = JSON.parse(request.responseText);
            let videoAPOD = document.querySelector("#video");
            let imgAPOD = document.querySelector("#image");
            let dataAPOD = document.querySelector("#data");
            let nomeImg = document.querySelector("#nomeImg");
            let textoAPOD = document.querySelector("#textoImg");
            let autorAPOD = document.querySelector("#autor");

            textoAPOD.textContent = apod.explanation;
            textoAPOD.classList.add("textoImg");
            dataAPOD.textContent = apod.date;
            dataAPOD.classList.add("data");
            autorAPOD.textContent += apod.copyright;
            autorAPOD.classList.add("autor")
            nomeImg.textContent = apod.title;
            nomeImg.classList.add("nomeImg");


            if (typeof(imgAPOD == "img")) {
                imgAPOD.src = apod.url;
                imgAPOD.classList.add("image")
                
            } else {
                videoAPOD.src = apod.url;
                videoAPOD.classList.add("video")

            }
        //Envia requisição
        request.send();    
        
        }
  
