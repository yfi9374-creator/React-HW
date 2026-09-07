export const List=()=>{
      const users = [
        { username: "Yaffi", email: "hhhh", password: "jkl;'564", phone: "05050505" },
        { username: "Shulamit", email: "jjjj", password: "ghyuj888" },
        { username: "Shifra", email: ";;;", password: "bhh", phone: "0533312336" },
        { username: "Feigi", email: "mjkhgu", password: "pppp", phone: "514818718787878" }
    ] 
    return <>
    {users.map((x)=><p> username: {x.username}, mail: {x.email}, password: {x.password}, phone: {x.phone}</p>)}
    </>

}