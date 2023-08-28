import React, {createContext, Dispatch, SetStateAction, useMemo, useState} from "react";

type themeType = "light" | "dark"
type TypeSetState<T> = Dispatch<SetStateAction<T>>
interface IContext {
    type: themeType
    setType: TypeSetState<themeType>
}

export const themeContext = createContext<IContext>({type: "light", setType: ()=>{}});

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    const [type, setType] = useState<themeType>("light");

    const value = useMemo(() => ({type, setType}), [type])

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;