import { Album } from "./Album"


const kids = [
    { name: "Yossef", dateOfBirdth: "01-01-2000", img: "1.jpg", gender: "male" },
    { name: "Shalom", dateOfBirdth: "21-01-1998", img: "2.jpg", gender: "male" },
    { name: "Shmuel", dateOfBirdth: "01-01-2000", img: "3.jpg", gender: "male" },
    { name: "Rachel", dateOfBirdth: "01-01-2000", img: "4.jpg", gender: "female" },
    { name: "Yehudit", dateOfBirdth: "01-01-2000", img: "5.jpg", gender: "female" },
    { name: "Avraham", dateOfBirdth: "01-01-2000", img: "6.jpg", gender: "male" },
    { name: "Ytzschak", dateOfBirdth: "01-01-2000", img: "7.jpg", gender: "male" },
    { name: "Gili", dateOfBirdth: "01-01-2000", img: "8.gif", gender: "female" },
]

export const Main = () => {
    return <>
        <Album kids={kids}></Album> 
    </>
}