/**
 * Created by apple on 17/12/10.
 */
define(function(){
    function isArray(arr){
        return (arr instanceof Array && arr.constructor == Array);//constructor 返回构造函数 instanceof 返回是否是构造函数的实例
    }
    return isArray;
});