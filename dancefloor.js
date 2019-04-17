// Это ваш танец: через какой промежуток времени показать какую драгоценность
/*let dance = [
  [200, allGems[0]],
  [200, allGems[1]],
  [200, allGems[2]],
  [200, allGems[3]],
  [200, allGems[4]],
  [200, allGems[0]],
  [200, allGems[1]],
  [3000, allGems[2]],
  [200, allGems[3]],
  [200, allGems[4]],
];*/
function generateDance(count) {
  let dance = [];
  dance.push([300, "Андалузит"])
  dance.push([300, "Параиба"])
  dance.push([300, "Танзанит"])
  for (let i = 0; i < count - 2; i++) {
    let gem = Math.floor(Math.random() * allGems.length);
    dance.push([300, allGems[gem]])
  }
  dance.push([300, "Гиацинт"])
  return dance;
}

let dance = generateDance(20);

// Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(·_·)',
  danceSpeed: 200,
  stance: [0, 0, 1, 1],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[1]]
},
{
  name: allElves[1],
  head: '(o_o)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[2],
  head: '(o_O)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[3],
  head: '(-_-)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[4],
  head: '(._.)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[5],
  head: '(9_6)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[6],
  head: '(6_6)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[7],
  head: '(^_^)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
}];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}