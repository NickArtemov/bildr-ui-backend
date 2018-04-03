import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import Icon from '../layout/Icon';
import { Link } from 'react-router-dom';

export default class NavItemComponent extends React.Component {
  constructor(props) {
    super(props);
    
    return this;
  }
  
  getTotalHeight() {
    var height = 45;

    if (this.children) {
      height += this.children.length * 45;
    }

    return height;
  }

  openSidebarNav(fullOpen, height, isClosing) {
    if (this.state.open && !height) return;

    height = height || 0;
    var thisHeight = this.getTotalHeight();
    var totalHeight = height + thisHeight;

    /*
    if (this.childSidebarNav) {
      this.setState({
        height: totalHeight,
        open: true,
        toggleOpen: true
      }, function () {
        _Dispatcher2.default.publish('sidebar:update');
        if (_this.props.sidebarNavItem) {
          if (isClosing) {
            _this6.props.sidebarNavItem.openSidebarNav(false, 45 - totalHeight, true);
          } else {
            if (fullOpen) {
              _this6.props.sidebarNavItem.openSidebarNav(true, totalHeight - 45);
            } else {
              _this6.props.sidebarNavItem.openSidebarNav(false, thisHeight - 45);
            }
          }
        }
      });
    }
    */
  }
  
  closeSidebarNav(collapseRoot) {
    var _this7 = this;

    if (!this.state.open) return;

    /*
    var thisHeight = this.getTotalHeight();
    if (this.childSidebarNav) {
      this.setState({
        height: 45,
        open: false,
        toggleOpen: false
      }, function () {
        _Dispatcher2.default.publish('sidebar:update');
        if (_this7.props.sidebarNavItem) {
          _this7.props.sidebarNavItem.openSidebarNav(false, 45 - thisHeight, true);
        }
      });
    }
    */
  }
  
  toggleSidebarNav() {
    if (this.state.height === 45) {
      this.openSidebarNav();
    } else {
      this.closeSidebarNav();
    }
  }

  getTopmostLi(node, li, original_node) {
    if (!original_node) original_node = node;
    while (node.parentNode) {
      if (node.parentNode.className.search('sidebar-nav-container') !== -1) {
        if (li) {
          return li;
        } else {
          return original_node;
        }
      }

      if (node.parentNode.nodeName.toLowerCase() === 'li') {
        li = node.parentNode;
      }
      node = node.parentNode;
    }
  }
  
  getSiblingsLi(node) {
    var original_node = node;
    var sibilings = [];
    while (node.nextSibling) {
      sibilings.push(node.nextSibling);
      node = node.nextSibling;
    }
    node = original_node;
    while (node.previousSibling) {
      sibilings.push(node.previousSibling);
      node = node.previousSibling;
    }

    return sibilings;
  }
  
  getSiblingsNav(node) {
    var original_node = node;
    var siblings = [];
    while (node.nextSibling) {
      if (node.nextSibling.className.search('sidebar-nav') !== -1) {
        siblings.push(node.nextSibling);
      }
      node = node.nextSibling;
    }
    node = original_node;
    while (node.previousSibling) {
      if (node.previousSibling.className.search('sidebar-nav') !== -1) {
        siblings.push(node.previousSibling);
      }
      node = node.previousSibling;
    }

    return siblings;
  }


  getTopmostSidebar(node) {
    while (node.parentNode) {
      if (node.parentNode.className.search('sidebar__main') !== -1) {
        return node.parentNode;
      }
      node = node.parentNode;
    }
  }

  checkAndClose(props) {
    var node = ReactDOM.findDOMNode(this._node);

    var topmostLi = this.getTopmostLi(node);
    var topmostSiblingLis = this.getSiblingsLi(topmostLi);
    var siblingLis = this.getSiblingsLi(node);
    var topmostSidebar = this.getTopmostSidebar(node);
    var id = parseInt(topmostSidebar.getAttribute('data-id')) || 0;
/*
    _Dispatcher2.default.publish('sidebar:controlbtn', { sidebar: id });
    _Dispatcher2.default.publish('sidebar:keychange', id);

    for (var i = siblingLis.length - 1; i >= 0; i--) {
      var li = siblingLis[i];
      if (li && typeof li.close === 'function') li.close();
    };

    for (var i = 0; i < topmostSiblingLis.length; i++) {
      var li = topmostSiblingLis[i];
      if (li && typeof li.close === 'function') li.close();
    }

    try {
      var height = node.getClientRects()[0].height;
      var top = node.getClientRects()[0].top;
      setTimeout(function () {
        _Dispatcher2.default.publish('sidebar:reposition', node, top, height);

        if ((0, _isTouchDevice2.default)()) {
          _Dispatcher2.default.publish('sidebar:closeSidebar');
        }
      }, 300);
    } catch (e) {}
*/
  }
  
  closeNav() {
    this.closeSidebarNav();
  }
  
  activateSidebar() {
    /*
    var found = false,
        route;
    for (var i = 0; i < this.routes.length; i++) {
      var r = this.routes[i];
      if (routesStore[r]) {
        route = r;
        found = true;
        break;
      }
    }
    
    if (found) {
      this.setState({
        active: true
      });

      this.checkAndClose(this.props);

      if (this.props.sidebarNavItem) {
        this.props.sidebarNavItem.openSidebarNav(true);
      }

      if (this.props.rootSidebarNavItem) {
        this.props.rootSidebarNavItem.openSidebarNav();
      }
    } else {
      this.setState({
        active: false
      });
    }
    */
  }
  
  closeSidebarRoot() {
    if (!this.props.sidebarNavItem) {
      this.closeSidebarNav();
    }
  }

  componentWillUnmount() {
    /*
    _Dispatcher2.default.unsubscribe(this.activateHandler);
    _Dispatcher2.default.unsubscribe(this.closeHandler);
    _Dispatcher2.default.unsubscribe(this.searchHandler);
    */
  }
  
  componentDidMount() {
    /*
    this.activateHandler = _Dispatcher2.default.subscribe('sidebar:activate', this.activateSidebar.bind(this));
    this.closeHandler = _Dispatcher2.default.subscribe('sidebar:close', this.closeSidebarRoot.bind(this));
    this.searchHandler = _Dispatcher2.default.subscribe('sidebar:search', this.handleSearch.bind(this));
    */

    /*
    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
      routesStore[this.props.href] = this.state.active;

      this.routes.push(this.props.href);

      if (this.props.aliases) {
        for (var i = 0; i < this.props.aliases.length; i++) {
          var alias = this.props.aliases[i];
          this.routes.push(alias);
          routesStore[alias] = this.state.active;
        }
      }
    }
    */

    var node = ReactDOM.findDOMNode(this._node);
    //node.close = this.closeNav.bind(this);

    //enableStateForPathname(this.props.location.pathname, this.props);
  }

  handleClick(e) {
    /*
      if (!_this5.props.href) {
        e.preventDefault();
        e.stopPropagation();
        _this5.toggleSidebarNav();
      }
      if (_this5.props.hasOwnProperty('onClick')) {
        _this5.props.onClick();
      }

      _this5.closeNav();
    */
    
    /*
    this.props.store.dispatch({
      type: 'INCREMENT'
    });
    */

    //this.getTotalHeight()
    //this.height = this.getTotalHeight();
    
    this.children.push('show');
    console.log(this.children);
  }
    
  render() {

    var classes = classNames({
      'open': true,
      'active': false,
      'sidebar-nav-item': true
    });
    
    /*
    var toggleClasses = classNames({
      'toggle-button': true,
      'open': this.state.toggleOpen,
      'opposite': this.state.opposite
    });
    */
    

        
    var style = { height: 'auto' };

    var props = {
      name: null,
      style: style,
      tabIndex: '-1',
      className: classes.trim()
    };

    var RouteLink = 'a';
    var componentProps = {
      name: null,
      tabIndex: -1,
      href: this.props.href || '',
      /*onClick: this.handleClick,*/
      style: { height: 45 }
    };

    var pointerEvents = 'all';
    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
      RouteLink = Link;

      componentProps.to = this.props.href;
      delete componentProps.href;

      if (this.props.href.search(":") !== -1) {
        pointerEvents = 'none';
      }
    }

    var isRoot = this.props.sidebarNavItem ? false : true;

    var self = this;
    this.children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        sidebarNavItem: self,
        SidebarNavID: self.props.SidebarNavID,
        rootSidebarNavItem: isRoot ? self : self.props.rootSidebarNavItem
      });
    });
    
    
    var ToggleIcon = null;
    if (this.children) {
      var toggleClasses = classNames({
        'toggle-button': true,
        'open': false,
        'opposite': false
      });
      
      ToggleIcon = (<Icon className={toggleClasses} bundle="fontello" glyph="left-open-3" />);
    }
    
    var href = "#";
    if (this.props.hasOwnProperty('href') && this.props.href.length > 0) {
      href = this.props.href;
    }
    
    //console.log(isRoot ? self : self.props.rootSidebarNavItem);
     
    return (
      <li tabIndex="-1" className="sidebar-nav-item" style={{display: "block", pointerEvents: "all", height: "45px" }} onClick={this.handleClick.bind(this)}>
        <Link to={href}>
          <Icon bundle={this.props.bundle} glyph={this.props.glyph} />
          <span className="name">{this.props.name}</span>
          {ToggleIcon}
        </Link>

        {this.children}
      </li>
    );
  }
}
