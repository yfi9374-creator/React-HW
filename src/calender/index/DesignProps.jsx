import './indexStyle.css'

// מאפייני עיצוב
export const DesignProps = ({ details, setDetails }) => {

    let list = JSON.parse(localStorage.getItem('saveCalender'))
    let d

    // פונקצייה לשמירת העיצוב
    const save = (e) => {

        e.preventDefault();

        d=list.find(x => x.cName === details.cName)
        list[details.key]=details
        localStorage.setItem('saveCalender', JSON.stringify(list))
        alert('saved!!')
    }


    // הצגת מאפייני העיצוב
    return <>
        <form onSubmit={save}>
            <label htmlFor="backG">בחר צבע רקע</label>
            <input defaultValue={details.background} onChange={(e) => setDetails({ ...details, background: e.target.value })} id="backG" type="color" />
            <label htmlFor="backGM">בחר צבע משבצות</label>
            <input id="backGM" type="color" defaultValue={details.backgroundM} onChange={(e) => setDetails({ ...details, backgroundM: e.target.value })} />
            <label htmlFor="backGF">בחר צבע כיתוב</label>
            <input id="backGF" type="color" defaultValue={details.textColor} onChange={(e) => setDetails({ ...details, textColor: e.target.value })} />
            <label htmlFor="size">בחר גודל גופן</label>
            <input id="size" type="number" defaultValue={details.fontSize} onChange={(e) => setDetails({ ...details, fontSize: e.target.value })} />
            <label htmlFor="font">בחר סוג גופן</label>
            <select defaultValue={details.font} onChange={(e) => setDetails({ ...details, font: e.target.value })}>
                <option value="Arial">Arial</option>
                <option value="Tahoma">Tahoma</option>
                <option value="David">David</option>
                <option value="Miriam">Miriam</option>
                <option value="Georgia">Georgia</option>
            </select>
            <input type="submit" id='submit' value="שמירת העיצוב" />
        </form>
    </>
}