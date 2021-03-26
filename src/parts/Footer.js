import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">Our Careers</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/terms-conditions">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@inncation.id">support@inncation.id</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622104091996">021 - 0904 - 1996</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span>Inncation, Cilandak Barat, Jakarta Selatan</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2021 - All rights reserved - Inncation
                    </div>
                </div>
            </div>
        </footer>
    )
}
