import React, { Component } from 'react';
import {
  Form,
  FormControl,
  Button,
  FormLabel,
  FormGroup,
} from 'react-bootstrap';

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: '',
      present: '',
    };
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            {/* <ControlLabel>Person</ControlLabel> */}
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            {/* <ControlLabel>Person</ControlLabel> */}
            <FormLabel>present</FormLabel>
            <FormControl
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
