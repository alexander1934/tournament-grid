import cn from "classnames";
import useTheme from "../../hooks/useTheme";
import ThemeSwitcher from "./ThemeSwitcher";
import {useDispatch} from "react-redux";
import {generatedStatusSwitcher} from "../../store/gridSlice";

// Разметка шапки
const Header: React.FC = () => {

    const dispatch = useDispatch()

    const hideForm = () => {
        dispatch(generatedStatusSwitcher(false))
    }

    const {type} = useTheme();

    return <header className={cn("flex items-center justify-between h-16", {
        "bg-gray-800 text-white": type === "dark",
        "bg-orange-300": type === "light",
    })}>
        <div className="ml-10"></div>
        <nav>
            <ul className="flex justify-between text-lg">
                <li><button onClick={hideForm}>Генерация</button></li>
            </ul>
        </nav>
        {/*Смена темы*/}
        <ThemeSwitcher />
    </header>
}

export default Header;