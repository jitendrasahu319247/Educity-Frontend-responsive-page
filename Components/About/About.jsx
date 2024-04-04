import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} className='about-img' />
                <img src={play_icon} className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Whethwer you aspire to become a teacher, administrator, counselor, or education leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About
