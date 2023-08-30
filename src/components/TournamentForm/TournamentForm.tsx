import {useDispatch, useSelector} from "react-redux";
import {generatedStatusSwitcher, generateRounds, getGameName, getGamesList, getTeams, getTournamentName} from "../../store/gridSlice";
import {useForm, SubmitHandler} from "react-hook-form";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";
import {useEffect} from "react";
import server from "../../server";
import {FormType, Game} from "../../types/types";
import DropdownMenu from "./DropdownMenu";

server();

const TournamentForm = () => {
  const state = useSelector((state1: any) => state1.grid)
  const dispatch = useDispatch()

  const {type} = useTheme();

  const {register, handleSubmit} = useForm<FormType>({
    defaultValues: {}
  })

  const submit: SubmitHandler<FormType> = data => {
    dispatch(getTeams(data.teamsCount))
    dispatch(generateRounds(true))
    dispatch(generatedStatusSwitcher(true))
    dispatch(getTournamentName(data.tournamentName))
    dispatch(getGameName(data.gameName))
  }
  const getGames = (games: Game[]) => {
    dispatch(getGamesList(games))
  }

  useEffect(() => {
    fetch("api/games").then(r => r.json()).then(games => getGames(games))
  }, [])
  return <div className={cn("h-96 rounded-3xl", {
    "bg-gray-200": type === "light",
    "bg-gray-700 text-white": type === "dark"
  })}>

    <form className="flex flex-col items-center w-80">
      <input {...register("tournamentName", {required: true})}
             type="text" placeholder="Имя турнира"
             className={cn("mt-10 w-56 focus:outline-none rounded-md pl-3 h-8", {
               "bg-gray-600": type === "dark",
               "bg-gray-300": type === "light"
             })}/>
      <DropdownMenu register={register} data={"teamsCount"} description={"Кол-во участников"} options={[{ id: 1, value: "4", name: "4" }, { id: 2, value: "8", name: "8" }, { id: 3, value: "16", name: "16" }]}/>
      <DropdownMenu register={register} data={"gameName"} description={"Выбор игры"} options={state.games}/>
      <button className="mt-32 h-12 rounded-md w-44 bg-orange-300" onClick={handleSubmit(submit)}>Сгенерировать</button>
    </form>
  </div>
}

export default TournamentForm;