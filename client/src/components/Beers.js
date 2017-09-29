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


class Beers extends React.Component {
  state = { beers: '' };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data.file })
      })
      .catch( error => {
        console.log(error.response)
      });
  }

  showBeers = () => {
    const { beers } = this.state;
    return (
      // beers.map ( beer =>
      <div>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card>
            <Card.Content>
              <Card.Header>{beers.name}</Card.Header>
              <Card.Meta>
                <span>{beers.alcohol}</span>
              </Card.Meta>                
              <Card.Meta>
                <span>{beers.brewery}</span>
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
          <Header textAlign="center" as="h1">Beers!</Header>
            <Grid>
              { this.showBeers() }
            </Grid>
      </div>
    )
  }
}

export default Beers;