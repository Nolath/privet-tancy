let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранат', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

// эльфы дрыгают руками

function leftHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function handsUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      elf.stance[1] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function handsDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      elf.stance[1] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

// эльфы дрыгают ногами

function leftFootUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftFootDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightFootUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightFootDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function feetUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 1;
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function feetDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[2] = 0;
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

// прост фигуры

function leftsUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      elf.stance[2] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftsDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      elf.stance[2] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightsUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 1;
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightsDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[1] = 0;
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function allUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      elf.stance[1] = 1;
      elf.stance[2] = 1;
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function allDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      elf.stance[1] = 0;
      elf.stance[2] = 0;
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function handsUpFeetDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 1;
      elf.stance[1] = 1;
      elf.stance[2] = 0;
      elf.stance[3] = 0;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function handsDownFeetUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance[0] = 0;
      elf.stance[1] = 0;
      elf.stance[2] = 1;
      elf.stance[3] = 1;
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function moshpit(elf) {
  let moves = [leftHandUp, leftHandDown, rightHandUp, rightHandDown, handsUp, handsDown, leftFootUp, leftFootDown, rightFootUp, rightFootDown, feetUp, feetDown, leftsUp, leftsDown, rightsUp, rightsDown, handsUpFeetDown, handsDownFeetUp, allUp, allDown];
  let move = Math.floor(Math.random() * moves.length);
  return moves[move](elf);
}

// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
  if (elf.favouriteGems.indexOf(gem) != -1) return handsUp(elf);
  if (elf.dislikedGems.indexOf(gem) != -1) return handsDown(elf);
  switch (gem)
  {
    case "Цитрин": return handsUp(elf).then(handsDown).then(handsUp).then(handsDown);
    case "Аметист": return leftHandUp(elf).then(rightHandUp).then(leftHandDown).then(rightHandDown);
    case "Кварц": return feetUp(elf).then(feetDown);
    case "Альмандин": return leftsUp(elf);
    case "Родолит": return rightsUp(elf);
    case "Пироп": return handsUpFeetDown(elf).then(handsDownFeetUp);
    case "Спессартин": return allUp(elf);

    case "Андалузит": return handsDownFeetUp(elf);
    case "Гиацинт": return handsUpFeetDown(elf);
    case "Танзанит": elf.danceSpeed /= 2; return moshpit(elf);
    case "Топаз": elf.danceSpeed *= 2; return moshpit(elf);
    

    default: return moshpit(elf);
  }
}


// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
  switch(gem) {
    case "Циркон":
      return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
          return new Promise((resolve) => {
            setTimeout(() => {
              displayGemToElf(elf, gem);
              resolve(elf);
            }, elf.danceSpeed);
          });
        })
      })
    /*case "Танзанит":
      return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
          return displayGemToElf(elf, gem)
        })
      })
    case "Топаз":
      return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
          return displayGemToElf(elf, gem)
        })
      })*/
    case "Параиба":
      return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
          return new Promise((resolve) => {
            Promise.all(elvesPromises);
            resolve(elf);
          })
        })
      })  
    
    default:
      return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
          return displayGemToElf(elf, gem)
        })
      })
  }
}