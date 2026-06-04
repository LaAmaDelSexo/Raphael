// note: all the inline css you see is just doodling, NOT PROD READY. will get swapped to its proper reserved css file
import { useRegistrationManager, type ContentOptions } from "../../../lib/store/components/registration"

function Board () {
  const {content, changeContentState} = useRegistrationManager();

  const contentOptions: { id: ContentOptions; label: string} [] =[
    {id: 'REQUIREMENTS', label: 'requirement'},
    {id: 'APPLICATIONS', label: 'applications'},
    {id: 'TUITIONS', label: 'tuitions'},
    {id: 'INSTRUCTIONS', label: 'instructions'},
    {id: 'TESTIMONIES', label: 'testimonies'},
    {id: 'ADMISIONTEAM', label: 'admisionTeam'}
  ]

  return (
    <div>
      <div>
        <div style={{ width:"500px", height:"500px",border:"solid 3px blue", borderRadius:"50%"}}>
        <div>
          {
            contentOptions.map ((option)=>(

              <button onClick={()=> changeContentState(option.id)}>{option.label}</button>
            ))
          }
        </div>
        </div>
      </div>      
    </div>
  )
}

export default Board