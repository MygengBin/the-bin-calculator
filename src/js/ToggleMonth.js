import SumDayArray from "./SumDayArray.js";
import ShowMonthYear from "./ShowMonthYear.js";
import RenderViewTBody from "./RenderViewTBody.js";

/**
 * 切换月
 * @param theThis
 * @param arr 数组
 * @param confirmNowData 时间
 * @param direction 上1 true，false下1
 * @param element 添加渲染的具体元素
 */
export default function(theThis,arr,confirmNowData,direction,element) {
    direction?
        confirmNowData.setMonth(confirmNowData.getMonth()-1)
        :confirmNowData.setMonth(confirmNowData.getMonth()+1)

    arr = SumDayArray(confirmNowData.getFullYear(),confirmNowData.getMonth(),arr);

    ShowMonthYear(confirmNowData,element.previousElementSibling)

    element.innerHTML='';
    RenderViewTBody(element,confirmNowData,arr)

}
