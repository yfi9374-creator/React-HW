//קומפננטה של שם הלוח
export const NewName = ({ details, setDetails }) => {

    //detailsעותק של ה
    const d = { ...details }

    let list = JSON.parse(localStorage.getItem('saveCalender'))

    //בעת שיקישו שם חדש וישמרו יוכנס למחסנית
    const cName = () => {
        if (list.find(x => x.cName === d.cName))
            alert('השם קיים כבר')
        else {
            localStorage.setItem('countCalender', +(localStorage.getItem('countCalender')) + 1)
            d.key = localStorage.getItem('countCalender')
            setDetails(d)
            list.push(d)
            localStorage.setItem('saveCalender', JSON.stringify(list))
        }
    }

    //תצוגה על המסך
    return <>
        <label htmlFor="cName">שם לוח שנה:</label>
        <input id="cName" required placeholder="בחר שם שישמר - לזיהוי הלוח שלך" type="text" onChange={(e) => d.cName = e.target.value} />
        <button onClick={() => cName()}>שמור</button>
    </>
}