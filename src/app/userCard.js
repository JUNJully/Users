import React from 'react'
import {Link} from 'react-router-dom'

function UserCard({props}) {
    return (
        <div className='userCard'>
          <ul>
            <li>Ф.И.О:<span>{props.name}</span></li>
            <li>город:<span>{props.address.city}</span></li>
            <li>компания:<span>{props.company.name}</span></li>
            <li><Link to={`user/${props.id}`}>Подробнее</Link></li>
         </ul>        
        </div>
    )

}

export default UserCard