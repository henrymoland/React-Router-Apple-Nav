import React from 'react';

const Navwrapper = props => {
    const {branding} = props;

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0" >
        <div className="container">
            <a href="/" className="navbar-brand">
                 <i class="fab fa-apple"></i>
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto py-2">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Mac
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            iPad
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            iPhone
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Watch
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            TV
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Music
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Support
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i class="fas fa-search"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i class="fas fa-shopping-bag"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default Navwrapper;