import { useState } from "react"
import { Selection } from "./selection"

// ארועים
export const Events = ({ details, setDetails }) => {

    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [icon, setIcon] = useState()
    const months = details.calendar.months
    const days = months.find(obj => obj.name === month)?.days;
    const icons = ['💍 חתונה', '🎂 יום הולדת', 'בר מצווה 🎩', 'מסיבה 🎉', 'ברית 🍼', 'אחר']

    let list = JSON.parse(localStorage.getItem('saveCalender'))
    
    // בעת שמירת הארועים
    const submit = (e) => {

        e.preventDefault();

        const eventD = { type: e.target[2].value, text: e.target[3].value }
        let d = details.calendar.months.find(x => x.name === month).days.find(x => x.name === day)
        if (d.events.length !== 3) {
            d.events = [...d.events, eventD]
            let i = 0;
            for (; i < list.length && list[i].cName !== details.cName; i++);
            list[i] = details
            localStorage.setItem('saveCalender', JSON.stringify(list))
            setDetails({ ...details })
            alert('saved!!')
        }
        else
            alert('יש כבר 3 ארועים בתאריך זה...')
    }

    // הצגה על המסך אחד אחד
    return <>
        <form onSubmit={submit}>
            <Selection arr={months} set={setMonth} text='בחר חודש' inside='name'></Selection>
            {days && <Selection arr={days} set={setDay} text='בחר יום' inside='name'></Selection>}
            {day && <Selection arr={icons} set={setIcon} text='בחר תאריך וסמל' inside=''></Selection>}
            {icon && <><label>טקסט בנוסף:</label> <input type="text" /></>}
            {days && icon && <input type="submit" value="שמירת הארוע" />}
        </form>
    </>
}