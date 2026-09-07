import { Page } from "./Page"

export const Album = ({kids}) => {
    return <>
        <div style={{height: '100vh' , width: '98%', backgroundColor: 'rgb(192, 227, 227)', display: 'flex', flexWrap:'wrap',
                    justifyContent:'space-around'
        }}>
            {kids.map((x,i)=> <Page key={i} info={x}></Page>)}
        </div>
    </>
}