/**
 * Created by l on 2017/11/17.
 */
var oIco1 = document.getElementById("left1");
var oIco2 = document.getElementById("right1");
var oUl1 = document.getElementById("left2");
var oUl2 = document.getElementById("right2");
var oTab = document.getElementById("tab-btns");
var aTaLi = oTab.getElementsByTagName("li");
var oBd = document.getElementById("box-bd-right");
var aBd = oBd.getElementsByTagName("ul");
oIco1.onmouseover = function () {
    oIco2.className = "iconfont icon-back";
    oIco1.className = "iconfont icon-back icon-active";
}
oIco2.onmouseover = function () {
    oIco1.className = "iconfont icon-back";
    oIco2.className = "iconfont icon-back icon-active";
}
oIco1.onclick = function () {
    oUl1.style.display = "block";
    oUl2.style.display = "none";
}
oIco2.onclick = function () {
    oUl2.style.display = "block";
    oUl1.style.display = "none";
}
for(var i=0;i<aTaLi.length;i++){
    aTaLi[i].index = i;
    aTaLi[i].onmouseover = function () {
        for (var j=0;j<aTaLi.length;j++){
            aTaLi[j].className = "";
            aBd[j].className = "";
        }
        this.className = "active";
        aBd[this.index].className = "box-active";
    }
}