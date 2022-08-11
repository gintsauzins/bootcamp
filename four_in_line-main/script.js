class GridGame
{
    data; data_name; #symbol;
    constructor(data_name) {
        this.data = localStorage.getItem(data_name);
        this.data_name = data_name;
        if (this.data) {
            this.data = JSON.parse(this.data);
        }
        else {
            this.data = {
                moves: {},
                count: 0
            };
        }
        this.#symbol = (this.data.count % 2 == 0) ? 'x' : 'o';
    }
    getSymbol() {
        return this.#symbol;
    }
    saveMove(coord_y, coord_x) {
        if (!this.data.moves.hasOwnProperty(coord_y)) {
            this.data.moves[coord_y] = {};
        }
        this.#symbol = (this.data.count % 2 == 0) ? 'x' : 'o';
        this.data.moves[coord_y][coord_x] = this.#symbol;
        
        ++this.data.count;
        localStorage.setItem(this.data_name, JSON.stringify(this.data));      
    }
    hasCoord(coord_y, coord_x) {
        if (
            this.data.moves.hasOwnProperty(coord_y) &&
            this.data.moves[coord_y].hasOwnProperty(coord_x)
        ) {
            return true;
        }
        return false;
    }
    valueEquals(y, x) {
        return (
            this.hasCoord(y, x) &&
            this.data.moves[y][x] === this.#symbol
        );
    }
    resetGame() {
        this.data = {
            moves: {},
            count: 0
        };
        this.#symbol = 'x';
        localStorage.removeItem(this.data_name);
    }
}

const four_in_line = new GridGame('four_in_line_data');
const message_h2 = document.querySelector('.message');
const game_board = document.querySelector('.game_board');

for (let y = 9; y >= 0; y--) {
    for (let x = 0; x < 10; x++) {
        let btn = document.createElement('a');
        btn.setAttribute('href', '#');
        btn.setAttribute('data-coord-y', y);
        btn.setAttribute('data-coord-x', x);

        game_board.append(btn);

        if (four_in_line.hasCoord(y, x)) {
            btn.textContent = four_in_line.data.moves[y][x];
        }

        btn.onclick = function (event) {
            event.preventDefault();
            let coord_y = Number(btn.getAttribute('data-coord-y'));
            let coord_x = Number(btn.getAttribute('data-coord-x'));
            if (
                !four_in_line.hasCoord(coord_y, coord_x) &&
                (coord_y == 0 || four_in_line.hasCoord(coord_y - 1, coord_x))
            ) {
                four_in_line.saveMove(coord_y, coord_x);
                let symbol = four_in_line.getSymbol();
                this.textContent = symbol;

                getWinner: {
                    const STAY = 0;
                    const LEFT = -1;
                    const RIGHT = 1;
                    const TOP = 1;
                    const DOWN = -1;

                    horizontal: {
                        let match_count = 0;
                        match_count = countMatches(coord_y, coord_x, STAY, LEFT);
                        match_count += countMatches(coord_y, coord_x, STAY, RIGHT);

                        if (match_count >= 3) {
                            showMessage(symbol + ' has won the game!');
                        }
                    }

                    vertical: {
                        let match_count = 0;
                        match_count = countMatches(coord_y, coord_x, DOWN, STAY);

                        if (match_count >= 3) {
                            showMessage(symbol + ' has won the game!');
                        }
                    }
                }
            }
        }
    }
}

document.querySelector('.reset').onclick = function (event) {
    event.preventDefault();
    four_in_line.resetGame();
    for (let btn of game_board.children) {
        btn.textContent = '';
    }
    showMessage('');
};


function countMatches(coord_y, coord_x, diff_y, diff_x) {
    let match_count = 0;
    let new_y = coord_y;
    let new_x = coord_x;
    for (let i = 0; i < 3; i++) {
        new_y += diff_y; 
        new_x += diff_x; 
        if(four_in_line.valueEquals(new_y, new_x)) {
            ++match_count;
        }
        else {
            break;
        }
    }

    return match_count;
}

function showMessage(message) {
    message_h2.textContent = message;
}

/**
 *  1. Noteikt uzvaras gadījumu un paziņot kas ir uzvarējis.
 * 
 *  2. 
 * 
 *  3. 
 *  - noteikt uzvaras gadījumu
 *  
 *  - paziņot kas ir uzvarējis
 *      showMessage(symbol + ' has won the game!');
 */
