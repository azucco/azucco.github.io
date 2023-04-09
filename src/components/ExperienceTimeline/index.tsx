import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import * as data from '../../data';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export type ExperienceTimelineItem = {
    years: string; 
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };  
    company: string;  
    job: string;  
    description: string; 
    type: 'focusOn' | 'beyond'; 
}

function ExperienceTimelineItem ({years, Icon, company, job, description, isTop} :ExperienceTimelineItem & { isTop :boolean }) :JSX.Element {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {years}
            </TimelineOppositeContent>
            <TimelineSeparator>
                { !isTop && <TimelineConnector />}
                <TimelineDot>
                <Icon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                {company}
                </Typography>
                <Typography>{job}</Typography>
                <Typography>{description}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export function ExperienceTimeline () {
    return (
        <Timeline 
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}
        >
            {
                data.experiences.map((experience, index) => <ExperienceTimelineItem {...experience } isTop={index === 0} key={index}></ExperienceTimelineItem>)
            }
        </Timeline>
    )
}