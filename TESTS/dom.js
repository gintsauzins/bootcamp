let app = document.querySelector('#app');

let template_btn = document.querySelector('.button'); //document - viss dokuments lapaa un no vina ar querySelector - metodi(selektoru) , ar kuru var atlasit. šajā gadijumā button no index faila
//izvadiju mainigaja lai varetu console logaa paskatities ko vins izvada
//console.log(document.querySelector('.button'));

let btn_clone = template_btn.cloneNode(); //noklonejam pogu template_btn
template_btn.textContent = 1; //pievieno saturu noklonetai pogai, pievienoju tekstu, zemmak appendotai pogai
//pievieno elementu kkam, saja gadijuma definetai pogai app
app.append(template_btn);

