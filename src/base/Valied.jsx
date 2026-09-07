export const Valied = ({username,email,password,phone}) => {
    return (
    <>
        <p>name: {username}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
        {password.length<5? "סיסמה קצרה מדי" : "סיסמה תקינה"}
        {phone && phone.length>8 && phone.length<11 && <p>phone: {phone}</p>}
   
    </>
    )
}
