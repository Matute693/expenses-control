import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ 
    presupuesto, 
    setPresupuesto, 
    isValidPResupuesto, 
    setIsValidPresupuesto,
    spends
  }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
        {isValidPResupuesto ? (
          <ControlPresupuesto
          presupuesto={ presupuesto }
          spends={ spends }/>
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