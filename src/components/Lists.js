import React from 'react'


const Lists = (props) => {
  const results = props.data
  let lists
  if (results.length > 0) {
    lists = results.map(list =>
      <ul>
        <li>{list.name}</li>
        <li>{list.latest}</li>
      </ul>
    )
  } else {
    lists= <p>Not Found</p>
  }
  return (
    <div>
      <ul>
        {lists}
      </ul>
    </div>
  )
}

export default Lists
