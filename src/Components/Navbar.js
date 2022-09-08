import React from 'react'
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li> */}
            </ul>
            { props.searchBar &&
            (<form className="d-flex" role="search">
              <input className={`form-control me-2 bg-${props.mode} text-${props.mode === 'dark'? 'light' : 'dark'}`} type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode === 'dark'? 'light' : 'dark'}`} type="submit">Search</button>
            </form>)}
            <div className={`form-check form-switch mx-5 text-${props.mode === 'dark'? 'light' : 'dark'} `}>
              <input className="form-check-input dark" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark'? 'Light' : 'Dark'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    searchBar: PropTypes.bool
}

Navbar.defaultProps = {
    // title: 'Site Title Here',
    aboutText: 'About',
}