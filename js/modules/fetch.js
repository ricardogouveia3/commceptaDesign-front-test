let persons;
let allPeopleCards;

fetch('../data/dados.json')
.then(function(response){
  response.json().then(function(data){

    persons = data;

    clickedPerson(0);
    for (let person of persons) { buildCard(person); }

    allPeopleCards = document.querySelectorAll('.main__persons__single');

    for (let card of allPeopleCards) {
      card.addEventListener("click", function(event){ console.log(event.target.dataset) });
    }

  });
})
.catch(function(err){ console.error('Failed retrieving JSON data - ', err); });



