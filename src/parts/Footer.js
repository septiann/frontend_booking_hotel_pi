import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3 mr-5" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline" style={{ fontSize: '14px' }}>
                            Semua yang seru dan menyenangkan dari liburan, lebih mudah dan lebih murah.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2 font-weight-bold">Bantuan dan Lainnya</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/payment-confirmation">Konfirmasi Pembayaran</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Mulai Pesan</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Pembayaran Kami</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2 font-weight-bold">Tentang InnCation</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">Karir</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privasi</Button>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/terms-conditions">Syarat & Ketentuan</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2 font-weight-bold">Hubungi Kami</h6>
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
                                <span>InnCation Office, Tugu, Cimanggis, Depok</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright { new Date().getFullYear() } - All rights reserved - InnCation
                    </div>
                </div>
            </div>
        </footer>
    )
}
