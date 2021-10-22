import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { addDogs } from '../apis/dogs'

function RegisterDog ({ user }) {
  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    age: '',
    breed: '',
    sex: '',
    desexed: '',
    bio: '',
    image: '',
    location: ''
  })

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
      await addDogs(form, user.auth0Id)
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='form'>
      <h2>Register Dog!</h2>
      <form className='registeration'>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          value={form.name}
          onChange={handleChange}
        ></input>

        <label htmlFor='age'>Age</label>
        <input
          name='age'
          value={form.age}
          onChange={handleChange}
        ></input>

        <label htmlFor='breed' >Breed</label>
        <input
          name='breed'
          value={form.breed}
          onChange={handleChange}
        ></input>

        <label htmlFor='sex' >Sex</label>
        <input
          name='sex'
          value={form.sex}
          onChange={handleChange}
        ></input>

        <label htmlFor='desexed' >Desexed</label>
        <input
          name='desexed'
          value={form.desexed}
          onChange={handleChange}
        ></input>

        <label htmlFor='location' >Location</label>
        <input
          name='location'
          value={form.location}
          onChange={handleChange}
        ></input>

        <label htmlFor='bio' >Bio</label>
        <textarea
          name='bio'
          value={form.bio}
          onChange={handleChange}
        ></textarea>

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

export default connect(mapStateToProps)(RegisterDog)
