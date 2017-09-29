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

class Glassware extends React.Component {
  state = { glassware: '' };

  componentDidMount() {
    axios.get('/api/all_glassware')
      .then(res => {
        this.setState({ glassware: res.data.file })
      })
      .catch( error => {
        console.log(error.response)
      });
  }

  showGlassware = () => {
    const { glassware } = this.state;
    return (
      // glassware.map ( beer =>
      <div>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card>
            <Card.Content>
              <Card.Header>{glassware.name}</Card.Header>
              <Card.Meta>
                <span>{glassware.alcohol}</span>
              </Card.Meta>                
              <Card.Meta>
                <span>{glassware.brewery}</span>
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
          <Header textAlign="center" as="h1">Glassware!</Header>
            <Grid>
              { this.showGlassware() }
            </Grid>
      </div>
    )
  }
}

export default Glassware;