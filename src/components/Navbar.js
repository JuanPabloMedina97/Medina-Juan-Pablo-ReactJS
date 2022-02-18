import React from "react";

function Navbar(){
    return(
        <div className="p-3 bg-black text-white">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-white">Grays</a></li>
              <li><a herf="/" className="nav-link px-2 text-white">Ritual</a></li>
              <li><a href="/" className="nav-link px-2 text-white">TK</a></li>
              <li><a href="/" className="nav-link px-2 text-white">Osaka</a></li>
              <li><a href="/" className="nav-link px-2 text-white">Cuenta</a></li>
            </ul>
    
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Buscar..." aria-label="Search" />
            </form>
    
            <div className="text-end">
              <a href="/infocompra.html"><button type="button" className="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg></button></a>
            </div>
            
          </div>
        </div>
    );
}

export default Navbar;