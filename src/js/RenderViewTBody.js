/**
 * renderViewTBody 渲染到页面
 * @param element 渲染的表格元素
 * @param confirmNowData
 * @param arr
 */
export default function (element, confirmNowData, arr){

    let htmlTableRowElement = document.createElement('tr');
    for (let arrItem = 0;arrItem<arr.length;arrItem++){
        let htmlTableDataCellElement = document.createElement('td');
        let htmlButtonElement = document.createElement(`button`);
        htmlButtonElement.addEventListener('click', function () {
            console.log(this);
            confirmNowData.setDate(parseInt(this.innerText))
            console.log(`点击日历选项，获取选中的日期格式${confirmNowData.toLocaleDateString()}`);
        })
        htmlButtonElement.innerText=arr[arrItem];
        htmlTableDataCellElement.append(htmlButtonElement);
        if(arrItem%7===0){
            htmlTableRowElement = document.createElement('tr');
        }
        htmlTableRowElement.append(htmlTableDataCellElement);
        element.append(htmlTableRowElement);
    }

    /**
     * 判断第一行1左侧的变灰色 最后一行 1及以后的变 成灰色
     * */
    (()=>{
        /**开头1号前面填充的禁止点击*/
        element.firstElementChild.childNodes.forEach(item=>{
            if(item.firstElementChild.innerText>7){
                item.firstElementChild.disabled=true;
            }
        })
        /**结尾月末大于最后1天从1号开始的禁止点击*/
        element.lastElementChild.childNodes.forEach(item=>{
            if(item.firstElementChild.innerText>=1&&item.firstElementChild.innerText<=7){
                item.firstElementChild.disabled=true;
            }
        })
    })();

    /**完成1月份禁止上一个月按钮和12月禁止下一个月按钮*/
    (()=>{
        let tableHead = element.parentNode.firstElementChild;
        let theBinPreviousMonth=tableHead.querySelectorAll('.the-bin-previous-month'),
            theNextMonth=tableHead.querySelectorAll('.the-bin-next-month');

        if(element.parentNode.getElementsByClassName('the-bin-calculator-head').length>0){
            confirmNowData.getMonth()+1<=1?
                theBinPreviousMonth.forEach(item=> item.disabled=true):
                theBinPreviousMonth.forEach(item=> item.disabled=false);
            confirmNowData.getMonth()+1>=12?
                theNextMonth.forEach(item=> item.disabled=true):
                theNextMonth.forEach(item=> item.disabled=false);
        }
    })()
}
