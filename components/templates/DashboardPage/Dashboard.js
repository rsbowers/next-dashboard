import {PureComponent} from 'react';

import Layout from '../Layout';
import {
  Column,
  Container,
  Row
} from '../../atoms/Layout';

class Dashboard extends PureComponent {

  renderComponent = () => {
    return (
      <Container>
        <h1>My Dashboard</h1>
        <Row>
          <Column debug>1</Column>
          <Column debug>2</Column>
          <Column debug>3</Column>
        </Row>
        <Row>
          <Column debug>1</Column>
          <Column debug flexGrow="3">2</Column>
          <Column debug>3</Column>
        </Row>
        <Row>
          <Column debug>1</Column>
          <Column debug flexGrow="2">2</Column>
          <Column debug flexGrow="2">3</Column>
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <Layout title="Next DFS">
        {this.renderComponent()}
      </Layout>
    )
  }
}

export default Dashboard;