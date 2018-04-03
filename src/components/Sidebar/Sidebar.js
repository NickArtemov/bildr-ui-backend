import React from 'react';
import Icon from '../../layout/Icon';
import { Grid, Row, Col } from 'rubix';
import {Navigation} from "../Navigation";

const avatar = require("../../assets/imgs/app/avatars/avatar0.png");

export class Sidebar extends React.Component {
  render() {
    console.log("SIDEBAR");
    return (
      <div id="sidebar">
        <div id="avatar">
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src={avatar} width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <a href='#'>
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>


        <div id='sidebar-container'>
          <Navigation />
        </div>
      </div>
    );
  }
}
