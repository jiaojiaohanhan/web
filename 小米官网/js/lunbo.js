/**
 * Created by l on 2017/11/16.
 */
var oContainer = document.getElementById("right-zone");
var oBox = document.getElementById("img-box");
var aImg = oBox.getElementsByTagName("a");
var oBtn = document.getElementById("btns");
var aLi = oBtn.getElementsByTagName("li");
var oSp1 = document.getElementById("prev-btn");
var oSp2 = document.getElementById("next-btn");
var oMiui = document.getElementById("miui");
var oMiDiv1 = oMiui.getElementsByTagName("div")[0];
var oMiDiv2 = oMiui.getElementsByTagName("div")[1];
var aMi1 = oMiDiv1.getElementsByTagName("li");
var aMi2 = oMiDiv2.getElementsByTagName("li");
var iNow = 0;
var timer;
for (var i=0;i<aLi.length;i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        iNow = this.index;
        for (var j=0; j<aLi.length;j++) {
            aLi[j].className = "";
            aImg[j].className ="";
        }
        this.className = "selected";
        aImg[this.index].className = "selected";
    }
}
oSp1.onclick = function () {
    iNow--;
    // console.log(iNow);
    if(iNow < 0){
        iNow = aImg.length-1;
    }
    for (var j=0;j<aLi.length;j++){
        aLi[j].className = "";
        aImg[j].className = "";
    }
    aLi[iNow].className = "selected";
    aImg[iNow].className = "selected";
}
oSp2.onclick = function () {
    iNow++;
    // console.log(iNow);
    if (iNow >= aImg.length) {
        iNow = 0;
    }
    for (var j = 0; j < aLi.length; j++) {
        aLi[j].className = "";
        aImg[j].className = "";
    }
    aLi[iNow].className = "selected";
    aImg[iNow].className = "selected";
}
for (var i=0;i<aMi2.length;i++){
    aMi2[i].index = i;
    aMi2[i].onmouseover = function () {
        for (var j=0; j<aMi2.length;j++) {
            aMi2[j].className ="";
            aMi1[j].className ="";
        }
        this.className = "btn-active";
        aMi1[this.index].className = "con-carousel-active";
    }
}

run();
oContainer.onmouseover = function () {
    clearInterval(timer);
};
oContainer.onmouseout = function () {
    run();
};
function run() {
    timer = setInterval(function () {
        oSp2.onclick();
    },2000);
};
