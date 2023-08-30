import moon from "../../assets/icons/cil-moon.svg";
import sun from "../../assets/icons/sun-white.svg";
import useTheme from "../../hooks/useTheme";

const ThemeSwitcher = () => {

    const {type, setType} = useTheme();

    return <button onClick={()=>setType(type === "light" ? "dark" : "light")}>
        {type === "light" ? <img src={moon} alt="Dark" className="w-7 mr-10"/> : <img src={sun} alt="Light" className="w-7 mr-10"/>}

    </button>
}

export default ThemeSwitcher;