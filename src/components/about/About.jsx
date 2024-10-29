import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { motion } from 'framer-motion';
import AboutPageHeader from './AboutPageHeader';
import './about.css';

export default function OppositeContentTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AboutPageHeader />
      <div className="timeline-container">
        <Timeline position="alternate" className='whole-timeline'>
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} className='timeline-item'>
              <TimelineOppositeContent className='timeline-year'>
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className={`timeline-dot ${index % 2 === 0 ? 'blue-dot' : 'red-dot'}`} />
                <TimelineConnector className='timeline-connector' />
              </TimelineSeparator>
              <TimelineContent className='timeline-description'>
                <motion.div 
                  className='timeline-content-wrapper'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className='timeline-title'>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </motion.div>
  );
}

const timelineData = [
  {
    year: '1974',
    title: 'Company Founded',
    description: 'Our journey began with a vision to revolutionize the industry...'
  },
  {
    year: '1984',
    title: 'International Expansion',
    description: 'We took our first steps into international markets...'
  },
  // Add more timeline items with real content
];