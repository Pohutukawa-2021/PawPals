import React from 'react'
import { useSelector } from 'react-redux'

function Dogs () {
  const dogs = useSelector((state) => state.dogs)
  return (
    <div>
      <p>Pick a play date for your dog</p>
      {dogs.map(dog =>
        <>
          <div key={dog.id} className="dog-container">
            <img className="dog-image" src={dog.image} alt={dog.name} />
          </div>
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Sex: {dog.sex}</p>
          <p>Desexed: {dog.desexed}</p>
          <p>Bio: {dog.bio}</p>
          <p>Location: {dog.location}</p>
        </>
      )}
    </div>
  )
}

export default Dogs
