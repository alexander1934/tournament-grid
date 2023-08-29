import Schedule from "../Schedule/Schedule";
import {useSelector} from "react-redux";
import TournamentForm from "../TournamentForm/TournamentForm";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

const MainContent = () => {

  const state = useSelector((state:any) => state.grid)

  const {type} = useTheme();

  return <main className={cn("flex justify-center flex-auto h-full", {
        "bg-gray-600": type === "dark"
      })}>
    {state.isGenerated ? <Schedule/> : <div className="flex justify-center items-center w-full"><TournamentForm/></div>}
  </main>
}

export default MainContent;