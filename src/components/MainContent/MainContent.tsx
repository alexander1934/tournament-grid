import Schedule from "../Schedule/Schedule";
import {useSelector} from "react-redux";
import TournamentForm from "../TournamentForm/TournamentForm";

const MainContent = () => {

  const state = useSelector((state:any) => state.grid)

  return <>{state.isGenerated ? <Schedule/> : <TournamentForm/>}</>
}

export default MainContent;