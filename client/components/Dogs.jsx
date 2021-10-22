import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllDogs } from '../actions/dogs'

function Dogs (props) {
  useEffect(() => {
    props.dispatch(fetchAllDogs())
  }, [])

  const { dogs } = props
  return (
    <div>
      <p>Pick a play date for your dog</p>
      {dogs.map(dog =>
        <div key={dog.id} className="dog-container">
          <img className="dog-image" src={dog.image} alt={dog.name} />
          <div className="dog-info">
            <p>Name: {dog.name}</p>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Sex: {dog.sex}</p>
            <p>Desexed: {dog.desexed}</p>
            <p>Bio: {dog.bio}</p>
            <p>Location: {dog.location}</p>
          </div>
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
