import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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

type ETButtonProps = {
    value: ExperienceTimelineItem['type'],
    label: string,
    isActive: boolean
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

export function ExperienceTimeline() {

    const [buttons, setButtons] = useState<ETButtonProps[]>([
        {
            value: 'primary',
            label: 'Coding career',
            isActive: true
        },
        {
            value: 'secondary',
            label: '...and beyond',
            isActive: false
        },
    ]);
    const theme = useTheme();

    const selectSection = (value: ETButtonProps['value']) => { // TODO: funcion type
        setButtons(buttons.map(button => {
            button.isActive = button.value === value;
            return button;
        }))
    };

    const isSectionActive = (value: ETButtonProps['value']) => { // TODO: funcion type
        return buttons.some(button => button.value === value && button.isActive);
    }

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    top: '69px',
                    height: '69px',
                    backgroundColor: theme.palette.background.default,
                    backgroundImage: 'none'
                }}>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    {
                        buttons.map((button) =>
                            <Button
                                value={button.value}
                                color={button.isActive ? 'primary' : 'secondary'}
                                onClick={() => selectSection(button.value)}
                                sx={{ my: 2 }}
                            >
                                {button.label}
                            </Button>)
                    }
                </Box>
            </AppBar>
            <Timeline>
                {
                    data.experiences.map((experience, index) => (experience.type === 'primary' || isSectionActive(experience.type)) && <ExperienceTimelineItem {...experience} isTop={index === 0} key={index}></ExperienceTimelineItem>)
                }
            </Timeline>
        </>
    )
}