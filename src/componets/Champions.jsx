import React from 'react'
import { Link } from 'react-router-dom';

export default function Champions({champion}) {
  return (
    <div>
      <Link to={`/champions/${champion._id}`}>
        <h2>{champion.name}</h2>
      </Link>
    </div>
  )
}