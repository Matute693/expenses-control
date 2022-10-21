import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ spends, setEditSpend, deleteSpend, filter, filterSpends }) => {
  return (
    <div className='listado-gastos contenedor'>

        { filter ? (
          <>
          <h2 className='text-center'>{ filterSpends.length ? 'Gastos filtrados' : 'No hay gastos en esta categoria' }</h2>
              { filterSpends.map( spend => (
                  <Gasto
                      key={ spend.id }
                      spend={ spend }
                      setEditSpend={ setEditSpend }
                      deleteSpend={ deleteSpend }
                  />
                ))}
          </>
          ) : (
            <>
              <h2>{ spends.length ? 'Gastos' : 'No hay gastos' }</h2>
              {spends.map( spend => (
                <Gasto
                    key={ spend.id }
                    spend={ spend }
                    setEditSpend={ setEditSpend }
                    deleteSpend={ deleteSpend }
                />
              ))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos