import React from 'react';

const Event = () => {
    const eventname = [
        {cls : "cardevent mb-5", link : "#", src : "./img/cardevent.png"},
        {cls : "cesarevent", link : "#", src : "./img/cesarevent.png"}
    ]
    return(
        <section id='event' className='d-flex flex-column align-items-center container'>
            {
                eventname.map( (v, x) => {
                    return <div className={v.cls}><a href={v.link}><img src={v.src} /></a>                       
        
            </div>
                })
            }
        </section>
    )
}

export default Event