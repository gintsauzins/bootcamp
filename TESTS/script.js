// Mainīgie____________________________
let text = 'Sodien ir 26.novembris'; //sis ir teksts jo ''
console.log(text);
let number1 = 2;
let number2 = 3;
console.log(number1 + number2); // var kombinet ari tekstus ar skaitliem utt.

let arr = [5, 'a', 4, ['dažādas vairākas vērtības']]; // seit tiek nodefinets mainiigais - masiivs 
console.log(arr);
console.log('Value:' + arr[3]); // saja varianta, izvada to pasu mainigā arr (izdomats nosaukums) un viņa masīva 2 vērtību 
console.log('Value:' + arr[3] + [1]); //var but ari vairaaki masivi un masiva vertibas(indeksi) sakombinetas

let inner_arr = arr[3];
console.log('Second Value:'+ inner_arr[0]);


let obj_person = {
    '45': {
        id: 45,
        firstname: "Oskars",
        age: 36,
        email: "oskars@oskars.lv"
    },
    '53': {
        id: 53,
        firstname: "Alise",
        age: 32,
        email: "alise@alise.lv",
        cars: {BMW: {color: 'black'}, Volvo: {color: 'white'}}
    }
};   //noteiksim ojbektam mainigo, definejas ar figuriekavu

/*
let id = 53;
console.log(obj_person[id]);  // seit bus coonsole izvadisies taa persona ar ID 45 , saja gadijuma oskara datus
console.log(obj_person[id].cars['BMW']['color']);
*/


//matematiskas darbibas_____(veic ar + - : un * , taakaa piemeeraa par mainigo noteiksanu (vertibu iedosanu))

//tekstu savienošana 

let empty_text = '';

let id = 53;

if (id == 53) //konstrukcijas , piemeram  ja id ir vienads ar 53, tad izvadis šo rindu kas ir console log) ,
    console.log('Alises BMW auto krāsa: ' + obj_person[id].cars.BMW.color); // bet ja bus aplams, tad izpildiisies else
else  if (id == 45)
    console.log('Nepareizs ID');
    //cikls
for (let i = 0; i <= 10; i = i + 2)   // let i = 0; nodefinee mainiigo, i <=10 - parada, ja i ir mazaks par 10, tad izpildiisies cikls, i = i + 2 - tad raksta, kaa i mainīsies ja nostrādās šis kods (i <= mazaks par 10)
    console.log(i);

//kas ir == un ===
// 53 == '53' => true (nav aplams) divas vienadibas zimes nozime, ja ievaditais skaitlis bus 53, tad bus true un nostradas
// 53 == '53' => false (aplams)

//funckija

function sumAll(arr) {  //nodefinee funkciju
    console.log(arr);
    let sum = 0; //nodefine mainigo
    for (let i = 0; i < arr.lenght;) //raksta ciklu  lai liktu tradat funkcijai, ir jauzraksta cikls kura bridi jastrada funkcijai
        sum += arr[i];
    return sum; //un kad cikls nostradajis, tad izvadam summu
}

let calculated_sum = sumAll([1,2,3,4,4,6,7]); //izsauks funkciju
console.log(calculated_sum);
/*
-mainīgie
-matemātiskās darbības
-tekstu savienošana
-nosacījumi
-salīdzinājums
-loģiskie operatori
-cikli
-funkcijas
-objekta konstruēšana ar / no klases
 */

