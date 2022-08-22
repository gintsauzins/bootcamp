let app = document.querySelector('#app');

let template_btn = document.querySelector('.button'); //document - viss dokuments lapaa un no vina ar querySelector - metodi(selektoru) , ar kuru var atlasit. šajā gadijumā button no index faila
//izvadiju mainigaja lai varetu console logaa paskatities ko vins izvada
//console.log(document.querySelector('.button'));
let btn_clone;

btn_clone = template_btn.cloneNode(); //noklonejam pogu template_btn
btn_clone.textContent = 1; //pievieno saturu noklonetai pogai, pievienoju tekstu, zemmak appendotai pogai
//pievieno elementu kkam, saja gadijuma definetai pogai app
app.append(btn_clone); // si ir taka appendotas pogas izvadisana, un pievienosies vina pie app

btn_clone = template_btn.cloneNode(); //noklonejam pogu template_btn
btn_clone.textContent = 1; //pievieno saturu noklonetai pogai, pievienoju tekstu, zemmak appendotai pogai
//pievieno elementu kkam, saja gadijuma definetai pogai app
app.append(btn_clone); // si ir taka appendotas pogas izvadisana, un pievienosies vina pie app

btn_clone = template_btn.cloneNode(); //noklonejam pogu template_btn
btn_clone.textContent = 1; //pievieno saturu noklonetai pogai, pievienoju tekstu, zemmak appendotai pogai
//pievieno elementu kkam, saja gadijuma definetai pogai app
app.append(btn_clone); // si ir taka appendotas pogas izvadisana, un pievienosies vina pie app

btn_clone = template_btn.cloneNode(); //noklonejam pogu template_btn
btn_clone.textContent = 1; //pievieno saturu noklonetai pogai, pievienoju tekstu, zemmak appendotai pogai
//pievieno elementu kkam, saja gadijuma definetai pogai app
app.append(btn_clone); // si ir taka appendotas pogas izvadisana, un pievienosies vina pie app


//lai vairakas reizes atkartotu kkadu pogu jeb darbibu ir jauztaisa cikls

for (let number = 1; number <= 42; number++) add_new_button: {
    btn_clone = template_btn.cloneNode();
    btn_clone.textContent = number; 
    




    btn_clone.onclick = function (event) {
        alert(number);
    };

app.append(btn_clone);

}