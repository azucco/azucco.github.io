import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { RatingProps } from '@mui/material/Rating';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { IconType } from 'react-icons/lib';

export type skillCardContent = {
  Icon: IconType
  title: string,
  topic: string,
  content: string;
  rating: 1 | 2 | 3 | 4 | 5,
  color: string;
}

export const id: string = 'skills';

interface StyledRatingProps {
  width: string;
  color: string;
}

const StyledRating = styled(
  ({ width, color, ...other }: RatingProps & StyledRatingProps) => <Rating {...other} />)(({ width, color }: StyledRatingProps) => ({
    '& .MuiRating-decimal': {
      width: width,
      transition: 'width 5s'
    },
    '& .MuiRating-iconFilled': {
      backgroundColor: color,
    },
    '& .MuiRating-iconEmpty': {
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }));

const RatingElement = () => <div style={{ height: '10px' }}></div>

export function SkillCard({ Icon, title, topic, content, rating, color, isVisible }: skillCardContent & { isVisible: boolean }) {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      maxWidth: '95%'
    }}>
      <CardContent>
        <Icon style={{ fontSize: '32px' }}></Icon>
        <Typography gutterBottom>
          {topic}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2" color="secondary">
          {content}
        </Typography>
      </CardContent>
      <Tooltip title={(100 / 5 * rating) + '% of proficency'}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', cursor: 'help' }}>
          <StyledRating
            width={isVisible ? (100 / 5) + '%' : '0%'}
            color={color}
            defaultValue={rating}
            readOnly
            precision={0.5}
            sx={{ display: 'flex' }}
            icon={<RatingElement />}
            emptyIcon={<RatingElement />}
          />
        </div>
      </Tooltip>
    </Card>
  );
}