let currplayer="X";
let arr = Array(9).fill(null);

function checkwinner(){
    if(
        (arr[0]!=null && arr[0]==arr[1] && arr[1]==arr[2]) ||
        (arr[3]!=null && arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6]!=null && arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]!=null && arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[1]!=null && arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2]!=null && arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0]!=null && arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2]!=null && arr[2]==arr[4] && arr[4]==arr[6]) 
    ) {
        // console.log(currplayer);
        document.write(`<h1 id="result" >Winner is ${currplayer}</h1>`);
        return;
    }
    else{
        if(!arr.some(value => value ===  null)){
            document.write(`Draw !!`);
            return;
        }
    }
}

function handleclick(ele){
    const id = Number(ele.id);
    if(arr[id] !== null) return ;
    arr[id]=currplayer;
    ele.innerText = currplayer;

    checkwinner();

    currplayer = currplayer === 'X' ? 'O' : 'X';

    
}