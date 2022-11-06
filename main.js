function createGame(player1, hour, player2){
 return ` 
 <li>
      <img src="./assets/icon-${player1}.svg" alt="ícone da bandeira Brazil">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="ícone da bandeira Switzer">
  </li>
`
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
   ${games}
  </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML = 
  createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
  createCard('25/11', 'sexta', createGame('portugal', '15:00', 'ghana')) +
  createCard('26/11', 'sábado', createGame("switzerland", "14:00", "cameroon"))
