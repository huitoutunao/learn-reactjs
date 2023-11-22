import { useState } from 'react'
import { initialTravelPlan } from './utils/places2'

function PlaceTree({ id, placesById }) {
  const place = placesById[id]
  const childIds = place.childIds
  return (
    <li>
      {place.title}
      {
        childIds.length > 0 && (
          <ol>
            {
              childIds.map(
                id => <PlaceTree key={id} id={id} placesById={placesById} />
              )
            }
          </ol>
        )
      }
    </li>
  )
}

export default function App() {
  const [plan] = useState(initialTravelPlan)
  const root = plan[0]
  const planetIds = root.childIds

  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        {
          planetIds.map(
            id => <PlaceTree key={id} id={id} placesById={plan} />
          )
        }
      </ol>
    </div>
  )
}
