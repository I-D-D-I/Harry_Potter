
import { data } from './data.js'

const cont = document.querySelector('.services__wrapper');
const inputLine = document.querySelector('.header__input');
const selectLine = document.querySelector('.header__select');
const newData = [];

function createCard(newObj) {
  const cardNew = document.createElement('div');
  cardNew.className = 'services__item';
  cardNew.innerHTML = `<img class='item__picture' src= ${newObj.image} alt = 'actor'/>
  <div class='item__about'><p class='item__name'>${newObj.name}</p><p class='item__text'>Actor: ${newObj.actor}</p><p class='item__text'>Gender: ${newObj.gender}</p><p class='item__text'>House: ${newObj.house}</p><p class='item__text'>Wand core: ${newObj.wand.wood} ${newObj.wand.core}</p><p class='item__text'>Alive: ${newObj.alive ? 'yes': 'no'}</p></div>`;
  cont.append(cardNew);
  return cardNew;
  }
  // вызов отрисовки карточек
  data.forEach((card) => createCard(card));

  // поиск по селекту
  function handleSelect() {
    const valueSelect = selectLine.value;
    const valueInput = inputLine.value;
    cont.innerHTML = '';
    const newData = data.filter((item) => item.house.includes(selectLine.value) || selectLine.value == "")
    .filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase().trim()));
    return newData.forEach((card) => createCard(card));
  }
  selectLine.addEventListener('change', handleSelect)
  inputLine.addEventListener('input', handleSelect);

  // поиск по имени
  // function handleInputSelect() {
  //   const valueInput = inputLine.value;
  //   cont.innerHTML = '';
  //   const newData = data
  //   .filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase().trim()))
  //   .filter((item) => item.house.includes(selectLine.value));
  //   return newData.forEach((card) => createCard(card));
  //   };
// inputLine.addEventListener('input', handleInputSelect);





// function handleSelect() {
//     selectLine.addEventListener('change', () => {
//         const newData = data.filter((item) => item.house.includes(selectLine.value));
//         cont.innerHTML = '';
//         return newData.forEach((card) => createCard(card));
//     })
// }
// handleSelect() 

// function handleInput() {
//   inputLine.addEventListener('input', () => {
//         const valueInput = inputLine.value;
//         const newData = data
//             .filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase().trim()))
//             .filter((item) => item.house.includes(selectLine.value));
//         cont.innerHTML = '';
//         return newData.forEach((card) => createCard(card));
//     });
// }
// handleInput() 





  // function callCreateCard(newArr) {
  //   data.forEach((card) => cont.append(createCard(card)));
  // }

  // createCard(newArr.forEach((e) => cont.append(createCard(e))))

// function callCreateCard(newArr) {
//   newArr.forEach((item) => {cont.append(createCard(item))});
// }

  // function handleInputSelect() {
  //   cont.innerHTML = ' ';
  //   let valueInput = inputLine.value.toLowerCase().trim();
  //   let valueSelect = selectLine.value.toLowerCase().trim();
  //   newArr = data.filter((item) => item.house.toLowerCase().trim().includes(valueSelect));
  //   newArr = newArr.filter((item) => item.name.toLowerCase().trim().includes(valueInput));
  //   cont.append(createCard(newArr));
  //   };
// 1 событие по поиску по инпуту
// inputLine.addEventListener('input', handleInputSelect);
// selectLine.addEventListener('change', handleInputSelect);
// callCreateCard(newArr);
// createCard(newArr.forEach((e) => cont.append(createCard(e))))
// callCreateCard(newArr)
// inputLine.addEventListener('input', (e) => handleInput(e.target.value));


// function handleSelect() {
//   cont.innerHTML = ' ';
//   let valueSelect = selectLine.value.toLowerCase().trim();
//   newArr = data.filter((item) => item.house.toLowerCase().trim().includes(valueSelect));
//   callCreateCard(newArr);
// };
//  2 событие по поиску по селекту
// selectLine.addEventListener('change', handleSelect);
// selectLine.addEventListener('change', (e) => handleSelect(e.target.value));

  //вызов отрисовки карточек
// data.forEach((card) => cont.append(createCard(card)));

// callCreateCard(newArr);

// createCard(newArr.forEach((e) => cont.append(createCard(e))))




  // newArr.forEach((el) => cont.append(createCard(el)))


// inputLine.handleInputSelect('input', (e) => handleInputSelect(e.target.value));

// selectLine.handleInputSelect('change', (e) => handleSelect(ev.target.value));
//   const a = inputLine.value;
//   const b = selectLine.value;
{/* <option selected disabled class="select__first">Choose one</option> */}


  // function handleInput(e) {
  //   cont.innerHTML = ' ';
  //   let value = e.toLowerCase().trim();
  //   newArr = newArr.filter((item) => item.name.toLowerCase().includes(value))
    // .forEach((item) => cont.append(createCard(item)))
    // createCard(newArr);
    // };
// получили 1 карточку по инпуту по имени

// запускаем 1 событие по поиску по инпуту
// inputLine.addEventListener('input', (e) => handleInput(e.target.value));


// function handleSelect(ev) {
//   cont.innerHTML = ' ';
//   let school = ev;
//    newArr = data.filter((item) => item.house.includes(ev))
//    .forEach((item) => cont.append(createCard(item)))
//    createCard(newArr);
// };
// получили 2 карточку по селекту

// запускаем 2 событие
// selectLine.addEventListener('change', (ev) => handleSelect(ev.target.value));


  // const a = inputLine.value;


// пробуем объединить

// function handleInputSelect() {
//   const b = selectLine.value;

//   cont.innerHTML = " ";
//   data.forEach((el) => function () {
//       if (el.name.toLowerCase().trim().includes(a.toLowerCase().trim()))
//       if (b === sel1 || el.house === b)
//       cont.append(createCard(el));
//     });
// }

// inputLine.addEventListener("input", handleInputSelect);
// selectLine.addEventListener("change", handleInputSelect);

// получаем карточку по инпуту и селекту




// function handleInputSelect() {
//   const a = inputLine.value;
//   a = a.toLowerCase().trim()
//   const b = selectLine.value;
//   cont.innerHTML = ' ';

//   data.filter((item) => item.name.toLowerCase().includes(a.toLowerCase().trim())).filter((item) => item.house.includes(b)).forEach((item) => cont.append(createCard(item)));
// }
// inputLine.addEventListener('input', handleInputSelect);
// selectLine.addEventListener("change", handleInputSelect);




//   selectLine.addEventListener('change', (ev) => handleSelect(ev.target.value));


    // data.filter((item) => item.actor.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.gender.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.house.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.wand.wood.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.wand.core.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

// };


    
// запускаем 1 событие
// inputLine.addEventListener('input', (e) => handleInput(e.target.value));

// function handleInput(e) {
//     cont.innerHTML = ' ';
//     let value = e.toLowerCase().trim();
//     data.filter(
//         (item) => 
//         item.name.toLowerCase().includes(value) ||
//         item.actor.toLowerCase().includes(value) ||
//         item.gender.toLowerCase().includes(value) ||
//         item.house.toLowerCase().includes(value) ||
//         item.wand.wood.toLowerCase().includes(value) ||
//         item.wand.core.toLowerCase().includes(value)
//         )
//         .forEach((item) => cont.append(createCard(item)))
//     };
// получили 1 карточку по инпуту

