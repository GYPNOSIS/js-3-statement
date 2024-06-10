"use strict"


let numberOfSeries

for (let i = 0; i < 1; i++) 
    {
    numberOfSeries = +prompt('Nechta serial ko\`rdingiz?', '');
    if (numberOfSeries == '' || numberOfSeries == null){
        i--
    }
}
let savol_1;

let savol_2;

let savol_3;

let savol_4;

for (let i = 0; i < 1; i++)
     {
    savol_1 = prompt("Oxirgi ko\`rgan serialingiz?", '');
    if (savol_1 == '' || savol_1 == null){
        i--
    }
}
for (let i = 0; i < 1; i++)
     {
    savol_2 = +prompt("Nechi baxo berasiz?", '');
    if (savol_2 == '' || savol_2 == null){
        i--
    }
}
for (let i = 0; i < 1; i++)
     {
    savol_3 = prompt("Oxirgi ko`rgan serialingiz?", '');
    if (savol_3 == '' || savol_3 == null){Ex1, Ex2/js/up.js
        i--
    }
}
for (i = 0; i < 1; i++) 
    {
    savol_4 = +prompt("Nechi baxo berasiz?", '');
    if (savol_4 == '' || savol_4 == null){
        i--
    }
}

alert(`Seriallar ko\'rilgan = ${numberOfSeries} , Oxirgisi = ${savol_1} va ${savol_3} , Baxosi = ${savol_2} va ${savol_4}`)