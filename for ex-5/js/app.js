`use strict`



let count = 0;



for (let i = 1; i <= 100; i++) {
  if (i % 9 === 0) {
    count++;
  }
}

alert(`1-dan 100gacha bo\'lgan sonlarning orasida 9 ga bo'linadigan sonlarning soni: ${count} `);