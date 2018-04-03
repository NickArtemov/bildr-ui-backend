import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'rubix';

import NavContainer from "./components/Navigation/NavContainer"
import NavItemComponent from "./components/Navigation/NavItemComponent"

import Homepage from './route/Homepage';

import ContactInfo from './route/organization/ContactInfo';
import Invoices from './route/organization/Invoices';
import Products from './route/organization/Products';

import ClientCreate from './route/api-clients/Create';
import ClientManage from './route/api-clients/Manage';

import MemberInvite from './route/members/Invite';

import TeamCreate from './route/teams/Create';

import ContainerCreate from './route/containers/Create';

export class Body extends React.Component {
  render() {
    console.log("BODY");
    return (
      <div id="body">
        <Grid>
          <Row>
            <Col xs={12}>
              <Route exact path="/" component={Homepage}/>
              <Switch>
                <Route path='/organization/contact-info' component={ContactInfo} />

                <Route path='/organization/invoices' component={Invoices} />
                <Route path='/organization/products' component={Products} />

                <Route path='/api-clients/create' component={ClientCreate} />
                <Route path='/api-clients/manage' component={ClientManage} />

                <Route path='/members/invite' component={MemberInvite} />

                <Route path='/teams/create' component={TeamCreate} />

                <Route path='/containers/create' component={ContainerCreate} />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}



