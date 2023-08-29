import {useDispatch} from "react-redux";
import {generatedStatusSwitcher, generateRounds, getTeams, getTournamentName} from "../../store/gridSlice";
import {useForm, SubmitHandler} from "react-hook-form";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

type FormType = {
  tournamentName: string,
  teamsCount: number,
}

const TournamentForm = () => {
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
  }

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
      <select {...register("teamsCount", {required: true})} className={cn("mt-5 w-56 focus:outline-none rounded-md pl-3 h-8", {
        "bg-gray-600": type === "dark",
        "bg-gray-300": type === "light"
      })}>
        <option value="" disabled selected>Кол-во участников</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>

      <button className="mt-44 h-12 rounded-md w-44 bg-orange-300" onClick={handleSubmit(submit)}>Сгенерировать</button>
    </form>
  </div>
}

export default TournamentForm;