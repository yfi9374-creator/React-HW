import { useState } from 'react'
import './indexStyle.css'

// לוח שנה
export const CalanderComp = ({ details, setDetails }) => {

    // חילוץ הפרטים
    const { cName, background, backgroundM, textColor, fontSize, font, calendar } = details
    // משתנים
    const [index, setIndex] = useState(0)
    let list = JSON.parse(localStorage.getItem('saveCalender'))
    let arr = []
    let arr1 = []
    const month = calendar.months[index]
    let count = month.days[0].dayOfWeek - 1

    // יצירה של לוחות ריקים לפני היום הראשון של החודש
    while (count > 0) {
        arr.push(<div key={`prev-${count}`} className='day empty-day' style={{ background: backgroundM }}></div>)
        count--
    }

    let count1 = 7 - month.days[month.days.length - 1].dayOfWeek

    // יצירה של לוחות ריקים אחרי היום האחרון של החודש
    while (count1 > 0) {
        arr1.push(<div key={count1} className={`day empty-day ${count1 == 1 ? 'shabbat' : ''}`} style={{ background: backgroundM }}></div>)
        count1--
    }

    // פונקציה בעת לחיצה כפולה על הארוע שימחק
    const deleteE = (day, y) => {
        let d = details.calendar.months.find(x => x.name === month.name).days.find(x => x.name === day.name)
        d.events = d.events.filter(x => x !== y)
        list[details.key] = details
        localStorage.setItem('saveCalender', JSON.stringify(list))
        setDetails({ ...details })
        alert('deleted!!')
    }

    // הצגת הלוח: קודם את הריקים ואחכ את הימים ואחכ שוב ריקים
    return <>
        <div id='cBody' style={{ backgroundColor: background }}>
            <div id='whichMonth'>
                <button onClick={() => setIndex(index - 1 < 0 ? index : index - 1) && setMonth(calendar.months[index])}>החודש הקודם</button>
                <h2 id='head'>{month.name}</h2>
                <button onClick={() => setIndex(index + 1 > 12 ? index : index + 1) && setMonth(calendar.months[index])}>החודש הבא</button>
            </div>
            <header className='week-header'>
                <div className='tytle'>ראשון</div>
                <div className='tytle'>שני</div>
                <div className='tytle'>שלישי</div>
                <div className='tytle'>רביעי</div>
                <div className='tytle'>חמישי</div>
                <div className='tytle'>שישי</div>
                <div className='tytle'>שבת</div>
            </header>
            <div className='days-grid'>
                {arr}
                {month.days.map((x, i) =>
                    <div className={`day ${x.dayOfWeek == '7' ? 'shabbat' : ''}`} key={i} style={{ background: backgroundM }}>
                        <span id='name' style={{ WebkitTextFillColor: textColor, fontSize: `${fontSize}px`, fontFamily: font }}>{x.name}</span>
                        <div className='event-container'>{(x.events.map((y, i) => <div className='event-items' key={i} onDoubleClick={() => deleteE(x, y)}>
                            <span style={{ WebkitTextFillColor: textColor, fontSize: `${fontSize}px`, fontFamily: font }}>{y.type}</span>
                            <span style={{ WebkitTextFillColor: textColor, fontSize: `${fontSize}px`, fontFamily: font }}>{y.text}</span>
                        </div>))}</div>
                    </div>)}
                {arr1}
            </div>
        </div>
    </>

}