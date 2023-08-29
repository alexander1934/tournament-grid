import cn from "classnames";
import useTheme from "../../hooks/useTheme";
import ThemeSwitcher from "./ThemeSwitcher";

// Разметка шапки
const Header: React.FC = () => {

    const {type, setType} = useTheme();

    return <header className={cn("flex items-center justify-between justify-center h-16 bg-orange-300", {
        "bg-gray-700 text-white": type === "dark"
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
        <ThemeSwitcher />
    </header>
}

export default Header;