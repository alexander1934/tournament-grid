import moon from "../../assets/icons/cil-moon.svg";
import sun from "../../assets/icons/sun-white.svg";
import cn from "classnames";
import useTheme from "../../hooks/useTheme";

// Разметка шапки
const Header: React.FC = () => {

    const {type, setType} = useTheme();

    return <header className={cn("flex items-center justify-between justify-center h-16 bg-orange-300", {
        "bg-orange-800 text-white": type === "dark"
    })}>
        <div></div>
        <nav className="w-1/3">
            <ul className="flex justify-between text-lg">
                <li>Главная</li>
                <li>О турнире</li>
                <li>Команды</li>
            </ul>
        </nav>
        {/*Смена темы*/}
            <button onClick={()=>setType(type === "light" ? "dark" : "light")}>
                {type === "light" ? <img src={moon} alt="" className="w-7 mr-10"/> : <img src={sun} alt="" className="w-7 mr-10"/>}

            </button>
    </header>
}

export default Header;