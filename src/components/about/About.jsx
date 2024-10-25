import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AboutPageHeader from './AboutPageHeader';
import './about.css';

export default function OppositeContentTimeline() {
  return (
    <>
    <AboutPageHeader/>
    <Timeline position="alternate">
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          1974
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#2a52f7', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent className='timeline-description'>Company found Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque vero doloribus itaque provident quas nostrum molestiae earum, eveniet perspiciatis eos inventore aspernatur labore ex voluptatem mollitia quae cupiditate praesentium?</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          1984
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#e10020', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent  className='timeline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea ipsa voluptatem eligendi quasi animi quam beatae ipsam fugiat veritatis nam, accusamus ullam asperiores vel nostrum consectetur soluta autem illum!</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          1994
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#2a52f7', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent  className='timeline-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus, ducimus officia vel aut esse voluptatum hic quasi accusantium ex illo fuga est officiis quisquam, deserunt rerum excepturi sed sequi.</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          2004
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#e10020', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent  className='timeline-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eum, aut corrupti est eligendi cupiditate nesciunt ipsam quis! Accusantium alias laudantium quas nulla pariatur possimus, deserunt esse sapiente totam eos!</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          2014
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#2a52f7', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent  className='timeline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, corporis? Fugiat quia possimus hic reiciendis! Corporis aspernatur accusantium, cupiditate facere repellat molestias. Ex qui, fuga veritatis soluta eum aliquam reprehenderit.</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          2018
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#e10020', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent  className='timeline-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam libero ipsa. Nisi corporis, cupiditate autem dicta fugiat veniam dolores quae iure quas ad debitis fuga, impedit numquam atque mollitia.</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginBottom: '2em'}}>
        <TimelineOppositeContent color="text.secondary" id='timeline-year'>
          2024
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ margin: '20px'}}>
          <TimelineDot sx={{ borderColor: '#2a52f7', backgroundColor: '#F8F9FA'}}/>
          <TimelineConnector sx={{ backgroundColor: '#F8F9FA'}}/>
        </TimelineSeparator>
        <TimelineContent className='timeline-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab natus totam adipisci facere nulla distinctio inventore perspiciatis saepe, voluptatem voluptatum nemo laboriosam fugit? Nulla aut porro quas praesentium temporibus.</TimelineContent>
      </TimelineItem>
    </Timeline>
    </>
  );
}