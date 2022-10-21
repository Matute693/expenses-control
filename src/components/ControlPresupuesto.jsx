import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ( { presupuesto, spends, setSpends, setPresupuesto, setIsValidPresupuesto }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce( (total, gasto) => gasto.quantity + total, 0);
        const availableTotal = presupuesto - totalSpent;
        
        //calculo de porcentaje para el grafico
        const newPercentage = (((presupuesto - availableTotal ) / presupuesto) * 100).toFixed(2);
        
        setAvailable(availableTotal);
        setSpent(totalSpent);
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000)
    }, [spends])

    const formatQuantity = ( quantity ) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    const handleResetApp = () => {
        const result = confirm('Desea reiniciar presupuesto y gastos ?')

        if(result) {
            setSpends([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}% gastado`}
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    pathTransitionDuration: 1,
                    textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                })}
                />
        </div>

        <div className="contenido-presupuesto">
            <button className='reset-app' type="submit" onClick={handleResetApp} > Restear</button>
            <p>
                <span>Presupuesto:</span>{formatQuantity(Number(presupuesto))}
            </p>
            <p className={`${available < 0 ? 'negativo' : ''}`}>
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