import { useState } from "react"
import { CalanderComp } from "./CalanderComp"
import { DesignProps } from "./designProps"
import { Events } from "./events"
import { Selection } from "./selection"
import { NewName } from "./NewName"

//הקומפוננטה העיקרית שתוצג על המסך
export const IndexMain = () => {

    //משתני עזר
    const calendar = JSON.parse(localStorage.getItem('calender'))
    const [details, setDetails] = useState({
        cName: 'ברירת מחדל',
        background: "#ffffff",
        backgroundM: "#f8fafc",
        textColor: "#1e293b",
        fontSize: "14px",
        font: 'Arial',
        calendar: calendar
    })
    const [cal, setCal] = useState('')
    const [whichBut, setWhichBut] = useState('before')
    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    let list = JSON.parse(localStorage.getItem('saveCalender'))

    //האם אין שום לוחות שנה שמורים
    if (list === null) {
        list = [details]
        localStorage.setItem('saveCalender', JSON.stringify([details]))
    }

    //תצוגה על המסך
    return <>
        <div className="main-wrapper">
            {/* בכל מצב יוצג לוח שנה */}
            <CalanderComp details={details} setDetails={setDetails}></CalanderComp>

            {/* בחירת לוח קים - אם ילחצו תוצג רשימת שמות לוחות השנה וכפתור לאישור הבחירה */}
            <div className="controls-panel">
                <div className="button-group">
                    {whichBut !== 'exist' && list.length!==1 &&
                        <button className="btn-sm" onClick={() => setWhichBut('exist')}>בחירת לוח קיים</button>}

                    {/* בעת לחיצה על לוח חדש יבחרו קודם שם וישמר הלוח ואז יוכלו להוסיף עיצוב וארועים */}
                    {whichBut !== 'newYes' &&
                        <button className="btn-sm" onClick={() => setWhichBut('newYes')}>לוח חדש</button>}

                    {/* מאפייני הלוח יוצגו רק אם נשמר שם */}
                    {(whichBut === 'existYes' || whichBut === 'newYes') && details.cName != 'ברירת מחדל' &&
                        <button className="btn-sm" onClick={() => setFlag(!flag)}>{flag ? 'סגור מאפיינים' : 'מאפייני הלוח'}</button>}
                </div>

                {/* בחירת לוח קים */}
                {whichBut === 'exist' &&
                    <div className="control-card">
                        <Selection arr={list.filter(x => x.cName !== "ברירת מחדל")} set={setCal} text='בחר לוח מהרשימה' inside='cName'></Selection>
                        <button onClick={() => {cal===''? alert('בחר לוח או צור לוח חדש') : setDetails(list.find(x => x.cName === cal)); setWhichBut('existYes') }}>אישור</button></div>}

                {/* שם ללוח חדש */}
                {whichBut === 'newYes' && details.cName === 'ברירת מחדל' &&
                    <div className="control-card"> <NewName details={details} setDetails={setDetails}></NewName></div>}

                {/* מאפייני העיצוב והארועים יוצגו רק בעת לחיצה */}
                {flag && (<div className="control-card">
                    <div className="button-group">
                        <button className="btn-sm" onClick={() => setFlag1(!flag1)}>עיצוב הלוח</button>
                        <button className="btn-sm" onClick={() => setFlag2(!flag2)}>הוספת ארוע</button></div>
                    {flag1 && <DesignProps details={details} setDetails={setDetails}></DesignProps>}
                    {flag2 && <Events details={details} setDetails={setDetails}></Events>}
                </div>)}
            </div>
        </div>
    </>
}
