import { PureComponent } from 'react';

import Layout from '../Layout';

class HomePage extends PureComponent {

  renderComponent = () => {
    return (
      <h1>Home Page</h1>
    )
  }

  render() {
    return (
      <Layout title="Next Dashboard">
        {this.renderComponent()}
      </Layout>
    )
  }
}

export default HomePage;