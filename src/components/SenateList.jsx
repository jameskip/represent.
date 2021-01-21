import React from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography' 
import Grid from '@material-ui/core/Grid' 
import CircularProgress from '@material-ui/core/CircularProgress' 

import RepCard from './RepCard' 

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    position: 'relative',
    top: 60
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const SenateList = props => {
  const classes = useStyles()
  const senatePayload = props.filteredSenateList

  const renderSenate = members => members.senate.map((curr, i) => <RepCard key={i} member={curr} />)

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Senate
      </Typography>
      {!senatePayload && <CircularProgress />}
      <Grid container spacing={3} justify="center" alignItems="center">
        {senatePayload && renderSenate(senatePayload)}
      </Grid>
    </div>

  )
}

export default SenateList
