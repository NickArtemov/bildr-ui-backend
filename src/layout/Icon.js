import React from "react";
import classNames from "classnames";
/*
export default class Icon extends React.Component {
  render() {
      var glyph = this.props.glyph || "";
      var bundle = this.props.bundle || "";
      var isGlyphIcon = glyph.search('glyphicon') !== -1 || bundle.search('glyphicon') !== -1;

      var iconString = bundle + '-' + glyph;
      
      var bundle = bundle.length ? !isGlyphicon ? 'icon-' + iconString : iconString : null;
      
      
      var glyph = !bundle.length ? glyph : '';

      var classes = classNames(this.props.className, bundle, glyph, {
        'glyphicon': isGlyphicon,
        'rubix-icon': !isGlyphicon,
        'form-control-feedback': this.props.feedback
      });

      var props = combineReducers({
        ...this.props, 
        className: classes
      });

      delete props.glyph;
      delete props.bundle;

      return (<span {...props} />);
  }
};
*/

class Icon extends React.Component {
  render() {
      var glyph = this.props.glyph || "";
      var bundle = this.props.bundle || "";
      var isGlyphIcon = glyph.search('glyphicon') !== -1 || bundle.search('glyphicon') !== -1;

      if (bundle.length) {
        if (! isGlyphIcon) {
          bundle = "icon-" + bundle + "-" + glyph;
        } else {
          bundle = bundle + "-" + glyph;
        }
      }

      var glyph = !bundle.length ? glyph : "";

      var classes = classNames(this.props.className, bundle, glyph, {
        'glyphicon': isGlyphIcon,
        'rubix-icon': !isGlyphIcon,
        'form-control-feedback': this.props.feedback
      });

      var props = {
        ...this.props, 
        className: classes
      };

      delete props.glyph;
      delete props.bundle;

      return (<span {...props} />);
  }
};

export default Icon;
