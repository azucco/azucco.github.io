import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export type skillCardContent = {
    title: string, 
    topic: string, 
    content: string
}

export function SkillCard({title, topic, content} :skillCardContent) {
  return (
    <Card sx={{ bgcolor: '#252529', color: 'white', borderRadius: '20px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
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
      <CardActions>
        <Button size="small">Proficency</Button>
      </CardActions>
    </Card>
  );
}
