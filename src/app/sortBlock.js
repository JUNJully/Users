import React from 'react'

function SortList({ city, company }) {
    return (<div className='sort'>
        <h3>Сортировка</h3>
        <button onClick={city}>по городу</button>
        <button onClick={company}>по имени</button>
    </div>
    )
}

export default SortList