import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "./Carousel3.css"
import { DefaultSettingsT } from './Settings.tsx';
// import { url } from 'inspector';
const App = () => {


    return (
        <div className='background' style={{ marginTop: "0px", color: "#494949" }}>
            <h4 style={{ paddingLeft: 20, paddingTop: 20, fontSize: 35 }}>MEET OUR DOCTORS:</h4>
            <br />
            <Carousel
                className="SecondExample"
                {...DefaultSettingsT}
            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
            <br />
        </div>
    )
}


type Item = {
    name: string,
    description: string,
    color: string,
    href: string,
    image: string,
    content: string
}

interface ProjectProps {
    item: Item
}

function Project({ item }: ProjectProps) {
    return (
        <div className='doccontainer' style={{ overflowX: "hidden", width: "100%", backgroundColor: item.color, display: "flex", flexDirection: "row-reverse" }}>
            <div >
                <p className='contentdoc' >
                    {item.content}
                </p>
                <a className='Contact' href={item.href} target='_blank'>Contact</a>
            </div>
            <div
                className="Project"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "40px",
                    width: "800px"
                }}
            >
                <h5 className='titledoc'>{item.name}</h5>
                <br />
                <p className='descdoc'>{item.description}</p>
                <img style={{ objectFit: "cover" }} className='profile' src="https://st3.depositphotos.com/17601448/32019/v/450/depositphotos_320194128-stock-illustration-one-line-doctor-holding-pen.jpg" alt="" />


            </div>
        </div>
    )
}

const items: Item[] = [
    {
        name: "Dr. Sarah Reynolds",
        description: "Child and Adolescent Psychology",
        color: "#64ACC8",
        href: '',
        image: "",
        content: "Dr. Sarah Reynolds is a dedicated Child and Adolescent Psychologist known for her compassionate approach in working with young individuals. With a wealth of experience, she assists children and adolescents in coping with a wide range of emotional and behavioral challenges. Her expertise lies in providing a safe and supportive environment for clients to explore their feelings and develop the necessary skills to navigate the complexities of adolescence and childhood."

    },
    {
        name: "Dr. Marcus Mitchell",
        description: "Clinical Neuropscience",
        color: "#7D85B1",
        href: '',
        image: "",
        content: "Dr. Marcus Mitchell is a Clinical Neuropsychologist recognized for his profound understanding of the brain and behavior. With a keen focus on assessing cognitive and emotional functioning, he helps individuals of all ages facing neurological or psychological issues. Dr. Mitchell's evaluations and treatments are vital in diagnosing and addressing conditions like dementia, traumatic brain injury, and other brain-related disorders."
    },
    {
        name: "Dr. Emily Anderson",
        description: " Marriage and Family Therapy",
        color: "#CE7E78",
        href: '',
        image: "",
        content: "Dr. Emily Anderson is a skilled Marriage and Family Therapist, committed to strengthening the bonds within families and couples. Her empathetic and solution-oriented approach helps individuals navigate relationship challenges and foster healthier connections. Dr. Anderson guides clients through effective communication, conflict resolution, and overall relationship enhancement."
    },
    {
        name: "Dr. Jonathan Collins",
        description: "Substance Abuse Counseling",
        color: "#C9A27E",
        href: '',
        image: "",
        content: "Dr. Jonathan Collins is a Substance Abuse Counselor known for his unwavering support in the journey to recovery. He specializes in helping individuals break free from the grip of addiction and substance abuse. Dr. Collins employs evidence-based techniques, creating tailored treatment plans that address the physical, emotional, and social aspects of addiction, ultimately facilitating lasting sobriety and a brighter future."
    }
]

export default App;
