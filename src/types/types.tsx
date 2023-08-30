import {IRoundProps} from "react-brackets";
import {UseFormRegister} from "react-hook-form";

export type FormType = {
    tournamentName: string,
    teamsCount: number,
    gameName: string
}

export type Game = {
    id: number,
    value: string,
    name: string
}

export type DropdownProps = {
    options: Game[],
    data:  "tournamentName" | "teamsCount" | "gameName",
    description: string,
    register: UseFormRegister<FormType>,
}

export type State = {
    teams: number;
    isGenerated: boolean;
    rounds: IRoundProps[];
    tournamentName: string;
    games: Game[];
    currentGame: string;
};
