import React from 'react'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 z-1 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('sports')}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('business')}>Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('entertainment')}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('general')}>General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('health')}>Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('science')}>Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>props.takecat('technology')}>Technology</a>
                        </li>
                        
                    
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
