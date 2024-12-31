import { useEffect, useRef } from "react"
import { UnderConstruction } from "./UnderConstruction"
import { useAtom } from "jotai"
import { constraintRefAtom } from "./atoms"

function App() {
  const _constraintRef = useRef(null)
  const [ , setConstraintRef ] = useAtom( constraintRefAtom )

  useEffect( () => { setConstraintRef( _constraintRef ) }, [ _constraintRef ] )

  return <>
    <div ref={_constraintRef} className="drag_constraint_area"></div>
    <UnderConstruction />
  </>
}

export default App
