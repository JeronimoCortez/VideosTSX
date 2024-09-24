import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    }
  }, [])

  return (
    <div>
      <p>{state ? "Es true" : "Es false"}</p>
      <button onClick={() => {
        setState(!state);
      }}>Cambiar state</button>
    </div>
  )
}


