const width = 4
const height = 4
const size = 300 / width

const board = []
const cellElementsList = []
for (let y = 0; y < height; y++) {
    // ここをいつも脳死で描いてるので，一回エラー出させたい
    // 各行ごとに初期化が必要だということ
    board[y] = []
    cellElementsList[y] = []
    for (let x = 0; x < width; x++) {
        // スライドパズルは自分の周りを検索したり（多分）しないので，番兵は不要っぽい？？
        board[y][x] = y * width + x + 1
        cellElementsList[y][x] = null
        if (y === 3 && x === 3) {
            board[y][x] = null
        }
    }
}

const init = () => {
    // 今回は container を作らないらしい？？
    // まあ一回それでやってみるか
    //const contanier = document.createElement('div')
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const div = document.createElement('div')
            document.body.appendChild(div)
            Object.assign(div.style, {
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                top: `${size * y}px`,
                left: `${size * x}px`,
                backgroundColor: `#a66`,
                border: `solid #844 2px`,
                fontSize: `${size*0.5}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            })
            cellElementsList[y][x] = div
            //div.textContent = board[y][x]
        }
    }
}

const showBoard = () => {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            cell = cellElementsList[y][x]
            console.log(cell);
            cell.textContent = board[y][x] || ""
        }
    }
}

window.onload = () => {
    init()
    showBoard()
}