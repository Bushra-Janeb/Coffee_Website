import { Component } from 'react';

import './form.css';

class Form extends Component {

  state = {
    isEdit: false,
    id: 0,
    coffee_type: '',
    coffee_price: null,
    description: '',
    image_source: "",
  }

  onSubmit = async (e: any) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      const image = await fetch('localhost:3000/upload', requestOptions)
      const response = await fetch('localhost:3000/graphql', requestOptions)
      const data = await response.json()
      this.setState((prevState) => ({ ...prevState }))
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    //@ts-ignore.
    const prop = this.props?.location.state
    if (prop) {
      this.setState((prevState) => ({ ...prevState, ...prop?.cof }))
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="form-wrapper">
            <div className="title">
              <p> Barnsley Brew Coffee </p>
            </div>
            <form className="form" onSubmit={this.onSubmit} method='POST'>
              <div className="img_preview">
              </div>
              {this.state.image_source && <img className="image" src={this.state.image_source} alt="cannot find" />}
              <div className="form_group">
                <label htmlFor="choose-file">Choose Coffee Image </label>
                <input type="file" id="choose_file" className="form_control" name='image_source' />
              </div>

              <div className="form_group">
                <label htmlFor="coffee_name">Coffee Name</label>
                <input type="text" id="coffee_name" className="form_control" defaultValue={this.state.coffee_type} name='coffee_type' />
              </div>

              <div className="form_group">
                <label htmlFor="coffee_description"> Description </label>
                <input type="text" id="coffee_description" className="form_control" defaultValue={this.state.description} name='description' />
              </div>
              <div className="form_group">
                <label htmlFor="coffee_price"> Price </label>
                <input type="number" id="coffee_price" className="form_control" defaultValue={this.state.coffee_price || '' || 0} name='price' />
              </div>

              <button className="submit"> Submit </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
