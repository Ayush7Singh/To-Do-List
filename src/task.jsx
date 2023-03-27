import React from 'react'

function Task({ title, description, deletetask, index }) {
  return (
    <div class="task">
      <div>
        <p>{title}</p>
        <span> {description}</span>
      </div>
      <button class="btn" onClick={() => deletetask(index)}>-</button>
    </div>
  )
}

export default Task