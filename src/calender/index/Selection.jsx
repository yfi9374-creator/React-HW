// קומפוננטה לבחירה מתוך רשימה - תלוי במה שנשלח
export const Selection = ({ arr, set, text, inside }) => {
    return <>
        <label>{text}</label>
        <select onChange={(e) => set(e.target.value)} defaultValue="">
            <option value="" disabled>{text}</option>
            {arr.map((x, i) => <option key={i} value={inside === '' ? x : x[inside]}>{inside === '' ? x : x[inside]}</option>)}
        </select>
    </>
}