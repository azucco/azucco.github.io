import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppBar from '@mui/material/AppBar';
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
    type: 'primary' | 'secondary';
}

export const id: string = 'experience';

function ExperienceTimelineItem({ years, Icon, company, city, job, description, type, isTop }: ExperienceTimelineItem & { isTop: boolean }): JSX.Element {

    const theme = useTheme();

    return (
        <TimelineItem position={type === 'primary' ? 'left' : 'right'}>
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
                <TimelineDot color={type}>
                    <Icon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography color={type} sx={{ fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? '1.1rem' : '1.25rem' }}>
                    {company}
                </Typography>
                {city !== '' && <Chip label={city} size="small" />}
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

function ColorToggleButton() {
  const [alignment, setAlignment] = useState('secondary');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="primary" sx={{ borderRadius: '25px' }} >Coding career</ToggleButton>
      <ToggleButton value="secondary" sx={{ borderRadius: '25px' }}>...and beyond</ToggleButton>
    </ToggleButtonGroup>
  );
}

export function ExperienceTimeline() {
    return (
        <>
            <AppBar 
                position="sticky"
                sx={{
                // borderBottom: scrollTop === 0 ? 'none' : `solid 1px ${theme.palette.divider}`,
                backgroundColor: 'transparent',
                // transition: isTransitionEnabled ? 'background-color 0.5s' : '',
                // backgroundImage: 'none'
            }}>
                <ColorToggleButton/>
            </AppBar>
            <Timeline>
                {
                    data.experiences.map((experience, index) => <ExperienceTimelineItem {...experience} isTop={index === 0} key={index}></ExperienceTimelineItem>)
                }
            </Timeline>
        </>
    )
}