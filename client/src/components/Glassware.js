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


class Glassware extends React.Component {
  state = {glassware: []}

  componentDidMount() {
    axios.get('/api/all_glassware')
    .then(res => {
      this.setState({ glassware: res.data.entries })
    });
  }
  
  showGlassware = () => {
    const { glassware } = this.state
    return glassware.map ( glassware =>
      <div>
          <Grid.Column computer={8} tablet={8} mobile={16}>
          <Card centered style={styles.glasswareCard}>
            <Card.Content>
              <Card.Header>{glassware.type_display}</Card.Header> 
              <Divider />              
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
          <Header textAlign="center" as="h1">glassware!</Header>
          <br />
            <Grid>
              { this.showGlassware() }
            </Grid>
        </Container>
      </div>
      )
    }
}

const styles = {
  glasswareCard: {
    // height: '275px',
    width: '280px',
    marginBottom: '10px'
  },
}

export default Glassware;