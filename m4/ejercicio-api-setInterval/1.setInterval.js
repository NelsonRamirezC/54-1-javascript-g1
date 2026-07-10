let contador = 0;
const intervalID = setInterval(() => {
    console.log(contador++);

    if(contador == 11){
        clearInterval(intervalID);
    }
}, 2000);
