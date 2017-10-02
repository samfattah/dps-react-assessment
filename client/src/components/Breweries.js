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


class Breweries extends React.Component {
  state = {breweries: []}

    componentDidMount() {
      axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ breweries: res.data.entries })
      });
    }
  
  showBreweries = () => {
    const { breweries } = this.state
    return breweries.map ( brewery =>
      <div>
          <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card centered style={styles.breweryCard}>
            <Card.Content>
              <Card.Header>{brewery.name}</Card.Header> 
              <Divider />              
              <Card.Description>
                <span>{brewery.description}</span>
              </Card.Description>
              <Card.Meta>
                <span>{brewery.location}</span>
              </Card.Meta>
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
          <Header textAlign="center" as="h1">Breweries!</Header>
          <br />
            <Grid>
              { this.showBreweries() }
            </Grid>
        </Container>
      </div>
      )
    }
}

const styles = {
  breweryCard: {
    height: '275px',
    width: '260px',
    marginBottom: '12px'
  },
}

export default Breweries;