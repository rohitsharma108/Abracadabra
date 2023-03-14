const keys = ["AJMER", "AJMERI", "FARIDABAD", "FAROOKABAD", "ARAK"];
const container = document.getElementById('container')
console.log(container);
let newStr = '';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const images = [];
for (let i = 0; i < 26; i++) {
    let val = document.createElement('img')
    val.setAttribute('class', alphabet[i]);
    val.setAttribute('src', `./images/${alphabet[i]}.png`);
    container.appendChild(val)
    const image = document.getElementsByClassName(alphabet[i]);
    // console.log(image);
    val.onclick = function () {
        // console.log(val.className);
        let cl = val.className
        stringMatching(cl);


    }
    images[i] = val;

    let x;
    var k = 0;
    var st;
    var point = 0;


    function stringMatching(x) {
        newStr = newStr.concat(x);
        console.log(newStr);
        showResults(newStr);
        

       

        for (let i = 0; i < keys.length; i++) {
            
            if(newStr === keys[i])
            {
                console.log("success");
                
                point = point +1;
                if(keys.length == 1)
                {
                    container.innerHTML = '';
                    container.innerHTML = `GAME OVER <br> POINTS =${point} `
                    butn.disabled = true;
                }
                if(keys.length > 1){
                setTimeout(function(){
                    alert("yeah!! you earned a point"); 
               }, 300);
            }
            }

            st = keys[i];
            // let match = document.getElementsByClassName
            if (st[k] !== x) {
                // console.log(keys);
                keys.splice(i, 1);
                i = i - 1;
            }


        }
        if(keys.length == 0){
            alert("no match found");
            location.reload();
        }

        distinctElement();
        console.log(keys);
        for(let i =0; i<newStr.length;i++){
    
            
            if(mapped.get(newStr[i]).value < 1){
                mapped.delete(newStr[i]);
            }
            else{
                mapped.get(newStr[i]).value=mapped.get(newStr[i]).value - keys.length;
                if( mapped.get(newStr[i]).value <1)
                {
                    mapped.delete(newStr[i]);
                }
            }
        
    }
        k = k + 1;



    }
}
var xa;
let mapped = new Map();
function distinctElement() {
    mapped = new Map();
    for (let i = 0; i < keys.length; i++) {
        xa = keys[i];
        for (let ja = 0; ja < xa.length; ja++) {
            if (mapped.has(xa[ja]) == false) {
                mapped.set(xa[ja], {value:1});
            }
            else{
                mapped.get(xa[ja]).value++;
            }
        }
    }
}

var butn = document.getElementById('btn');
butn.onclick = function () {
    if(mapped.size != 0){
    container.removeChild(container.childNodes[0]);
    let ki = 0;

    for (let i = 0; i < alphabet.length; i++) {

        if (mapped.has(alphabet[i]) == false) {
           
            container.removeChild(container.childNodes[ki]);
        }
        else {
            ki = ki + 1;
        }
    }
    const button = document.querySelector('button');
    button.disabled = true;
}
}

var repBtn = document.getElementById(rep);
rep.onclick = function replay() {
    location.reload();

}
let mi
let result = document.getElementById('result');
function showResults(mi){
    result.innerHTML = '';
    for(let ii=0; ii<mi.length; ii++){
        let vali = document.createElement('img')
        vali.setAttribute('class', mi[ii]);
        // console.log()
        vali.setAttribute('src', `./images/${mi[ii]}.png`);
        result.appendChild(vali)
    }

}
function timer() {
    var seconds = 30;
var el = document.getElementById('seconds-counter');
var minutes=1;

function incrementSeconds() {
    seconds=seconds- 1;
    if(seconds<10)
    {
    el.innerHTML = ` 0${minutes} : 0${seconds}`
    }
    else{
        el.innerHTML = ` 0${minutes} : ${seconds}`

    }
    if(seconds==0){
     minutes--;
        seconds=60;
    }
    if(minutes<0)
    {
        clearInterval(cancel);
    }

}

var cancel = setInterval(incrementSeconds, 1000);
}
timer();






