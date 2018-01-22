/*Created by l on 2017/10/28.*/
    // var a = 5;
    // var b = 'abc';
    // var c = "vbn";
    // var d=6,e=7,f=8;
    //
    // console.log(a);
    // console.log(b,'zxc');
    // document.write(b+'zxc'+'<br>');
    // var c ='123456asd';
    // document.write(c);
    //
    // var x;
    // console.log(x);
    // var y=null;
    // console.log(y);

    // var s1='Hello,';
    // s1=s1+'world!';
    // alert(s1);

    // var q=12;
    // var w=30;
    // var r=q+w;
    // alert(r);

    // var p=12;
    // p++;
    // alert(p++);
    // alert(++p);

    // c-=3 = c=c-3;
    // c*=3 = c=c*3;
    // c/=3 = c=c/3;

    // var g=1;
    // var j='abc';
    // var l=g+j;
    // alert(typeof l);

    // alert("23+45="+(23+45));

    // alert(4>5);
    // console.log(2<3&&console.log("hahah"));
    // console.log(2>3||alert("haha"));
    // var t=true;
    // console.log(!t);

    // var u='123';
    // console.log(!u);
    //非空的字符串 非0的数字 都为true

    // var u='abc';
    // if(u){ //判断a是否是一个有效值
    //     console.log("真");
    // }else{
    //     console.log("假");
    // }

    // var u='abc';
    // if(u == true){
    //     console.log("真");
    // }else{
    //     console.log("假");
    // }
    //
    // if (a == ''){
    //     console.log("a是abc");
    // }

    // 0/0
    // NaN;
    // 8/0
    // Infinity;

    // var a=123;
    // var b="abc";
    // var c='123';
    // console.log(a*b);//NaN not a number
    // console.log(a*c);//
    // console.log(a+c);//

    // var str = prompt("请输入数字","123");
    // console.log(str);

    // var age = window.prompt("请输入您的年龄","18");
    // var livesecond = age*12*30*24*60*60;
    // document.write(livesecond);
    //
    // var condition="abc";
    // var val=condition?"true":"false";

    // var condition=prompt('请输入数字');//字符串1
    //condition=1;
    // switch(condition){
    //     case 4:
    //         alert();
    //         break;
    //     case 3:
    //         alert();
    //         break;
    //     case 2:
    //         alert();
    //         break;
    //     default:
    //         alert();
    // }
    //  === 要求类型也一样

    // var i;
    // for (i=0;i<10;i++){
    //     console.log(i);
    // }

    //  var j=5;
    //  while (j<10){
    //      console.log(j);
    //      j++;
    //  }

    // var j=0;
    // do{
    //     j++;
    //     console.log(j);
    // }while (j<10);

    // parseInt('0')==>0 parseInt('')==>NaN parseInt('  ')==>NaN

    // var num = window.prompt("请输入XXX的成绩！","");
    // num1 = num*1;
    // if(num1 == 0){
    //     num1 = parseInt(num);
    // }
    // if(isNaN(num1)){
    //     alert("您输入的不是一个数字！");
    // }else {
    //     if (num < 0 || num > 100) {
    //         alert("非法数字！");
    //     } else {
    //         if (num <= 100 && num >= 90) {
    //             alert("Excellent!");
    //         } else {
    //             if (num < 90 && num >= 80) {
    //                 alert("Good!");
    //             } else {
    //                 if (num < 80 && num >= 70) {
    //                     alert("So so!");
    //                 } else {
    //                     if (num < 70 && num >= 60) {
    //                         alert("Be careful !!!");
    //                     } else {
    //                         if (num < 60 && num >= 0) {
    //                             alert("Oh,NO!");
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // function add(a,b) {
    //     return a+b;
    // }
    //
    // var x = add(3,4);
    // console.log(x);

    // var a;
    // function bb() {
    //     a=5;
    //     console.log(a+"aaa");
    // }
    // bb();
    // console.log(a+"bbb");

    // console.log(Math.ceil(1.89));
    // console.log(Math.pow(2,3));
    // console.log(Math.random());
    // console.log(Math.ceil(Math.random()*100));

    // var date = new Date();
    // date.setDate(10);
    // console.log(date.getMonth()+1);//月份从零开始
    // console.log(date.getDate());

    // var date = new Date();
    // date.setDate(32);
    // console.log(date.getMonth()+1);
    // console.log(date.getDate());

    // var arr = new Array(1,2,3,4);//"a"
    // arr[0] = 1;
    // arr[1] = 2;
    // arr.length = 6;
    // console.log(arr);
    //arr[0]

    // var arr1 = ['a','b'];
    // console.log(arr1.length);
    // for (var i=0;i<arr1.length;i++) {
    //     console.log(arr1[i]);
    // }
    //
    // arr1 = ['a','b','c'];//直接量
    //
    // arr1.push(6);//添加到队尾
    //arr1.pop();//删除并返回最后一个元素

    // var arr2 = [1,2,3,4];
    // var str = arr2.join('-');
    // console.log(str);

    // var cat = new Object();
    // cat.name = 'mini';
    // cat.age = 4;
    // cat.eat = function () {
    //     console.log('chi');
    // }
    // cat.eat();
    // console.log(cat.name);
    //
    // var person = {
    //     name:"zhangsan",
    //     age:"19",
    //     eat:function () {
    //         console.log('aaaa');
    //     }
    // }
    //
    // console.log(person.name);
    // person.eat();
    // var arr = [1,2,3];
    //
    // console.log(typeof person);

    // var a=5;
    // var b=a;
    //
    // a=30;
    // console.log(b);
    //
    // var person={
    //     name:'zhangsan',
    //     age:20
    // }
    // var person1=person;
    // person.name='lisi';
    // console.log(person1.name); //栈、堆引用，地址不变

    // function bb1() {
    //     var a=5;
    //     return a;
    // }
    //
    // console.log(bb1()+"bbb");
    //
    // aa();
    // function aa() {
    //     console.log("haha");
    // }
    //
    // var bb = function () {
    //     console.log("hehe");
    // }
    // bb();

    // aa(1,2,3);
    // function aa(a,b) {
    //     arguments[0]="xxx";
    //     // a = "b";
    //     console.log(arguments[0]);
    //     console.log(a+","+b);
    // }

    // var a = new Array();
    // a = [1,2,3,3,3,4];
    // console.log(a);

    // var x = Math.random()*10,
    //     y = Math.random()*10;
    // var max = x>y?x:y;
    // console.log("x="+x+"y="+y+"max="+max);

    // var today = new Date();
    // var year = today.getFullYear();
    // if((year%4==0 && !year%100==0)||year%400==0)
    //     console.log("year:"+year+"is");
    // else console.log("year:"+year+"no");

    // var age;
    // age = prompt("你的年龄","18");
    // if(age<0 || age>100)
    //     alert("wrong age");
    // else if (age<14)
    //     console.log("儿童");
    // else if (age>=14 && age<24)
    //     console.log("青少年");
    // else if (age>=24 && age<40)
    //     console.log("青年");
    // else if (age>=40 && age<60)
    //     console.log("中年");
    // else if (age>=60)
    //     console.log("老年");

    // var day = parseInt(prompt("请输入星期几"));
    // switch (day){
    //     case 1:
    //         console.log("星期一");
    //         break;
    //     case 2:
    //         console.log("星期二");
    //         break;
    //     case 3:
    //         console.log("星期三");
    //         break;
    //     case 4:
    //         console.log("星期四");
    //         break;
    //     case 5:
    //         console.log("星期五");
    //         break;
    //     case 6:
    //         console.log("星期六");
    //         break;
    //     case 0:
    //         console.log("星期日");
    //         break;
    // }

    // var n = parseInt(prompt("请输入一个正整数","1"));
    // function fac(n) {
    //     if(n == 1) return 1;
    //     else return n * fac(n-1);
    // }
    // console.log(fac(n));

    // function fac1(n) {
    //     var sum=1;
    //     for(var i=1;i<=n;i++){
    //         sum*=i;
    //     }
    //     return sum;
    // }


    // var n = parseInt(prompt("请输入一个正整数","1"));
    // var i,sum=0;
    // function fac(n)
    // {
    //     if(n == 1) return 1;
    //     else return n * fac(n-1);
    // }
    // for(i=1;i<=n;i++)
    // {
    //     sum+=fac(i);
    // }
    // console.log(fac(n));
    // console.log(sum);

    // var n = parseInt(prompt("请输入一个正整数","1"));
    // for(var i=1;i<=n;i++){
    //     for(var j=1;j<=i;j++){
    //         document.write(j+"&nbsp");
    //     }
    //     document.write("<br/>");
    // }

    // var n = parseInt(prompt("请输入一个正整数","1"));
    // for(var i=1;i<=n;i++){
    //     for(var k=1;k<=n-i;k++){
    //         document.write("&nbsp");
    //     }
    //     for(var j=1;j<=i;j++){
    //         document.write("*");
    //         document.write("&nbsp");
    //     }
    //     document.write("<br/>");
    // }
    // for(i=1;i<=n;i++) {
    //     for (var o = 1; o <= i; o++) {
    //         document.write("&nbsp");
    //     }
    //     for (var l = 1; l <= n-i; l++) {
    //         document.write("*");
    //         document.write("&nbsp");
    //     }
    //     document.write("<br/>");
    // }

    // var n,nb=0;
    // for (n=100;n<1000;n++){
    //     if(n%4==2 && n%7==3 && n%9==5) {
    //         nb++;
    //         document.write(n + "<br/>");
    //     }
    // }
    // document.write("共有" + nb + "个数");

    // var n;
    // for (n=1000;n<10000;n++){
    //     if(n%13==0){
    //         var a = Math.floor(n / 1000);
    //         n = n % 1000;
    //         var b = Math.floor(n / 100);
    //         n = n % 100;
    //         var c = Math.floor(n / 10);
    //         var e = b + c;
    //         if (a == e) {
    //             document.write(n + "<br/>");
    //         }
    //     }
    // }

    // var nb=0;
    // for (var i=1000;i<=9999;i++){
    //     if(i%13==0 && Math.floor(i/1000) == (Math.floor(i%1000/100)+Math.floor(i%100/10))) {
    //         document.write(i+"&nbsp");
    //         nb++;
    //         if(nb%10==0){
    //             document.write("<br/>");
    //         }
    //     }
    // }
    // document.write("<br/>");
    // document.write("共有"+nb+"个数");

    // var x=prompt("请输入一个数","1");
    // var y=4*x*x+3*x+2;
    // document.write(y);

    // var x=prompt("请输入X","1");
    // var y=prompt("请输入Y","1");
    // function min(x,y){
    //     document.write(x>y?x:y);
    // }
    // min(x,y);

    // var num;
    // function aa(num) {
    //     if (num>=0 && (parseInt(num) == num) && num%5==0 && num%7==0 && num%3==0){
    //         return true;
    //     }
    //     return false;
    //     // return (num>=0 && (parseInt(num) == num) && num%5==0 && num%7==0 && num%3==0);
    // }
    // var count=0;
    // for (var i=1;i<=1000;i++){
    //     if (aa(i)){
    //         count++;
    //         document.write(i+"&nbsp");
    //
    //         if (count%6==0){
    //             document.write("<br/>");
    //         }
    //     }
    // }

    // var count=0;
    // function su(n) {
    //     if(n%2!==0 && n%3!==0 && n%5!==0 && n%7!==0){
    //         return n;
    //     }
    //     return false;
    // }
    // for (var i=100;i<=1000;i++){
    //     if(su(i)){
    //         count++;
    //         document.write(su(i)+"&nbsp");
    //
    //         if (count%10==0){
    //             document.write("<br/>");
    //         }
    //     }
    // }
    // document.write("<br/>");
    // document.write("共有"+count+"个素数");

    // var count=0;
    // function sushu(num) {
    //     for(var j=2;j<num;j++){
    //         if (num%j==0){
    //             return false;
    //         }
    //     }
    //     return num;
    // }
    // //     function sushu(num) {
    // //         for(var j=2;j<=Math.sqrt(num);j++){
    // //             if (num%j==0){
    // //                 return false;
    // //             }
    // //         }
    // //         return num;
    // //     }
    // for (var i=100;i<=1000;i++){
    //     if(sushu(i)){
    //         count++;
    //         document.write(sushu(i)+"&nbsp");
    //
    //         if (count%10==0){
    //             document.write("<br/>");
    //         }
    //     }
    // }
    // document.write("<br/>");
    // document.write("共有"+count+"个素数");

    // var a=parseInt(prompt("请输入一个较大的数","1"));
    // var b=parseInt(prompt("请输入一个较小的数","1"));
    // function jc(n) {
    //     var num=1;
    //     for (var i=1;i<=n;i++){
    //         num*=i;
    //     }
    //     return num;
    // }
    // function factorial(a,b) {
    //     if(a<0||b<0||a<b){
    //         return false;
    //     }
    //     else {
    //         return jc(a)-jc(b);
    //     }
    // }
    // document.write(factorial(a,b));

    // var n = parseInt(prompt("请输入一个正整数","1"));
    // for(var i=1;i<=n;i++){
    //     for(var k=1;k<=n-i;k++){
    //         document.write("&nbsp");
    //     }
    //     for(var j=1;j<=i;j++){
    //         document.write("*");
    //         document.write("&nbsp");
    //     }
    //     document.write("<br/>");
    // }

    // function Fib(n) {
    //     if(n<=2){
    //         return 1;
    //     }
    //     return Fib(n-1)+Fib(n-2);
    //     // return arguments.callee(n-1)+arguments.callee(n-2);
    // }
    // document.write(Fib(6));
    // function Fib1(n) {
    //     if(n<=2){
    //         return 1;
    //     }
    //     else {
    //         var arr=[1,1];
    //         for (var i=2;i<n;i++){
    //             arr[i]=arr[i-1]+arr[i-2];
    //         }
    //         return arr[n-1];
    //
    //         // var f1=1,f2=1,temp;
    //         // for (var i=3;i<=n;i++){
    //         //     temp=f1+f2;
    //         //     f1=f2;
    //         //     f2=temp;
    //         // }
    //         // return temp;
    //     }
    // }
    // document.write(Fib1(6));

    // function pi(n) {
    //     var sum=0;
    //     for(var i=1;i<=n;i++){
    //         sum += Math.pow(-1,(i-1))/(2*i-1);
    //     }
    //     return sum*4;
    // }
    // document.write(pi(10000));
    // function pi(n) {
    //     var sum=1,a,b=-1;
    //     for(var i=2;i<=n;i++){
    //         a=1/(2*i-1);
    //         if(i%2==0) {
    //             a=a*b;
    //         }
    //         sum+=a;
    //     }
    //     return sum*4;
    // }
    // document.write(pi(10000));

    // var x,y,z,win,isContinue=true,count=0,wNum=0;
    // function game(){
    //     x=Math.floor(Math.random()*9)+1;
    //     y=Math.floor(Math.random()*9)+1;
    //     z=Math.floor(Math.random()*9)+1;
    //     count++;
    //     if(x==8 || y==8 || z==8){
    //         win="赢";
    //         wNum++;
    //     }else {
    //         win="输";
    //     }
    // }
    // while (isContinue) {
    //     game();
    //     isContinue=confirm(x + " " + y + " " + z + "\n" + win + "\n" + "获胜率是" + wNum/count*100 + "%");
    // }

    // var x=prompt("请输入一个数","1");
    // var y=Math.pow(x,2);
    // var z=Math.sqrt(x);
    // var c=Math.log(x);
    // document.write("平方"+y+"平方根"+z+"自然对数"+c);

    // var x=Math.ceil(Math.random()*100);
    // document.write(x);

    var a;

    // function CollectDigits(s){
    //     var str="";
    //     for (var i=0;i<s.length;i++){
    //         if(!isNaN(s.charAt(i)*1)){
    //             str+=s.charAt(i);
    //         }
    //     }
    //     return str;
    // }
    // document.write(CollectDigits("1abc23def4"));

    // function Merge(s1,s2) {
    //     var l1=s1.length;
    //     var l2=s2.length;
    //     var length=Math.min(l1,l2);
    //     var maxStr=l1>l2?s1:s2;
    //     var str="";
    //     for (var i=0;i<length;i++){
    //         str+=(s1[i]+s2[i]);
    //     }
    //     str+=maxStr.substring(length,(maxStr.length));
    //     return str;
    // }
    // document.write(Merge("123456","abc"));
    // function Merge1(s1,s2) {
    //     var str="";
    //     var length=Math.max(s1.length,s2.length);
    //     for(var i=0;i<length;i++){
    //         if(s1.length>i){
    //             str += s1[i];
    //         }
    //         if(s2.length>i){
    //             str += s2[i];
    //         }
    //     }
    //     return str;
    // }
    // document.write(Merge1("123456","abc"));

    // var arr=new Array(7),sum=0,ave,str="";
    // for (var i=0;i<arr.length;i++){
    //     arr[i] =parseInt(prompt("请输入一门成绩","100"));
    //     sum+=(arr[i]);
    //     if(arr[i]<60){
    //         str+=(arr[i]+"&nbsp");
    //     }
    // }
    // ave=sum/7;
    // document.write(sum+"<br/>"+ave+"<br/>"+str);
    // var num=1,isContinue=true;
    // var sum=0,average;
    // var arr=[];
    // var str="";
    // while(num<8 && isContinue!=null){
    //     isContinue = prompt("请输入第"+num+"门成绩");
    //     arr.push(isContinue);
    //     num++;
    // }
    // for(var i=0;i<arr.length;i++){
    //     sum+=parseInt(arr[i]);
    //     if(arr[i]<60){
    //         str+=arr[i]+",";
    //     }
    // }
    // average = Math.round(sum/7);
    // // average = sum/7;
    // document.write("总成绩："+sum+"<br/>平均分："+average+"<br/>不及格成绩："+str);

    // var count=0;
    // function Fib(n) {
    //     if(n<=2){
    //         return 1;
    //     }
    //     return Fib(n-1)+Fib(n-2);
    //     // return arguments.callee(n-1)+arguments.callee(n-2);
    // }
    // var a=parseInt(prompt("个数","10"));
    // for (var i=a;i>=1;i--) {
    //     document.write(Fib(i)+"&nbsp");
    //     count++;
    //     if (count%6==0){
    //         document.write("<br/>");
    //     }
    // }

    // var d=new Date();
    // function DayOfYear(d){
    //     document.write(d);
    // }
    // DayOfYear(d);
    // var months=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    // function DayOfYear(year,month,day) {
    //     var result = 0;
    //     if (IsLeapYear(year)){
    //         months[1] = 29;
    //     }
    //     for (var i=0;i<month-1;i++){
    //         result+=months[i];
    //     }
    //     result+=day;
    //     return result;
    // }
    // function IsLeapYear(year) {
    //     return ((year%4==0 && year%100!=0) || year%400 == 0)
    // }
    // document.write(DayOfYear(2000,7,8));



