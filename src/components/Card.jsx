import React from 'react'
import "../styles/Card.css"
import dateFormat from 'dateformat'


function Card({projectdata}) {
  return (
    <>
    <article  className="card">
    <header className="card-header">
      <p>Created on {dateFormat(new Date(projectdata?.created_at),"longDate")} </p>
      <a href="item.html_url"><h2>{projectdata?.name.length > 30 ? `${projectdata?.name.substring(0, 20)}...` : projectdata?.name}</h2></a>
    </header>

    <div className="card-author"> 
      <p>{projectdata?.description}</p>
      <a href={`${projectdata?.html_url}`}>{projectdata?.html_url.length > 30 ? `${projectdata?.html_url.substring(0, 30)}...` : projectdata?.html_url}</a>
    </div>
    <div className="tags">
      <a href="/">{projectdata?.language}</a>
  </div>
  </article>
    </>
  )
}

export default Card