import React from 'react'
import { dateFormatter } from '../helpers'
import iconSave  from '../img/icono_ahorro.svg'
import iconHouse   from '../img/icono_casa.svg'
import iconFood   from '../img/icono_comida.svg'
import iconSpend   from '../img/icono_gastos.svg'
import iconOcio   from '../img/icono_ocio.svg'
import iconHealthy  from '../img/icono_salud.svg'
import iconSubscriptions  from '../img/icono_suscripciones.svg'

const IconsDirectionary = {
  ahorro: iconSave,
  casa: iconHouse,
  comida: iconFood,
  gastos: iconSpend,
  ocio: iconOcio,
  varios: iconHealthy,
  subscripciones: iconSubscriptions
}

const Gasto = ({ spend }) => {
    const { category, name, quantity, id, date } = spend
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
          <img 
            src={IconsDirectionary[category]} 
            alt="" />
            <div className='descripcion-gasto'>
                <p className='nombre-gasto'>{ category }</p>
                <p className='categoria'>{ name }</p>
                <p className='fecha-gasto'> Agregado el: {''} { dateFormatter(date) }</p>
            </div>
        </div>
            <p className="cantidad-gasto">${ quantity }</p>
    </div>
  )
}

export default Gasto