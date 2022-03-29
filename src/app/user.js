import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from './loader'


function User() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [errName, setErrName] = useState(null)

    const [username, setUsername] = useState()
    const [errUserName, setErrUserName] = useState(null)

    const [email, setEmail] = useState()
    const [errEmail, setErrEmail] = useState(null)

    const [street, setStreet] = useState()
    const [errStreet, setErrStreet] = useState(null)

    const [city, setCity] = useState()
    const [errCity, setErrCity] = useState(null)

    const [zipcode, setZipcode] = useState()
    const [errZipcode, setErrZipcode] = useState(null)

    const [phone, setPhone] = useState()
    const [errPhone, setErrPhone] = useState(null)

    const [website, setWebsite] = useState()
    const [errWebsite, setErrWebsite] = useState(null)

    const [comment, setComment] = useState()
    const [disabled, setDisabled] = useState(true)
    const [readonly, setReadonly] = useState(true)
    const [error, setError] = useState(null)
    const [classForm, setClassForm] = useState('')
    const [load, setLoad] = useState(true)


    useEffect(async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await response.json()
            setName(data.name)
            setUsername(data.username)
            setEmail(data.email)
            setStreet(data.address.street)
            setCity(data.address.city)
            setZipcode(data.address.zipcode)
            setPhone(data.phone)
            setWebsite(data.website)
            setLoad(false)

        }
        catch
        {
            setError("Данные пользователя не найдены...")
            setLoad(false)
        }

    }, [id])

    function edit() {
        setDisabled(false)
        setReadonly(false)
        setClassForm('edit')
    }

    function changeName(e) {
        const letters = /^[A-Za-z ]+$/
        if (letters.test(e.target.value)) {
            setName(e.target.value)
            setErrName(null)
        }
        else {
            setErrName('Имя не может быть пустым или содержать цифры')
        }

    }

    function changeUserame(e) {
        const letters = /^[a-z0-9_-]{3,16}$/
        if (letters.test(e.target.value)) {
            setUsername(e.target.value)
            setErrUserName(null)
        }
        else {
            setErrUserName('Некорректное имя пользователя')
        }

    }

    function changeEmail(e) {
        const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (regEmail.test(e.target.value)) {
            setEmail(e.target.value)
            setErrEmail(null)
        }
        else {
            setErrEmail('Некорректный email')
        }
    }

    function changeStreet(e) {
        const letters = /^[A-Za-z0-9 ]+$/
        if (letters.test(e.target.value)) {
            setStreet(e.target.value)
            setErrStreet(null)
        }
        else {
            setErrStreet('Недопустимые символы в названии')
        }
    }

    function changeCity(e) {
        const letters = /^[A-Za-z-]+$/
        if (letters.test(e.target.value)) {
            setCity(e.target.value)
            setErrCity(null)
        }
        else {
            setErrCity('Недопустимые символы в названии')
        }
    }

    function changeZipcode(e) {
        const numbers = /^\d{5}(?:[-\s]\d{4})?$/
        if (numbers.test(e.target.value)) {
            setZipcode(e.target.value)
            setErrZipcode(null)
        }
        else {
            setErrZipcode('Некорректный код')
        }
    }

    function changePhone(e) {
        const numbers = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
        if (numbers.test(e.target.value)) {
            setPhone(e.target.value)
            setErrPhone(null)
        }
        else {
            setErrPhone('Некорректный номер')
        }
    }

    function changeWebsite(e) {
        const web = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi
        if (web.test(e.target.value)) {
            setWebsite(e.target.value)
            setErrWebsite(null)
        }
        else {
            setErrWebsite('Некорректое имя сайта')
        }
    }

    function submitForm() {
        const user = { name, username, email, street, city, zipcode, phone, website, comment }
        const errors = [errName, errUserName, errEmail, errStreet, errCity, errPhone, errWebsite]
        errors.forEach(function (item) {
            if (item) {
                alert('Вы не можете отправить форму с ошибкой')
                setDisabled(true)
            }
            else { console.log(JSON.stringify(user)) }
        })
    }

    return (
        <>
            {load ? <Loader />
                : error ? <h2>{error}</h2>
                    :
                    (
                        <>
                            <div className='user'>
                                <div className='userHeader'>
                                    <h3>Профиль пользователя</h3>
                                    <button onClick={edit}>Редактировать</button>
                                </div>

                                <div className='user_form'>
                                    <form className={classForm} >

                                        {errName ? <div className='error'>{errName}</div> : <label>Name</label>}
                                        <input readOnly={readonly} defaultValue={name} name='name' onChange={(e) => changeName(e)} />

                                        {errUserName ? <div className='error'>{errUserName}</div> : <label>Username</label>}
                                        <input readOnly={readonly} defaultValue={username} name='username' onChange={(e) => changeUserame(e)} />

                                        {errEmail ? <div className='error'>{errEmail}</div> : <label>E-mail</label>}
                                        <input readOnly={readonly} defaultValue={email} name='email' onChange={(e) => changeEmail(e)} />

                                        {errStreet ? <div className='error'>{errStreet}</div> : <label>Street</label>}
                                        <input readOnly={readonly} defaultValue={street} name='street' onChange={(e) => changeStreet(e)} />

                                        {errCity ? <div className='error'>{errCity}</div> : <label>City</label>}
                                        <input readOnly={readonly} defaultValue={city} name='city' onChange={(e) => changeCity(e)} />

                                        {errZipcode ? <div className='error'>{errZipcode}</div> : <label>Zip code</label>}
                                        <input readOnly={readonly} defaultValue={zipcode} name='zipcode' onChange={(e) => changeZipcode(e)} />

                                        {errPhone ? <div className='error'>{errPhone}</div> : <label>Phone</label>}
                                        <input readOnly={readonly} defaultValue={phone} name='phone' onChange={(e) => changePhone(e)} />

                                        {errWebsite ? <div className='error'>{errWebsite}</div> : <label>Website</label>}
                                        <input readOnly={readonly} defaultValue={website} name='website' onChange={(e) => changeWebsite(e)} />

                                        <label>Comment</label>
                                        <input type="textarea" defaultValue={comment} name='comment' onChange={(e) => setComment(e.target.value)} />
                                    </form>
                                </div>
                                <button disabled={disabled} onClick={submitForm} className='greenButton' >Отправить</button>
                            </div>
                        </>
                    )}
        </>

    )
}


export default User
