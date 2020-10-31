import GetMonthInfo from "./GetMonthInfo.js";

/**
 * 计算数组()
 * @param confirmNowDataFullYear  全年
 * @param confirmNowDataFullMonth 全月
 * @param arr
 * */
export default function (confirmNowDataFullYear,confirmNowDataFullMonth,arr) {
    /*获取当前月份，用来判断本月一号星期几*/
    let theDate = new Date(confirmNowDataFullYear,confirmNowDataFullMonth,1);
    arr=[];
    let monthInfo = GetMonthInfo(theDate);
    /*上一个月多少天*/let theLastMonthNum = monthInfo.last.days;
    /*本月一号星期几*/let theDateDay = (()=>{
        let returnNext;
        monthInfo.current.day1week===0?
            returnNext=6 :
            returnNext=monthInfo.current.day1week;

        return returnNext;
    })();
    //本月1号之前的空
    for (let i =0;i<theDateDay-1;i++){
        arr.unshift(theLastMonthNum)
        theLastMonthNum--
    }

    //添加本月可以点击的日期
    for(let i =1;i<=monthInfo.current.days;i++){arr.push(i);}

    /**判断月末后面的补全下一个月的，但是禁止点击*/
    (()=>{
        if((arr.length % 7)!==0){
            for (let i =0,j=1,theEndDay = 7-(arr.length%7);i<theEndDay;i++,j++){
                /*从下月初开始循环，填补后面剩下的空缺*/arr.push(j);
            }
        }
    })();
    return arr;

}
