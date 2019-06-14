function buildCard(person) {
  let personCard = `
    <div class="main__persons__single" data-id="` + person.id + `">
      <div class="main__persons__single__photo">
        <img src="assets/img/people/` + person.foto + `" alt="Avatar de ` + person.nome + `" class="main__persons__single__photo__img">
        <div class="main__persons__single__photo__id">
          <span class="main__persons__single__photo__id__number">` + person.id + `</span>
        </div>
      </div>
      <div class="main__persons__single__info">
        <span class="main__persons__single__info__field__name">` + person.nome + `</span>
        <span class="main__persons__single__info__field__role">` + person.cargo + `</span>
      </div>
    </div>
  `;

  document.getElementById('mainPersons').innerHTML += personCard;
}

function clickedPerson(id) {
  for (let person of persons) {
    if (person.id == id) {
      document.getElementById('clickedPhoto').setAttribute('src', 'assets/img/people/' + person.foto)
      document.getElementById('clickedNameData').innerText = person.nome;
      document.getElementById('clickedRoleData').innerText = person.cargo;
      document.getElementById('clickedAgeData').innerText = person.idade;
    }
  }
}

function selectCard(id) {
  for (let card of allPeopleCards) {
    card.classList.remove('main__persons__single--clicked');
    if (card.dataset.id == id) {
      card.classList.add('main__persons__single--clicked');
    }
  }
}