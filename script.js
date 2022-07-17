//for rows
var T = []
var M = []
var B = []

//for columns
var L = []
var C = []
var R = []

//for main diagonal 
var D = []

//for off diagonal
var OD = []

function clear() {
    T = []
    M = []
    B = []

    L = []
    C = []
    R = []

    D = []

    OD = []
}

function checkWinner(arr) {
    var len = arr.length;
    var bool = true;
    // if(len < 3)
    if(len === 3){
        for(let i = 0; i < len; i++) {
            var c = arr[0]
            if(arr[i] != c) {
                bool = false;
            }
        }
        return bool;
    }else return false;
}

function declare(arr) {
    var bool = checkWinner(arr);
    var winner = document.querySelector('.result');
    if(bool){
        winner.innerHTML = arr[0] + ' is the winner!!'
        return true;
    }else {
        winner.innerHTML =  'Last played:' + arr[arr.length-1] +  '<br>Game in process...'
        return false;
    }
}



var c = true
function counter() {
    // var turn = document.querySelector('.turn').innerHTML;
    if(c) {
        c = false
        return 'X' 
    }else {
        c = true
        return 'O'
    }
}

addEvent = () => {
    var divs = document.querySelectorAll('.container div');
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];

        element.addEventListener('click', function() {
            if(this.innerHTML.length == 0)
            {
                var result =  counter();
                this.innerHTML = result;
                // this.style.cursor = 'disabled'
                var cList =  this.classList.value.split(' ');
                console.log(cList)
                for(let i = 0; i<cList.length; i++)  {
                    switch(cList[i]){
                        case 't':   T.push(result);console.log('pushed to T');
                                    var r = declare(T)
                                    break;
                        case 'm':   M.push(result);console.log('pushed to M');
                                    var r = declare(M)
                                    break;
                        case 'b':   B.push(result);console.log('pushed to B');
                                    var r = declare(B)
                                    break;
                        case 'l':   L.push(result);console.log('pushed to L');
                                    var r = declare(L)
                                    break;
                        case 'c':   C.push(result);console.log('pushed to C');
                                    var r = declare(C)
                                    break;
                        case 'r':   R.push(result);console.log('pushed to R');
                                    var r = declare(R)
                                    break;
                        case 'd':   D.push(result);console.log('pushed to D');
                                    var r = declare(D)
                                    break;
                        case 'od':  OD.push(result);console.log('pushed to OD');
                                    var r = declare(OD)
                                    break;
                        default:    break;  
                    }
                    if(r){
                        clear(); 
                        document.querySelectorAll('.container div').forEach(element => {
                            element.style.background =  '#fff'
                        });
                        document.querySelector('.result').innerHTML += '<br><br><button>Play Again</button>';
                        document.querySelector('body').style.background =  '#019867';
                        document.querySelector('button').onclick = function(){location.reload()}
                        break;
                    }
                }
            }
        })   
    }
}

addEvent();