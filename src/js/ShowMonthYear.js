/**
 * 在页面显示年份和月份
 * @param confirmNowData
 * @param element 传入的元素，头部年月显示的位置更改用于
 */
export default function showMonthYear(confirmNowData,element) {
    console.group('ShowMonthYear');
    console.log(element);
    console.groupEnd()
    element.querySelectorAll('#showYear').forEach(item=>{
        item.innerText=confirmNowData.getFullYear().toString();
    })
    element.querySelectorAll('#showMonth').forEach(item=>{
        item.innerText=(confirmNowData.getMonth()+1).toString()
    })
    let monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    element.querySelectorAll('#enMonth').forEach(item=>{
        item.innerText=monthEn[confirmNowData.getMonth()];
    })
}
