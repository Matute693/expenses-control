import { useEffect, useState } from 'react'

const ControlPresupuesto = ( { presupuesto, spends }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce( (total, gasto) => gasto.quantity + total, 0);
        const availableTotal = presupuesto - totalSpent;
        setAvailable(availableTotal);
        setSpent(totalSpent);
    }, [spends])

    const formatQuantity = ( quantity ) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <input className='reset-app' type="submit" value='Resetear presupuesto' />
            <p>
                <span>Presupuesto:</span>{formatQuantity(Number(presupuesto))}
            </p>
            <p>
                <span>Disponible:</span>{formatQuantity(Number(available))}
            </p>
            <p>
                <span>Gastado:</span>{formatQuantity(Number(spent))}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto