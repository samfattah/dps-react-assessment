import React from 'react';
import { 
  Header,
  Segment,
  Divider, 
  Grid, 
  Image, 
  Card 
} from 'semantic-ui-react';
import axios from 'axios';

class Breweries extends React.Component {
  state = { breweries: '' }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ breweries: res.data })
      })
      // .catch( error => {
      //   console.log(error.response)
      // });
  }

  showBreweries = () => {
    const { breweries } = this.state;
    return (
      // breweries.map ( brewery =>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card>
            <Card.Content>
              <Card.Header>{breweries.name}</Card.Header>
              {/* card.meta */}
            </Card.Content>
          </Card>
        </Grid.Column>
      // )
    )
  }

  render() {
    return (
      <div>
        <Header textAlign="center" as="h1">Breweries!</Header>
          <Grid>
            { this.showBreweries() }
          </Grid>
      </div>
    )
  }
}

export default Breweries;