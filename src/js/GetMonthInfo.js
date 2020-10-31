/**
 * 返回内容 月份统一下标
 * 当前月和当前月天数
 * 上个月和上个月天数
 *
 *
 * *
 **
 *
 * @param theDate 传入时间
 * @return {{current: {month: *, days: *, day1week}, last: {month: number, days: number}}}
 */
export default function (theDate) {
    /*上一个月的月份和天数*/let lastMonth,lastMonthDays;
    /*本月月份和天数*/     let currentMonth,currentMonthDays;

    //完成月份
    lastMonth = theDate.getMonth()-1;
    currentMonth = theDate.getMonth();


    /*
    * 本月是几月，2月判断元年闰年 然后判断28天和29天
    * 否则按照判断设置当月31号有没有，否则判断30有没有。
    * */
    switch (theDate.getMonth()){
        case 0:
            lastMonthDays=currentMonthDays=31;
            break;
        case 1:
            lastMonthDays=31;
            new Date(theDate.getFullYear(),1, 29).toLocaleString().split(' ')[0]=== theDate.getFullYear() + '/2/29'?
                currentMonthDays=29
                : currentMonthDays=28;

            break;
        case 2:
            new Date(theDate.getFullYear(),1, 29).toLocaleString().split(' ')[0]=== theDate.getFullYear() + '/2/29'?
                lastMonthDays=29
                : lastMonthDays=28;

            currentMonthDays=31;
            break;
        case 3:
            lastMonthDays=31;currentMonthDays=30;
            break;
        case 4:
            lastMonthDays=30;currentMonthDays=31;
            break;
        case 5:
            lastMonthDays=31;currentMonthDays=30;
            break;
        case 6:
            lastMonthDays=30;currentMonthDays=31;
            break;
        case 7:
            lastMonthDays=currentMonthDays=31;
            break;
        case 8:
            lastMonthDays=31;currentMonthDays=30;
            break;
        case 9:
            lastMonthDays=30;currentMonthDays=31;
            break;
        case 10:
            lastMonthDays=31;currentMonthDays=30;
            break;
        case 11:
            lastMonthDays=30;currentMonthDays=31;
            break;
    }

    return {
        last:{
            month:lastMonth,
            days:lastMonthDays
        },
        current:{
            month:currentMonth,
            days:currentMonthDays,
            day1week:(()=>{
                /*本月第一号星期几*/theDate.setDate(1);
                let returnDay = theDate.getDay();
                console.log(`返回的本月1号星期几：${theDate.getDay()}`);
                returnDay===0? returnDay=7:null;
                return returnDay
            })()
        }
    };
}
