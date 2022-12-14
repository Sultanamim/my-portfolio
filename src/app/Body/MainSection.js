import React from 'react';
import AboutSection from './AboutSection';
import FactSection from './FactSection';
import SkillSection from './SkillSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './TestimonialSection';
import ContactSection from './ContactSection';

export default function MainSection() {
  return (
    <div id="main" className='section-bg'>
      <AboutSection />
      <FactSection />
      <SkillSection />
      <ServiceSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  )
}
