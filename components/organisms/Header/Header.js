import { PureComponent } from 'react';

import Icon from '../../atoms/Icon';

class MyHeader extends PureComponent {

  render() {
    return (
      <header>
        <nav>
          <div>
            <button className="Header-user">
              <Icon user viewBox="0 0 12 14" width="12px" height="14px" fill="#333" />
              <span>Sign In</span>
            </button>
          </div>
          <div>
            <span className="Header-link">Next Dashboard</span>
          </div>
          <div>
            <Icon logo viewBox="0 0 163 140" width="40px" height="35px" fill="#999" />
          </div>
        </nav>
      </header>
    )
  }
}

export default MyHeader;