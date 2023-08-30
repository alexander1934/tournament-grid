import cn from "classnames";
import useTheme from "../../hooks/useTheme";
import {DropdownProps, Game} from "../../types/types";

const DropdownMenu = ({options, description, data, register}: DropdownProps) => {

    const {type} = useTheme();

    return <select {...register(`${data}`, {required: true})} className={cn("mt-5 w-56 focus:outline-none rounded-md pl-3 h-8", {
        "bg-gray-600": type === "dark",
        "bg-gray-300": type === "light"
    })}>
        <option value="" disabled selected>{description}</option>
        {options.map((game: Game) => (
            <option key={game.id} value={game.value}>{game.name}</option>
        ))}
    </select>
}

export default DropdownMenu;