import ShowMonthYear from "./js/ShowMonthYear.js";
import SumDayArray from "./js/SumDayArray.js";
import ToggleMonth from "./js/ToggleMonth.js";
import RenderViewTBody from "./js/RenderViewTBody.js";
/**
 * 确认当前年、月、日和初始化日的数组
 * 确认31天的月份和30天的月份以及2月分的天数
 *
 * 获取当前月1号是星期几
 *  判断上个月多少天，向上导读哦少天；判断这个月多少天，重新循环多少天
 *
 * 扩展功能：上个月，下个月，
 *
 * */
let confirmNowData = new Date(),arr=[];

/**
 * object.el 传入document获取到的对象
 */
export default class {

    constructor(object) {
        /*在页面显示年份和月份*/
        arr = SumDayArray(confirmNowData.getFullYear(),confirmNowData.getMonth(),arr);
        // console.log(object.el);
        let theBinCalculator = object.el.firstElementChild;
        // console.log(theBinCalculator.children);
        if(theBinCalculator.className==='the-bin-calculator'){
            for (let child of theBinCalculator.children) {
                switch (child.className) {
                    case 'the-bin-calculator-thead':
                        (function () {
                            let htmlTableRowElement = document.createElement('tr');
                            let th1 = document.createElement('th');
                            let th2 = document.createElement('th');
                            th2.colSpan=5;
                            th2.innerHTML=` <tr><th colspan="5"><span id="showYear">年份</span> 年 <span id="showMonth">月份</span> 月( <span id="enMonth">enMonth</span> )</th></tr>`
                            let th3 = document.createElement('th');

                            let previousMonth = document.createElement('button');
                            previousMonth.classList.add('the-bin-previous-month');
                            previousMonth.innerText='上一个月';

                            th1.append(previousMonth);

                            let nextMonth = document.createElement('button');
                            nextMonth.classList.add('the-bin-next-month');
                            nextMonth.innerText='下一个月';
                            th3.append(nextMonth);

                            htmlTableRowElement.append(th1);
                            htmlTableRowElement.append(th2);
                            htmlTableRowElement.append(th3);
                            child.append(htmlTableRowElement);

                        })();
                        child.innerHTML+=`<tr> <th>周一(Monday)</th> <th>周二(Tuesday)</th> <th>周三(Wednesday)</th> <th>周四(Thursday)</th> <th>周五(Friday)</th> <th>周六(Saturday)</th> <th>周日(Sunday)</th> </tr>`;

                        /**上一个月*/
                        child.querySelectorAll('.the-bin-previous-month').forEach(item=>{
                            item.addEventListener('click',function () {
                                ToggleMonth(this,arr,confirmNowData,true,child.nextElementSibling)
                            })
                        });
                        /** 下一个月*/
                        child.querySelectorAll('.the-bin-next-month').forEach(item=>{
                            item.addEventListener('click',function () {
                                ToggleMonth(this,arr,confirmNowData,false,child.nextElementSibling)
                            })
                        })
                        ShowMonthYear(confirmNowData,child);
                        break;
                    case 'the-bin-calculator-tbody':
                        /*加载中部*/
                        RenderViewTBody(child,confirmNowData,arr);
                        break;
                    case 'the-bin-calculator-tfoot':
                        /* 所以tfoot加载今天按钮*/
                        child.innerHTML='';
                        child.innerHTML=`<tr><td colspan="7"><button onclick="console.log(new Date().toLocaleDateString());">今天</button></td></tr>`;
                        break;
                }
            }

        }





    }
}
