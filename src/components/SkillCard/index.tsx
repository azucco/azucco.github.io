import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { RatingProps } from '@mui/material/Rating';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

export type skillCardContent = {
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
    },
    '& .MuiRating-iconFilled': {
      backgroundColor: color,
    },
    '& .MuiRating-iconEmpty': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }));

const RatingElement = () => <div style={{ height: '10px' }}></div>

export function SkillCard({ title, topic, content, rating, color }: skillCardContent) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          {topic}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <StyledRating
        width='20%'
        color={color}
        defaultValue={rating}
        readOnly
        precision={0.5}
        sx={{ display: 'flex' }}
        icon={<RatingElement />}
        emptyIcon={<RatingElement />}
      />
    </Card>
  );
}
