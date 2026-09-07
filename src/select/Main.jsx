import { useState } from "react"
import { SelectArea } from "./vacation/SelectArea"
import { Details } from "./vacation/Details"
export const Main = () => {

    const [area, setArea] = useState("no choose")
    const [city, setCity] = useState("no choose")

    const areas = {
        צפון: ['צפת', 'טבריה', 'עפולה'],
        דרום: ['אילת', 'ערד', 'ירוחם'],
        מרכז: ['בני ברק', 'תל אביב', 'ראשון לציון']
    }

    const areasVacation = Object.keys(areas)
    const cities = areas[area]

    return <>
        <h1>ברוכים הבאים לאתר הנופש שלנו</h1>
        {area === "no choose" && <SelectArea type="בחר אזור" arr={areasVacation} setChoose={setArea}></SelectArea>}
        {area != "no choose" && <SelectArea type="בחר עיר" arr={cities} setChoose={setCity}></SelectArea>}
        {city != "no choose" && <Details area={area} city={city}></Details>}
    </>
}