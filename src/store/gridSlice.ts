import {createSlice} from "@reduxjs/toolkit";
import {IRoundProps} from "react-brackets";

type State = {
    teams: number;
    isGenerated: boolean;
    rounds: IRoundProps[];
    tournamentName: string;
};

const initialState:State = {
    teams: 0,
    isGenerated: false,
    tournamentName: "",
    rounds: []
}

const gridSlice = createSlice({
    name: "grid",
    initialState,
    reducers: {
        getTeams(state, action): void{
            console.log(action.payload)
           state.teams = action.payload
        },
        generatedStatusSwitcher(state, action): void {
            state.isGenerated = action.payload
            if(state.isGenerated === false){state.rounds = []}
        },
        getTournamentName(state, action): void {
            state.tournamentName = action.payload
        },
        generateRounds(state, action):void {
            for (let i = 0; i < Math.log2(state.teams); i++) {
                const seeds = [];
                for (let j = 0; j < state.teams / Math.pow(2, i + 1); j++) {
                    seeds.push({
                        id: j + 1,
                        date: new Date().toDateString(),
                        teams: [{ name: `Team ${j+1}` }, { name: `Team ${j+2}` }],
                    });
                }
                state.rounds.push({
                    title: `Раунд ${i + 1}` ,
                    seeds: seeds,
                });
            }
        }
    }
})

export const {getTeams,
    generatedStatusSwitcher,
    getTournamentName,
    generateRounds} = gridSlice.actions;
export default gridSlice.reducer;