import { useState, useEffect } from 'react'

// const useState

const Filter = ({ filter, setFilter}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
        <label htmlFor="categoria">Filtrar gastos</label>
          <select value={filter}  onChange={e => setFilter( e.target.value )} id="categoria">
            <option value=""> -- Todas las categorias</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter