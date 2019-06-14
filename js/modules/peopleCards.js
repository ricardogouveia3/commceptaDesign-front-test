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

  document.getElementById('mainPersons').innerHTML = document.getElementById('mainPersons').innerHTML + personCard;
}



function clickedPerson(id) {
  document.getElementById('clickedPhoto').setAttribute('src', 'assets/img/people/' + persons[id].foto)
  document.getElementById('clickedNameData').innerText = persons[id].nome;
  document.getElementById('clickedRoleData').innerText = persons[id].cargo;
  document.getElementById('clickedAgeData').innerText = persons[id].idade;
}