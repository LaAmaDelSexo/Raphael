import { useRegistrationManager } from "../../../lib/store/components/registration"
import Requirements from "./components/Requirements"
import Applications from "./components/Applications"
import Tuition from "./components/Tuition"
import Instructions from "./components/Instructions"
import Testimonies from "./components/Testimonies"
import AdmisionTeam from "./components/AdmisionTeam"

//{renderComponent}
function Content () {
  const {content} = useRegistrationManager();
  
  const renderComponent = () => {
    switch(content) {
      case 'REQUIREMENTS' : return <Requirements />;
      case 'APPLICATIONS': return <Applications />;
      case 'TUITIONS' : return <Tuition />;
      case 'INSTRUCTIONS': return <Instructions />;
      case 'TESTIMONIES': return <Testimonies />;
      case 'ADMISIONTEAM': return <AdmisionTeam />;
      default: return null;
    }
  }
  return (
    <section>
      {renderComponent()}
    </section>
  )
}

export default Content