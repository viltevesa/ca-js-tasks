
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
// indeksai:    0       1         2        3       4        5       6    
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:    0       1     2      3     4    5     6     7  

// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);

// 2. hammer is on the table
let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4]
console.log(sentence2);

// 3. sun is in the sky
let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5]
console.log(sentence3);

// 4. apple is with my sister
let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1]
console.log(sentence4);

// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.
