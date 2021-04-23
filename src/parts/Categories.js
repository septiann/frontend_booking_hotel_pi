import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'

export default function Categories({ data }) {
    return data.map((category, index1) => {
        if(category.item_id.length === 0) return null
        
        return (
            <section className="container" key={`category-${index1}`}>
                <Fade bottom>
                    <h4 className="mb-3 font-weight-medium">
                        {category.name}
                    </h4>
                    <div className="container-grid">
                        {
                            ( category.item_id.map((item, index2) => {
                                return <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`}>
                                    <Fade bottom delay={ 300 * index2 }>
                                        <div className="card">
                                            {item.is_popular && <div className="tag"> Popular <span className="font-weight-light">Choice</span> </div>}
                                            <figure className="img-wrapper" style={{ height: 180 }}>
                                                <img src={item.image_id[0] ? `${process.env.REACT_APP_HOST}/${item.image_id[0].image_url}` : ""} alt={item.name} className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-800">
                                                    <h5 className="h4">{item.title}</h5>
                                                </Button>
                                                <span className="text-gray-500">
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            }) )
                        }
                    </div>
                </Fade>
            </section>
        )
    })
}
