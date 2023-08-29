import { Bracket, IRoundProps } from 'react-brackets';
import {useSelector} from "react-redux";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

const Schedule = () => {
    const state = useSelector((state: IRoundProps) => state.grid)

    const {type} = useTheme();

    return (
        <div className="flex flex-col justify-between items-center h-96">
            <h1 className={cn("font-medium text-3xl my-10", {
                "text-white": type === "dark"
            })}>{state.tournamentName}</h1>
            <Bracket rounds={state.rounds} />
            <div></div>
        </div>

)

};

export default Schedule;