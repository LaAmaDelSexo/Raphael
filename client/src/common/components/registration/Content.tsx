import { useRegistrationManager } from "../../../lib/store/components/registration"
import Requirements from "./components/Requirements"
import Applications from "./components/Applications"
import Tuition from "./components/Tuition"
import Instructions from "./components/Instructions"
import Testimonies from "./components/Testimonies"
import AdmisionTeam from "./components/AdmisionTeam"

const {content} = useRegistrationManager();

const renderComponent = () => {
  switch(content) {
    case 'REQUIREMENTS' : return <Requirements />;
    case 'APLICATIONS': return <Applications />;
    case 'TUITIONS' : return <Tuition />;
    case 'INSTRUCTIONS': return <Instructions />;
    case 'TESTIMONIES': return <Testimonies />;
    case 'ADMISIONTEAM': return <AdmisionTeam />;
    default: return null;
  }
}

//{renderComponent}
function Content () {
  return (
    <section>
    </section>
  )
}

export default Content