let persons;
let allPeopleCards;

// fetch('../data/dados.json')   // Relative path
fetch('https://raw.githubusercontent.com/ricardogouveia3/commceptaDesign-front-test/master/data/dados.json')  // Absolute online path - required for github pages
.then(function(response){
  response.json().then(function(data){

    persons = data;

    for (let person of persons) { buildCard(person); }
    allPeopleCards = document.querySelectorAll('.main__persons__single');

    clickedPerson(1);
    selectCard(1);

    for (let card of allPeopleCards) {
      card.addEventListener("click", function(event) {
        event.stopPropagation();
        selectCard(this.getAttribute('data-id'));
        clickedPerson(this.getAttribute('data-id'));
      });
    }

  });
})
.catch(function(err){ console.error('Failed retrieving JSON data - ', err); });



