// DIN UPPGIFT: Implementera en typeguard så att funktionen kan returnera priset oberoende om parameterna är en number eller som ett property i ett objekt. / 2 poäng

function getPrice(price: number | {price : number}) {  
    // Här...
 }    


// Testa funktionen
console.log(getPrice(100)); // Ska skriva ut 100
console.log(getPrice({ price: 100 })); // Ska skriva ut 100