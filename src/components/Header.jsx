import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ 
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,
    spends,
    setSpends
  }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
            presupuesto={ presupuesto }
            setPresupuesto={ setPresupuesto }
            spends={ spends }
            setSpends={ setSpends }
            setIsValidPresupuesto={ setIsValidPresupuesto }/>
        ) : (
          <NuevoPresupuesto
          presupuesto={ presupuesto }
          setPresupuesto={ setPresupuesto }
          setIsValidPresupuesto={ setIsValidPresupuesto }/>
        )}
    </header>
  )
}

export default Header