import React from "react";
import ReactDOM from "react-dom";

import NavItemComponent from "./NavItemComponent"

export default class NavContainer extends React.Component {
  getID() {
    return this.id;
  }
  
  getHeight() {
    return ReactDOM.findDOMNode(this.refs.ul).getClientRects()[0].height;
  }
  
  render() {
    var self = this;
    var children = React.Children.map(this.props.children, function (el) {
      switch (el.type) {
        case NavContainer:
        case NavItemComponent:
          return React.cloneElement(el, {
            SidebarNavID: self.props.SidebarNavID || self.getID(),
            RootNav: self.props.RootNav || self,
            ParentNav: self.props.ParentNav
          });

        default:
          return React.cloneElement(el);
      }
    });

    var isOpen = false;
    if (this.props.RootNav === this  ) {
      isOpen = true;
    }
    
    //delete this.props.SidebarNavID;
    //delete this.props.sidebarNavItem;
    //delete this.props.rootSidebarNavItem;

    return (
      <ul className="sidebar-nav" open={isOpen}>
        {children}
      </ul>
    );
  }
}
