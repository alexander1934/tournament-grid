import { Bracket, IRoundProps } from 'react-brackets';
import {useSelector} from "react-redux";

const Schedule = () => {
    const state = useSelector((state: IRoundProps) => state.grid)

    return (
        <div className="flex flex-col justify-between items-center h-96">
            <h1>Название турнира</h1>
            <Bracket rounds={state.rounds} />
            <div></div>
        </div>

)

};

export default Schedule;