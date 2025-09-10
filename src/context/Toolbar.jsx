import {useApp} from "./AppContext.jsx";

export default function Toolbar(){
    const {name, setName} = useApp();
    return (<>
        <h1>Toolbar</h1>
        <p>Nama: {name}</p>
        <button onClick={()=>setName("Andi")}>Ganti Nama</button>
    </>);
}