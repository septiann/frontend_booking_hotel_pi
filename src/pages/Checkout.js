import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { connect } from "react-redux"
import { Helmet } from 'react-helmet'

import Header from 'parts/Header'

import Button from 'elements/Button'
import Stepper, { Numbering, Meta, MainContent, Controller } from 'elements/Stepper'

import BookingInformation from 'parts/Checkout/BookingInformation'
import Payment from 'parts/Checkout/Payment'
import Completed from 'parts/Checkout/Completed'

import { submitBooking } from 'store/actions/checkout'

class Checkout extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    _Submit = (nextStep) => {
        const { data } = this.state
        const { checkout } = this.props
        const payload = new FormData()

        payload.append("image", data.proofPayment[0])
        payload.append("id_item", checkout._id)
        payload.append("duration", checkout.duration)
        payload.append("bookingStartDate", checkout.date.startDate)
        payload.append("bookingEndDate", checkout.date.endDate)
        payload.append("firstName", data.firstName)
        payload.append("lastName", data.lastName)
        payload.append("email", data.email)
        payload.append("phoneNumber", data.phone)
        payload.append("accountHolder", data.bankHolder)
        payload.append("bankFrom", data.bankName)
        // payload.append("bank_id", checkout.bank_id)

        this.props.submitBooking(payload).then( () => {
            nextStep()
        })
    }

    render() {
        const { data } = this.state
        const { checkout, page } = this.props

        if(!checkout)
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
                    <div className="col-6">
                        Silahkan pilih kamar dan atur durasi terlebih dahulu!
                        <div>
                            <Button className="btn mt-5" type="button" onClick={() => this.props.history.goBack()} isLight>Kembali</Button>
                        </div>
                    </div>
                </div>
            </div>
        )

        const steps = {
            bookingInformation: {
                title: "Informasi Pemesanan",
                description: "Silahkan isi data diri Anda di bawah.",
                content: (
                    <BookingInformation data={data} checkout={checkout} ItemDetails={page[checkout._id]} onChange={this.onChange} />
                )
            },
            payment: {
                title: "Pembayaran",
                description: "Ikuti instruksi pembayaran di bawah ini.",
                content: (
                    <Payment data={data} ItemDetails={page[checkout._id]} checkout={checkout} onChange={this.onChange} />
                )
            },
            completed: {
                title: "Konfirmasi Berhasil",
                description: null,
                content: <Completed />
            }
        }

        return (
            <>
                <Helmet>
                    <title>Checkout</title>
                </Helmet>
                <Header isCentered />   

                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                                <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />
                                <Meta data={steps} current={CurrentStep} />
                                <MainContent data={steps} current={CurrentStep} />

                                {CurrentStep === "bookingInformation" && (
                                    <Controller>
                                        {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                                            <Fade>
                                                <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                                                    Lanjutkan
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button className="btn" type="button" isBlock isLight hasShadow onClick={() => this.props.history.goBack()}>
                                            Batal
                                        </Button>
                                    </Controller>
                                )}

                                {CurrentStep === "payment" && (
                                    <Controller>
                                        {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                                            <Fade>
                                                <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={() => this._Submit(nextStep)}>
                                                    Pesan
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button className="btn" type="button" isBlock isLight hasShadow onClick={prevStep}>
                                            Batal
                                        </Button>
                                    </Controller>
                                )}

                                {CurrentStep === "completed" && (
                                    <Controller>
                                        <Button className="btn" type="button" isBlock isPrimary hasShadow onClick={event => window.location.href="/"}>
                                            Kembali ke Halaman Utama
                                        </Button>
                                    </Controller>
                                )}
                            </>
                        )
                    }
                </Stepper>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    checkout: state.checkout,
    page: state.page
})

export default connect(mapStateToProps, {submitBooking})(Checkout)