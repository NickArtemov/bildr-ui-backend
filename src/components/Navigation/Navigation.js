import React from "react";
import NavContainer from "./NavContainer";
import NavItemComponent from "./NavItemComponent";
import {Grid, Row, Col} from "rubix";

export class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className='sidebar-nav-container'>
                                <NavContainer style={{marginBottom: 0}}>
                                    <NavItemComponent glyph='icon-fontello-gauge' name='Dashboard' href='/' />

                                    <NavItemComponent glyph='icon-fontello-building' name='Organization'>
                                        <NavContainer>
                                            <NavItemComponent glyph='icon-fontello-phone-outline' name='Contact Info' href='/organization/contact-info' />

                                            { /* Billing Section */ }
                                            <NavItemComponent className='sidebar-header' name={'Billing'}/>
                                            <NavItemComponent glyph='icon-fontello-credit-card-4' name='Payment Methods' href='/organization/payment-methods' />
                                            <NavItemComponent glyph='icon-fontello-print-5' name='Invoices' href='/organization/invoices' />
                                            <NavItemComponent glyph='icon-fontello-barcode-1' name='Products' href='/organization/products' />
                                        </NavContainer>
                                    </NavItemComponent>

                                    <NavItemComponent glyph='icon-fontello-key-outline' name='API Clients'>
                                        <NavContainer>
                                            <NavItemComponent glyph='icon-fontello-list-add' name='Create' href='/api-clients/create' />
                                            <NavItemComponent glyph='icon-fontello-list' name='Manage' href='/api-clients/manage' />
                                            <NavItemComponent glyph='icon-fontello-layers' name='Activity Log' href='/api-clients/activity-log' />
                                        </NavContainer>
                                    </NavItemComponent>

                                    <NavItemComponent glyph='icon-fontello-users-2' name='Members'>
                                        <NavContainer>
                                            <NavItemComponent glyph='icon-fontello-user-add' name='Invite' href='/members/invite' />
                                            <NavItemComponent glyph='icon-fontello-users' name='Manage' href='/members/manage' />
                                            <NavItemComponent glyph='icon-fontello-layers' name='Activity Log' href='/members/activity-log' />
                                        </NavContainer>
                                    </NavItemComponent>

                                    <NavItemComponent glyph='icon-fontello-group' name='Teams'>
                                        <NavContainer>
                                            <NavItemComponent glyph='icon-fontello-user-add' name='Create' href='/teams/create' />
                                            <NavItemComponent glyph='icon-fontello-users' name='Manage' href='/teams/manage' />
                                        </NavContainer>
                                    </NavItemComponent>

                                    <NavItemComponent glyph='icon-fontello-commerical-building' name='Containers'>
                                        <NavContainer>
                                            <NavItemComponent glyph='icon-fontello-doc-add' name='Create' href='/containers/create' />
                                            <NavItemComponent glyph='icon-fontello-folder-2' name='Manage' href='/containers/manage' />
                                            <NavItemComponent glyph='icon-fontello-export-outline' name='Export' href='/containers/export' />
                                        </NavContainer>
                                    </NavItemComponent>
                                </NavContainer>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}