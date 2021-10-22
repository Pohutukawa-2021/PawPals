import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { addUser } from '../apis/users'

function Registeration ({ user }) {
  const history = useHistory()

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
    location: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email
    })
  }, [user])

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleClick (e) {
    e.preventDefault()
    try {
      await addUser(form)
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='form'>
      <h2>Register Profile</h2>
      <form className='registeration'>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          value={form.name}
          onChange={handleChange}
          disabled={true}
        ></input>

        <label htmlFor='email'>Email</label>
        <input
          name='email'
          value={form.email}
          onChange={handleChange}
          disabled={true}
        ></input>

        <label htmlFor='location' >Location</label>
        <input
          name='location'
          value={form.location}
          onChange={handleChange}
          cols={3}
        ></input>
        <div className='basicButton'>
          <button className='register-button'
            type='button'
            onClick={handleClick}
          >
          Register
          </button>
        </div>
      </form>
    </section>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Registeration)
