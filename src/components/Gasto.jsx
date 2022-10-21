import React from 'react'
import { 
    LeadingActions, 
    SwipeableList, 
    SwipeableListItem, 
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { dateFormatter } from '../helpers'


import iconSave  from '../img/icono_ahorro.svg'
import iconHouse   from '../img/icono_casa.svg'
import iconFood   from '../img/icono_comida.svg'
import iconSpend  from '../img/icono_gastos.svg'
import iconOcio   from '../img/icono_ocio.svg'
import iconHealthy  from '../img/icono_salud.svg'
import iconSubscriptions  from '../img/icono_suscripciones.svg'

const IconsDirectionary = {
  ahorro: iconSave,
  casa: iconHouse,
  comida: iconFood,
  gastos: iconSpend,
  ocio: iconOcio,
  salud: iconHealthy,
  subscripciones: iconSubscriptions
}

const Gasto = ({ spend, setEditSpend, deleteSpend }) => {
    const { category, name, quantity, id, date } = spend;

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setEditSpend(spend)}>
          Editar
        </SwipeAction>
    </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => deleteSpend(id)}
          >
            Delete
          </SwipeAction>
      </TrailingActions>
    )
  return (
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}>
          <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img
                src={IconsDirectionary[category]}
                alt="" />
              <div className='descripcion-gasto'>
                <p className='nombre-gasto'>{category.toUpperCase()}</p>
                <p className='categoria'>{name}</p>
                <p className='fecha-gasto'> Agregado el: {''} {dateFormatter(date)}</p>
              </div>
            </div>
            <p className="cantidad-gasto">${quantity}</p>
          </div>
        </SwipeableListItem>
      </SwipeableList>
  )
}

export default Gasto