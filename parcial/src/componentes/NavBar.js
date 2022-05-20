import React from 'react'

export const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">HOME <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/tablaBanners">Tabla<span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/demoBanner">DemoBanner <span className="sr-only"></span></a>
                </li>

            </ul>
        </div>
    </nav>
</div>
  )
}

export default NavBar;