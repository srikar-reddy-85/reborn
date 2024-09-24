import React from 'react'
import './Service.css'
import ServiceCard from './ServiceCard'

export default function Services() {
    return (
        <div className='service-container' style={{ display: "flex", backgroundColor: "white" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <ServiceCard color="blue" imgurl={"https://c7.alamy.com/comp/KF55MX/beer-bottle-and-glass-with-beer-isolated-on-white-background-continuous-KF55MX.jpg"} title={"Alcohol rehabilation"} fact={"The harmful use of alcohol is a causal factor in more than 200 disease and injury conditions."} />
                <ServiceCard color="green" imgurl={"https://i.pinimg.com/564x/14/c0/9d/14c09d1193eadd30ec2a5124f6d8e84d.jpg"} title={"Tobacco rehabilation"} fact={"Smoking causes about 90% of lung cancer deaths, and 80% of deaths from chronic obstructive pulmonary disease (COPD)."} />
                <ServiceCard color="yellow" imgurl={"https://miro.medium.com/v2/resize:fit:750/format:webp/0*MIpUdaRiO5AGZEYT"} title={"Opioids rehabilation"} fact={"Few opioid deaths occur among children younger than 15"} />
            </div>
            <div className='item shark-3'>
                <img className='simage' style={{ mixBlendMode: "multiply" }} src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-continuous-one-line-drawing-teenager-man-reading-book-vector-illustration-minimalist-png-image_5045422.jpg" width="250" alt="" />
            </div>
        </div>
    )
}
