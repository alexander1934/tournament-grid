import {useContext} from "react";
import {themeContext} from "../providers/themeProvider";

const useTheme = () => {
    const themeValue = useContext(themeContext);
    return themeValue;
}

export default useTheme;