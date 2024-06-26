import React, { Component } from 'react'

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </a>
        <ul class="dropdown-menu">
          <li><a className="dropdown-item" href="#">Business</a></li>
          <li><a className="dropdown-item" href="#">Entertainment</a></li>
          <li><a className="dropdown-item" href="#">General</a></li>
          <li><a className="dropdown-item" href="#">Health</a></li>
          <li><a className="dropdown-item" href="#">Science</a></li>
          <li><a className="dropdown-item" href="#">Sports</a></li>
          <li><a className="dropdown-item" href="#">Technology</a></li>
        </ul>
      </div>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar

