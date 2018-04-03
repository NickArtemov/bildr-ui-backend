import React from 'react';

class MainContainer extends React.Component {
  isOpen(open) {
    return this.state.open === open;
  }
  
  closeSidebar() {
    var forceClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.setState({
      open: false,
      forceClose: forceClose
    });
    localStorage.setItem('sidebar-open-state', false);
  }
  
  openSidebar() {
    var forceClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.setState({
      open: true,
      forceClose: forceClose
    });
    localStorage.setItem('sidebar-open-state', true);
  }
  
  toggleSidebar() {
    if (this.state.forceClose) {
      this.openSidebar(false);
    } else {
      this.closeSidebar(true);
    }
  }
  
  sidebarStateChangeCallback(open) {
    var openState = getOpenState();
    if (this.isOpen(open)) return;
    if (open !== undefined) {
      openState = open;
    } else {
      openState = !this.state.open;
    }
    this.setState({
      open: openState // toggle sidebar
    });
    localStorage.setItem('sidebar-open-state', openState);
  }
  
  enablePath(props) {
    if (props) {
		console.log(props);
      enableStateForPathname(props.location.pathname, props.params);
    }
    //_Dispatcher2.default.publish('sidebar:activate');
  }
  
  componentWillReceiveProps(nextProps) {
    /*
    var _this = this;

    setTimeout(function () {
      _this.enablePath(nextProps);
    }, 50);
    */
    // this.enablePath();
  }
  
  componentWillUnmount() {
    //_Dispatcher2.default.unsubscribe(this.handler);
  }
  
  startSwipe(e) {
    if (e.changedTouches.length) {
      var touches = e.changedTouches[0];
      this.startX = touches.pageX;
    }
  }
  
  swiping(e) {
    if (e.changedTouches.length) {
      var touches = e.changedTouches[0];
      var change = Math.abs(touches.pageX - this.startX);
      var hasSwiped = change > 25;

      var body = document.getElementById('body');
      var sidebar = document.getElementById('sidebar');
      var header = document.getElementById('rubix-nav-header');
      if (hasSwiped) {
        if (!this.state.open) {
          if (change > 250) return;
          body.style.marginLeft = change + 'px';
          body.style.marginRight = -change + 'px';
          sidebar.style.left = -250 + change + 'px';
          header.style.marginLeft = change + 'px';
          header.style.marginRight = -change + 'px';
        } else {
          if (250 - change < 0) return;
          body.style.marginLeft = 250 - change + 'px';
          body.style.marginRight = -(250 - change) + 'px';
          sidebar.style.left = 0 - (250 - change) + 'px';
          header.style.marginLeft = 250 - change + 'px';
          header.style.marginRight = -(250 - change) + 'px';
        }
      }
    }
  }
  
  cancelSwipe(e) {
    this.startX = 0;
    var body = document.getElementById('body');
    var sidebar = document.getElementById('sidebar');
    var header = document.getElementById('rubix-nav-header');
    body.style.marginLeft = '';
    body.style.marginRight = '';
    sidebar.style.left = '';
    header.style.marginLeft = '';
    header.style.marginRight = '';
    this.setState({
      open: false
    });
  }
  
  endSwipe(e) {
    if (e.changedTouches.length) {
      var touches = e.changedTouches[0];
      var change = touches.pageX - this.startX;
      var hasSwiped = Math.abs(change) > 25;

      var body = document.getElementById('body');
      var sidebar = document.getElementById('sidebar');
      var header = document.getElementById('rubix-nav-header');

      if (hasSwiped) {
        body.style.marginLeft = '';
        body.style.marginRight = '';
        sidebar.style.left = '';
        header.style.marginLeft = '';
        header.style.marginRight = '';

        if (!this.state.open) {
          this.setState({
            open: true
          });
        } else {
          this.setState({
            open: false
          });
        }
      }
    }
  }
  
  componentWillUnmount() {
    /*
    _Dispatcher2.default.unsubscribe(this.sidebarStateChangeCallback);
    _Dispatcher2.default.unsubscribe(this.closeSidebar);
    _Dispatcher2.default.unsubscribe(this.toggleSidebar);
    */
  }
  
  componentDidMount() {
    /*
    this.handler = _Dispatcher2.default.subscribe('sidebar', this.sidebarStateChangeCallback);
    this.closeHandler = _Dispatcher2.default.subscribe('sidebar:closeSidebar', this.closeSidebar);
    this.closeHandler = _Dispatcher2.default.subscribe('sidebar:toggleSidebar', this.toggleSidebar);
    */

    /*
    var openState = getOpenState();
    this.setState({
      open: openState
    });
    */

    this.enablePath();
  }
  
  render() {
    /*
    var classes = (0, _classnames2.default)({
      'container-open': this.state.open,
      'force-close': this.state.forceClose
    });
    */
console.log(this.props.children);
    return (
      <div id="container" className="container-open">
        {this.props.children}
      </div>
    );
  }
} 

export default MainContainer;
