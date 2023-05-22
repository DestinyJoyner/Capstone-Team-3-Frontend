import { useContext, createContext, useState } from "react";
import axios from "axios";
import Nav from "../Components/App/Nav";
import Footer from "../Components/App/Footer";

export const ContextData = createContext()
export function useContextProvider(){
    return useContext(ContextData)
}

const API = process.env.REACT_APP_API_URL

function Provider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    // for the time being we will assign a fixed userID when clicking login
    const [userID, setUserID] = useState(1);
    // authToken will be manually hardcoded for now
    const [authToken, setAuthToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJlbWFpbCI6ImRtQGVtYWlsLmNvbSIsImlhdCI6MTY4NDUwOTMyMSwiZXhwIjoxNjg0NTk1NzIxfQ._9tJuQ0etJpFNHFvD7MVEDvcFU9mJl4TGReQj-Wt5p0")
    const [isDarkMode, setIsDarkMode] = useState(false);

    axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`

    return (
        <ContextData.Provider value = {{
            API,
            axios,
            isSignedIn,
            setIsSignedIn,
            userID,
            setUserID,
            setAuthToken,
            isDarkMode,
            setIsDarkMode
        }}>
            <Nav />
            {children}
            <Footer />
        </ContextData.Provider>
    );
}

export default Provider;