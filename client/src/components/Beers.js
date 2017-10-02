import React from 'react';
import { 
  Header,
  Segment,
  Divider, 
  Grid, 
  Image, 
  Card,
  Container
} from 'semantic-ui-react';
import axios from 'axios';


class Beers extends React.Component {
  state = {beers: []}

  componentDidMount() {
    axios.get('/api/all_beers')
    .then(res => {
      this.setState({ beers: res.data.entries })
    });
  }
  
  showBeers = () => {
    const { beers } = this.state
    return beers.map ( beer =>
      <div>
          <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card style={styles.beerCard}>
            <Card.Content>
              <Card.Header>{beer.name_display}</Card.Header> 
              <Divider />              
              <Card.Description >
                <span>{beer.description}</span>
              </Card.Description>
            </Card.Content>
          </Card>
            </Grid.Column>
      </div>
    )
  
  }



  render() {
    return(
      <div>
        <Container>
        <br />
          <Header textAlign="center" as="h1">Beers!</Header>
          <br />
            <Grid fluid>
              { this.showBeers() }
            </Grid>
        </Container>
      </div>
      )
    }
}

const styles = {
  beerCard: {
    height: '275px',
    width: '260px',
    marginBottom: '12px'
  },
}

export default Beers;