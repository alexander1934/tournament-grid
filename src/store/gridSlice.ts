import {createSlice} from "@reduxjs/toolkit";

const gridSlice = createSlice({
    name: "grid",
    initialState: {
        teams: 0,
        isGenerated: false,
        tournamentName: "",
        rounds: [
            {
                title: 'Round one',
                seeds: [
                    {
                        id: 1,
                        date: new Date().toDateString(),
                        teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    },
                    {
                        id: 2,
                        date: new Date().toDateString(),
                        teams: [{ name: 'Team C' }, { name: 'Team D' }],
                    },
                ],
            },
            {
                title: 'Round two',
                seeds: [
                    {
                        id: 3,
                        date: new Date().toDateString(),
                        teams: [{ name: "---" }, { name: '---' }],
                    },
                ],

            },
        ]
    },
    reducers: {
        getTeams(state, action): void{
           state.teams = action.payload
        },
        generatedStatusSwitcher(state, action): void {
            state.isGenerated = action.payload
        },
        getTournamentName(state, action): void {
            state.tournamentName = action.payload
        }
    }
})

export const {getTeams, generatedStatusSwitcher, getTournamentName} = gridSlice.actions;
export default gridSlice.reducer;