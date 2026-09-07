export const SelectArea = ({ type, arr, setChoose }) => {
    return <>
        <label>{type}</label>
        <select onChange={e => setChoose(e.target.value)}>
            <option disabled selected>{type}</option>
            {arr && arr.map((c, i) => <option key={i}>{c}</option> )}
        </select>
    </>
} 