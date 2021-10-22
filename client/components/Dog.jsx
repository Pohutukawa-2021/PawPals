import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

function Dog (props) {
  const { id } = useParams()
  const dog = props.dogs.find(dog => dog.id == id)
  return (
    <div>
      <img className="dog-image" src={dog.image} alt={dog.name} />
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Desexed: {dog.desexed}</p>
      <p>Bio: {dog.bio}</p>
      <p>Location: {dog.location}</p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(Dog)
