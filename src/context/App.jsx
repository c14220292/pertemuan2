import { AppProvider } from "react";
import Toolbar from "./Toolbar.jsx";

export default function App(){
    return (
        <AppProvider>
            <Toolbar />
        </AppProvider>
    );
}