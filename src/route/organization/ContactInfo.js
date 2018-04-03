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

class DefaultForm extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-green fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Default form</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form>
                    <FormGroup controlId='emailaddress'>
                      <ControlLabel>Email address</ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-mail' />
                        </InputGroup.Addon>
                        <FormControl autoFocus type='email' placeholder='Email address' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='password'>
                      <ControlLabel>Password</ControlLabel>
                      <InputGroup>
                        <FormControl type='password' placeholder='Password' />
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-key' />
                        </InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='withIcon'>
                      <ControlLabel>With icon</ControlLabel>
                      <FormControl type='text' placeholder='Search' />
                      <FormControl.Feedback>
                        <Icon bundle='fontello' glyph='search' />
                      </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId='inputWithIcon'>
                      <ControlLabel>Input with Icon</ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-alert' />
                        </InputGroup.Addon>
                        <FormControl type='text' placeholder='Search' />
                        <FormControl.Feedback>
                          <Icon bundle='fontello' glyph='search' />
                        </FormControl.Feedback>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='disabled'>
                      <ControlLabel>Disabled</ControlLabel>
                      <FormControl disabled type='text' placeholder='Disabled' />
                    </FormGroup>
                    <FormGroup controlId='readOnly'>
                      <ControlLabel>Read only</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Read only' />
                    </FormGroup>
                    <FormGroup controlId="dropdownselect">
                      <ControlLabel>Dropdown Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="multiselect">
                      <ControlLabel>Multiple Select</ControlLabel>
                      <FormControl componentClass="select" multiple>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='textarea'>
                      <ControlLabel>Textarea</ControlLabel>
                      <FormControl componentClass='textarea' rows='3' placeholder='Some text here...' />
                    </FormGroup>
                    <FormGroup controlId="formControlsFile">
                      <ControlLabel>File input</ControlLabel>
                      <FormControl type="file" />
                      <HelpBlock>Example block-level help text here.</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                      <Checkbox name='checkbox-options' defaultValue='option1'>
                        Option one is great
                      </Checkbox>
                      <Checkbox name='checkbox-options' defaultValue='option2' defaultChecked>
                        Option two is checked
                      </Checkbox>
                      <Checkbox name='checkbox-options' defaultValue='option3' disabled>
                        Option three is disabled
                      </Checkbox>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                      <ControlLabel>Inline checkboxes</ControlLabel>
                      <div>
                        <Checkbox inline defaultValue='option1' name='inline-checkbox-options'>
                          Option one
                        </Checkbox>
                        <Checkbox inline defaultValue='option2' defaultChecked name='inline-checkbox-options'>
                          Option two
                        </Checkbox>
                        <Checkbox inline defaultValue='option3' disabled name='inline-checkbox-options'>
                          Option disabled
                        </Checkbox>
                      </div>
                      <hr/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Radios</ControlLabel>
                      <Radio defaultValue='option1' defaultChecked name='radio-options'>
                        Option 1
                      </Radio>
                      <Radio defaultValue='option2' name='radio-options'>
                        Option 2
                      </Radio>
                      <Radio defaultValue='option3' disabled name='radio-options'>
                        Option disabled
                      </Radio>
                      <hr/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Inline radios</ControlLabel>
                      <div>
                        <Radio inline defaultValue='option1' name='inline-radio-options'>
                          Option one
                        </Radio>
                        <Radio inline defaultValue='option2' defaultChecked name='inline-radio-options'>
                          Option two
                        </Radio>
                        <Radio inline defaultValue='option3' disabled name='inline-radio-options'>
                          Option disabled
                        </Radio>
                      </div>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-darkgreen45 text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightgreen'>submit</Button>
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

class HorizontalForm extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-darkblue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Orginization Contact Information</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form horizontal>
                    
                    <FormGroup controlId='company_name'>
                      <Col sm={2} componentClass={ControlLabel}>Company Name</Col>
                      <Col sm={10}>
                        <FormControl type='text' placeholder='' />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId='country'>
                      <Col sm={2} componentClass={ControlLabel}>Country</Col>
                      <Col sm={10}>
                        <FormControl componentClass='select' defaultValue='US'>
                          <option value='US'>United States</option>
                        </FormControl>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId='address_1'>
                      <Col sm={2} componentClass={ControlLabel}>Address</Col>
                      <Col sm={10}>
                        <FormControl type='text' placeholder='' />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId='address_2'>
                      <Col sm={2} componentClass={ControlLabel}></Col>
                      <Col sm={10}>
                        <FormControl type='text' placeholder='' />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId='city'>
                      <Col sm={2} componentClass={ControlLabel}>City</Col>
                      <Col sm={10}>
                        <FormControl type='text' placeholder='' />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId='state_zip'>
                      <Col sm={2} componentClass={ControlLabel}>State / Province</Col>
                      <Col sm={4}>
                        <FormControl componentClass='select' defaultValue='US'>
                          <option value='CA'>California</option>
                        </FormControl>
                      </Col>
                      
                      <Col sm={2} componentClass={ControlLabel}>Postal Code</Col>
                      <Col sm={4}>
                        <FormControl type='text' placeholder='' />
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
