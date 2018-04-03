import React from 'react';

import {
  Row,
  Col,
  Nav,
  Grid,
  Icon,
  Form,
  Panel,
  Radio,
  Button,
  MenuItem,
  Checkbox,
  HelpBlock,
  PanelBody,
  FormGroup,
  InputGroup,
  SplitButton,
  PanelHeader,
  ButtonGroup,
  FormControl,
  PanelFooter,
  ControlLabel,
  DropdownButton,
  PanelContainer,
} from 'rubix';

class HorizontalForm extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-darkblue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Horizontal form</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form horizontal>
                    <FormGroup controlId='blockhelp'>
                      <Col sm={2} componentClass={ControlLabel}>Client ID</Col>
                      <Col sm={10}>
                        <FormControl type='text' placeholder='' />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId='horizontalpassword'>
                      <Col sm={2} componentClass={ControlLabel}>Client Secret</Col>
                      <Col sm={10}>
                        <InputGroup>
                          <FormControl type='password' placeholder='' />
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-key' />
                          </InputGroup.Addon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId='multiselecthorizontal'>
                      <Col sm={2} componentClass={ControlLabel}>Teans</Col>
                      <Col sm={10}>
                        <FormControl componentClass='select' multiple>
                          <option value='1'>Team 1</option>
                          <option value='2'>Team 2</option>
                          <option value='3'>Team 3</option>
                          <option value='4'>Team 4</option>
                          <option value='5'>Team 5</option>
                        </FormControl>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-blue text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightblue'>submit</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

export default class Controls extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={6} collapseRight>
          <HorizontalForm />
        </Col>
      </Row>
    );
  }
}
