/* 
data.cord -bus elements
onclick  - funkcija
iedot x vai 0 - bus darbiba*/



/*izveidot masivu*/

document.querySelectorAll(".game_board a")

let cells = document.querySelectorAll(".game_board a")

let player_x = 'x';
let player_o = 'o';



for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    element.onclick = function(){
        element.textContent = 'x';
        
    }


    


}




/* for - cikls, funkcijas cikls - japarada  */


/*uzrakstit ciklu*/

