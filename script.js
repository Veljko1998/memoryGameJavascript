var firstOpen, secondOpen, obj1, obj2, restartGame;
var possibleImgValues = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var listOfSame = [];
var count = 0;
for(var i=1; i<=16; i++) {
    document.getElementById('tile' + i).addEventListener('click', showTile);
    document.getElementsByTagName("img")[i-1].style.visibility = "hidden";
}

document.getElementsByTagName("button")[0].addEventListener('click', restartGame);

/*var temp = possibleImgValues[Math.floor(Math.random()*possibleImgValues.length)];
console.log(temp);
console.log(possibleImgValues);
possibleImgValues.splice(possibleImgValues.indexOf(temp),1);
console.log(possibleImgValues);*/
/*
    promeni imena slika sve u ball samo stavi brojeve na kraj pa array napravi sa brojevima da random rasporedjuje slike po poljima
*/

for(var i=0; i<=15; i++) {
    var temp = possibleImgValues[Math.floor(Math.random()*possibleImgValues.length)];
    document.getElementsByTagName("img")[i].setAttribute("src", "images/ball" + temp + ".jpg")
    possibleImgValues.splice(possibleImgValues.indexOf(temp),1);
}


function showTile() {
    if(count == 2) {
        closeTiles();
        count = 0;
    }
    if(this.childNodes[1].style.visibility === "hidden") {
        this.childNodes[1].style.visibility = "visible";
        if(firstOpen == undefined) {
            firstOpen = this.childNodes[1].getAttribute("src");
            obj1 = this.firstElementChild;
        }
        else {
            secondOpen = this.childNodes[1].getAttribute("src");
            obj2 = this.firstElementChild;
        }
        count++;
    }
}
function closeTiles() {
    if (firstOpen == secondOpen) {
        obj1.removeEventListener('click', showTile);
        obj2.removeEventListener('click', showTile);
        listOfSame.push(obj1);
        listOfSame.push(obj2);
    }
    else {
        for(var i=0; i<=15; i++) {
            if(listOfSame.indexOf(document.getElementsByTagName("img")[i]) == -1) {
                document.getElementsByTagName("img")[i].style.visibility = "hidden";
            }
        }
    }
    firstOpen = undefined;
    secondOpen = undefined;
}

function restartGame() {
    obj1 = undefined;
    obj2 = undefined;
    firstOpen = undefined;
    secondOpen = undefined;
    count = 0;
    possibleImgValues = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    for(var i=1; i<=16; i++) {
        document.getElementById('tile' + i).addEventListener('click', showTile);
        document.getElementsByTagName("img")[i-1].style.visibility = "hidden";
        var temp = possibleImgValues[Math.floor(Math.random()*possibleImgValues.length)];
        document.getElementsByTagName("img")[i-1].setAttribute("src", "images/ball" + temp + ".jpg")
        possibleImgValues.splice(possibleImgValues.indexOf(temp),1);
    }
    listOfSame.length = 0;
}













