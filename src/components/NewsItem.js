import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description, imageURL, newsURL, author, publishedDate,source} = this.props
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span>

          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedDate).toGMTString()}</small></p>
            <a href={newsURL} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
       </div>
       
      </div>
    )
  }
}
