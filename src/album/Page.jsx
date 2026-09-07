export const Page = ({info}) => {

    return <>
        <div style={{width:'40%', border: info.gender==="male"? 'solid 2px blue' : 'solid 2px pink'}}>
            <img src={`./img/${info.img}`} alt="no picture" style={{width:'30%'}}/>
            <p>שם: {info.name}</p>
            <p>תאריך לידה: {info.dateOfBirdth}</p>
        </div>
    </>
}