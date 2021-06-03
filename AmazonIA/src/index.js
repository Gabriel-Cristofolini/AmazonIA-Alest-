import axios from 'axios';

const Token = "8d05ed9596a1f8b9f2a38d694a0027cc0928d6c6d8969fe6a5912979e87d8b4b55975c9bd9d0087d37273335e84f9f9e2a67c1b0bad5a80c9e892727ece817ed"
const URL = 'http://localhost:5001/ia-541bd/us-central1/app/doacao'

let petCards = "";

axios
  .get(URL, {headers: { Authorization: Token }})
  .then(response => {
            for(let i = 0; i<response.data.length; i++){
              petCards = petCards + 
                "<div class=\"petCard\" id=\"petCard\" name='"+response.data[i].id+"' onclick=\"changeTab()\">"+
                    "<img src='"+response.data[i].data.url_imagem+"'>"+
                    "<span>"+response.data[i].data.nome+"</span>"+
                    "<div>"+
                        "<span>"+response.data[i].data.especie+"</span>"+
                        "<span>"+response.data[i].data.sexo+"</span>"+
                        "<span>"+response.data[i].data.idade+" anos</span>"+
                        "<span>"+response.data[i].data.raca+"</span>"+
                    "</div>"+
                "</div>";
            };
            document.querySelector("#petCardBox").innerHTML = petCards;
          })
        .catch((error) => {
            console.log(error)
          })

          