import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

export type skillCardContent = {
    title: string, 
    topic: string, 
    content: string;
    rating: 1 | 2 | 3 | 4 | 5,
    color: string;
}

export const id: string = 'skills';

interface StyledRating {
  color: string;
}

const StyledRating = styled(
  ({ color, ...other } : any) => <Rating {...other} />)({ // TODO: fix type
  '& .MuiRating-decimal': {
    width: '20%',
  },
  '& .MuiRating-iconFilled': {
    backgroundColor: (props: StyledRating) => props.color,
  },
  '& .MuiRating-iconEmpty': {
    backgroundColor: '#32a852',
  },
});

const RatingElement = () => <div style={{ height: '10px' }}></div>

export function SkillCard({title, topic, content, rating, color} :skillCardContent) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          {topic}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <StyledRating
        color={color}
        defaultValue={rating}
        readOnly 
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        sx={{display: 'flex'}}
        icon={<RatingElement />}
        emptyIcon={<RatingElement />}
      />
    </Card>
  );
}
