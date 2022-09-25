import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from '@mui/icons-material/Work';
import Navbar from '../components/Navbar';

function Experience() {
    return (
        <div className='experience'>
            <Navbar/>
            <VerticalTimeline lineColor=' #c6c84d'>
                <VerticalTimelineElement className='vertical-timeline-elment--education'
                date="2008 - 2012"
                iconStyle={{background: "black", color: "yellow"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Parkwood High School, Monroe, N.C.
                        </h3>
                        <p>High School Diploma</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elment--education'
                date="May 2022 - August 2022"
                iconStyle={{background: "black", color: "yellow"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        UNCC, Charlotte, N.C.
                        </h3>
                        <p1>Full-Stack Coding Certificate</p1>
                        <p>This Full-Stack Coding Bootcamp is a 3-month immersive experience
that teaches you the skills needed to be a full stack engineer.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elment--education'
                date="Feb 2013 - Nov 2013"
                iconStyle={{background: "black", color: "yellow"}}
                icon={<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>
                       Pismo Coast Management, Pismo Beach, CA
                        </h3>
                        <p1>Assistant Property Manager</p1>
                        <p>Actively follow-up with prospects and hot leads.Followed up with prospects throughout the
sales process.Showed residential properties and explained the features, value and benefits of
available homes.Advertised properties to the general public via networking, brochures, ads and
multiple listing services to maximize exposure.</p>
                </VerticalTimelineElement>


                <VerticalTimelineElement className='vertical-timeline-elment--education'
                date="March 2014 - July 2014"
                iconStyle={{background: "black", color: "yellow"}}
                icon={<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>
                    Action Lawn Care, Waxhaw, NC
                        </h3>
                        <p1>Landscaper</p1>
                        <p>Waxhaw, North Carolina Loading and unloading equipment to/from truck, mowing, trimming
shrubs, edging, planting, aerating, laying sod, and leaf-blowing</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elment--education'
                date="August 2014 - October 2015"
                iconStyle={{background: "black", color: "yellow"}}
                icon={<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>
                    Trader Joes, Santa Barbara, CA/ Charlotte, NC
                        </h3>
                        <p1>Crew member</p1>
                        <p>Duties- customer service, register operations, unloading trucks, receiving deliveries
daily, breaking down pallets of product, distributing to correct locations, putting
product away, cleaning, organizing, preparing store for closing</p>
                </VerticalTimelineElement>

                
            </VerticalTimeline>
            <div className='accomplishments'>
            <h4>Accomplishments</h4>
            <ol>
                <li>Pismo Coast Management: Generated a long term lease agreement with rates that exceeded
the expectations and average sales for the area.</li>
<li>Action Lawn Care: Received a raise within the first month and began achieving weekly
bonuses for hard work in addition to overtime</li>
<li>Trader Joe's: Received a raise and ordering privileges in first six month</li>
            </ol>
            </div>
            </div>
    )
}

export default Experience