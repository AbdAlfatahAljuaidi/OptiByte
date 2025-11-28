import React from 'react'
import Sectiontitle from './Sectiontitle'
import Content from '../components/About/Content'
import Details from '../components/About/Details'
import SkillsSection from '../components/About/SkillsSection'

const About = () => {
  return (
    <div className='my-24'>
        <Sectiontitle title="ABOUT US" />
        <Content />
        <Details />
        <SkillsSection />
    </div>
  )
}

export default About