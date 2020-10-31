/**点击日历选项，获取选中的日期格式：（年/月/日）*/
export default function getNowData(e,confirmNowData) {
    console.log(e);
    confirmNowData.setDate(e.innerText)
    console.log(`点击日历选项，获取选中的日期格式${confirmNowData.toLocaleDateString()}`);
}
