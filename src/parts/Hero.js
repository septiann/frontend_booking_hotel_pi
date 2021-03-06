import React from 'react'
import Fade from 'react-reveal/Fade'

import ImageHero from 'assets/images/img_hero.jpg'
import ImageHeroFrame from 'assets/images/img_hero_frame.jpg'
import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTraveler from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: 'smooth'
        })
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Membuat Staycation<br />
                            Lebih Hangat dan Lebih Dekat
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-100" style={{ lineHeight: "170%" }}>
                            Berlibur dengan waktu yang lebih luang untuk lebih dekat dan lebih hangat bersama pasangan, keluarga atau sahabat.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Temukan Hotel Staycation Kamu
                        </Button>

                        <div className="row res-icon" style={{ marginTop: 80 }}>
                            <div className="col-auto res-icon-2" style={{ marginRight: 35}}>
                                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travellers} travelers`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travellers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        wisatawan
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto res-icon-2" style={{ marginRight: 35}}>
                                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} treasures`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        lokasi wisata
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto res-icon-2">
                                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} cities`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        penginapan
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5 photo-hide">
                        <div style={{ width: 520, height: 410 }}>
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1, borderRadius: "100px 15px 15px 15px" }} />
                            <img src={ImageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0" }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
