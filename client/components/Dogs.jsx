import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllDogs } from '../actions/dogs'
import { Link } from 'react-router-dom'

function Dogs (props) {
  useEffect(() => {
    props.dispatch(fetchAllDogs())
  }, [])

  const { dogs } = props
  return (
    <div>
      <h1>Pick a play date for your dog</h1>
      {dogs.map(dog =>
        <div key={dog.id} className="dog-container">
          <Link to={`/dog/${dog.id}`}>
            <img className="dog-image" src={dog.image} alt={dog.name} />
          </Link>
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          {/* <p>Sex: {dog.sex}</p>
          <p>Desexed: {dog.desexed}</p>
          <p>Bio: {dog.bio}</p>
          <p>Location: {dog.location}</p> */}
        </div>
      )}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(Dogs)
