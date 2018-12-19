import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'center',
    margin:'auto',
    height:'100px',
    width:'100px'
  },
};

const PokemonCard = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          className={classes.media}
          height="140"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonCard);
