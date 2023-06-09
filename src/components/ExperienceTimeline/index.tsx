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
import { useTheme } from '@mui/material/styles';

import * as data from '../../data';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Chip, SvgIconTypeMap, useMediaQuery } from '@mui/material';

export type ExperienceTimelineItem = {
    years: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    company: string;
    city: string;
    job: string;
    description: string;
    type: 'focusOn' | 'beyond';
}

export const id: string = 'experience';

function ExperienceTimelineItem({ years, Icon, company, city, job, description, type, isTop }: ExperienceTimelineItem & { isTop: boolean }): JSX.Element {

    const theme = useTheme();

    return (
        <TimelineItem position={type === 'focusOn' ? 'left' : 'right'}>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {years}
            </TimelineOppositeContent>
            <TimelineSeparator>
                {!isTop && <TimelineConnector />}
                <TimelineDot>
                    <Icon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography sx={{ fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? '1.1rem' : '1.25rem' }}>
                    {company} {city !== '' && <Chip label={city} size="small"  />}
                </Typography>
                <Typography>
                    {job}
                </Typography>
                <Typography sx={{ fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? '0.80rem' : '0.95rem' }}>
                    {description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export function ExperienceTimeline() {
    return (
        <Timeline>
            {
                data.experiences.map((experience, index) => <ExperienceTimelineItem {...experience} isTop={index === 0} key={index}></ExperienceTimelineItem>)
            }
        </Timeline>
    )
}