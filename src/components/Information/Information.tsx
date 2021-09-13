import { Component } from 'react';
import './information.css';

class Text extends Component {
  render() {
    return (
      <div className="paragraph">
        <div className="sentence1">
          Be Active
        </div>
        <div className="sentence2">
          Barnsley Brew Coffee
        </div>
        <div className="paragraph2">
          Coffee is a brewed drink prepared from roasted coffee beans,
          the seeds of berries from certain Coffea species. When coffee berries turn from.
        </div>
      </div>
    );
  }
}

export default Text;