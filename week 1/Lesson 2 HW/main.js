//1 task://

const clientAge = 16;

const legalAge = 20;

if (clientAge >= legalAge) {
  console.log(`Pasiekes ${legalAge}`);
} 

else {
  console.log(`Nepasiekes ${legalAge}`);
}

//2 task://

const name = 'John';

if (name.length > 6) {
  console.log('IlgasVardas');
}

if (name.length < 6) {
    console.log('TrumpasVardas');
}

//3 task://

const age = 30;

if (age > 100 || age < 0) {
  console.log('Invalid age');
  
} else if (age < 18) {
  console.log('Child');

} else {
  console.log('Adult')
}

//4 task://

const car = "BMW";

if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW-Group');

} else if (car === 'BMW' || car === 'Mini' || car === 'RollsRoyce') {
  console.log('BMW-Group');

} else {
  console.log('NeVienam');
}