import {useDispatch} from "react-redux";
import {generatedStatusSwitcher} from "../../store/gridSlice";

const TournamentForm = () => {
  const dispatch = useDispatch()

  const hideForm = () => {
    dispatch(generatedStatusSwitcher(true))
  }

  return <div className="bg-gray-200 h-96 rounded-3xl">
    <form className="flex flex-col items-center w-80">
      <input type="text" placeholder="Имя турнира" className="bg-gray-300 mt-10 w-56 focus:outline-none rounded-md pl-3 h-8"/>
      <select placeholder="Кол-во участников" className="bg-gray-300 mt-5 w-56 border-gray-50 focus:outline-none rounded-md px-3 h-8">
        <option value="" disabled selected>Кол-во участников</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
      </select>

      <button className="mt-44 h-12 rounded-md w-44 bg-orange-300" onClick={hideForm}>Сгенерировать</button>
    </form>
  </div>
}

export default TournamentForm;