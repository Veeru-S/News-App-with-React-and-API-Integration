import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props; 
    return (
      <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AImage_not_available.png&psig=AOvVaw1lSuOno8NmC7PBNzEwwOWc&ust=1718437521917000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj25c3M2oYDFQAAAAAdAAAAABAE":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
