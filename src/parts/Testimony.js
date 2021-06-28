import React from 'react'
import Fade from 'react-reveal/Fade'

import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'

import Star from 'elements/Star'
import Button from 'elements/Button'

export default function Testimony({ data }) {
    return (
        <Fade bottom>
            <section className="container res-container">
                <div className="row align-items-center">
                    <div className="col-auto photo-hide" style={{ marginRight: 60 }}>
                        <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                            <img src={`${process.env.REACT_APP_HOST}/${data.image_url}`} alt="Testimonial" className="position-absolute" style={{ zIndex: 1, borderRadius: '15px 15px 100px 15px' }} />
                            <img src={TestimonyAccent} alt="Testimonial Frame" className="position-absolute" style={{ margin: `-30px 0 0 -30px` }} />
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="font-weight-bolder res-testi-title" style={{ marginBottom: 40 }}>
                            {data.name}
                        </h4>
                        <Star value={data.rate} width={35} height={35} spacing={4} />
                        <h5 className="h2 font-weight-light line-height-2 my-3">
                            {data.content}
                        </h5>
                        <span className="text-gray-500">
                            {data.family_name}, {data.family_occupation}
                        </span>
                        <div className="res-button-testi">
                            <Button className="btn px-5" style={{ marginTop: 40 }} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
                                Baca Cerita Mereka
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
