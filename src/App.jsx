import { useState, useEffect } from 'react'
import './App.css'
import Filters from './components/Filter';
import Header from './components/Header'
import ListadoGastos from './components/listadoGastos';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  
  const [spends, setSpends] = useState(
  localStorage.getItem('spends') ? JSON.parse(localStorage.getItem('spends')) : []
  )
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnimate, setModalAnimate] = useState(false);
  const [editSpend, setEditSpend] = useState({});

  
  const [ filter, setFilter ] = useState('')
  const [ filterSpends, setFilterSpends ] = useState([])

  useEffect(() => {
    if(Object.keys(editSpend).length > 0) {
      setModal(true);

      setTimeout(() => {
        setModalAnimate(true)
      }, 500);
    }
  }, [editSpend])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [ presupuesto ])

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends) ?? []);
  }, [ spends ])

  useEffect(() => {
    const presupuestoLocalStorage = Number(localStorage.getItem('presupuesto')) ?? 0;
    if( presupuestoLocalStorage > 0 ) {
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
      if(filter) {
        const filterSpend = spends.filter( spend => spend.category === filter)
        setFilterSpends(filterSpend)
      }  
  }, [ filter ])


  const handleNewSpend = () => {
    setModal(true);
    setEditSpend({});
    setTimeout(() => {
      setModalAnimate(true)
    }, 500);
  }

  const saveSpend = spend => {
    if(spend.id) {
      const updatedSpend = spends.map( spendState => spendState.id === spend.id ? spend : spendState )
      setSpends(updatedSpend);
    } else {
      spend.id = generateId();
      spend.date = Date.now();
      setSpends([...spends, spend])
      // neqw spend
    }
    setModalAnimate(false);
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteSpend = id => {
    const updatedSpend = spends.filter( item => item.id !== id );
    setSpends(updatedSpend)
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
      spends={ spends }
      presupuesto={ presupuesto }
      setPresupuesto={ setPresupuesto }
      isValidPresupuesto={ isValidPresupuesto }
      setIsValidPresupuesto={ setIsValidPresupuesto }
      setSpends={ setSpends }
      />
      
      {isValidPresupuesto && (
        <>
          <main>
            <Filters
              filter={ filter }
              setFilter={ setFilter }
            />
            <ListadoGastos 
              spends={ spends }
              setEditSpend={ setEditSpend }
              deleteSpend={ deleteSpend }
              filter={ filter }
              filterSpends={ filterSpends }
              />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={ IconoNuevoGasto } 
              alt='icono nuevo gasto'
              onClick={ handleNewSpend }
              />
          </div>
        </>
      )}

      {modal && <Modal 
        setModal={ setModal }
        modalAnimate={ modalAnimate }
        setModalAnimate={ setModalAnimate }
        saveSpend={ saveSpend }
        editSpend={ editSpend }
        setEditSpend={ setEditSpend }
        />}
    </div>
  )
}

export default App
