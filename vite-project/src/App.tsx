// import { useState } from "react"
// import { ComponentCounter } from "./component/ComponentCounter/ComponentCounter"
// import MiPrimerComponent from "./component/MiPrimerComponent/MiPrimerComponent"
// import {ComponentUseEffect} from "./component/ComponentUseEffect/ComponentUseEffect"
// import { FormComponent } from "./component/FormComponent/FormComponent"

import { AppProduct } from "./component/AppProduct/AppProduct"

const App = () => {
  // const [enableCounter, setEnableCounter] = useState(false)

  return (
    // <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
    //   <MiPrimerComponent text='Texto desde propiedades' color="red" fontSize={2} />
    //   <MiPrimerComponent text='Texto desde propiedades 2' color="#000" fontSize={4} />
    //   {enableCounter && <ComponentCounter/>}

    //   <button onClick={() => {setEnableCounter(!enableCounter)}}>Mostar u ocultar contador</button>

    //   <ComponentUseEffect />

    //   <FormComponent />
    //</div>

    <div>
      <AppProduct />
    </div>
  )
}

export default App
