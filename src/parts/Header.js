import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

import MenuMobile from 'parts/MenuMobile'

export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    if(props.isCentered)
    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            Inn<span className="text-gray-900">Cation.</span>
                        </Button>
                    </div>
                </div>
            </header>
        </Fade>
    )
    
    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <BrandIcon />
                        {/* <button class="navbar-toggler" onClick={handleToggle} type="button">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <MenuMobile />
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/">
                                        Beranda
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                    <Button className="nav-link" type="link" href="/browse-by">
                                        Telusuri
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                    <Button className="nav-link" type="link" href="/stories">
                                        Testimonial
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/promo")}`}>
                                    <Button className="nav-link" type="link" href="/promo">
                                        Promo
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Fade>
    )
}
