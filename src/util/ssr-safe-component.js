import React from 'react';

/*
 * We have to use getComponent instead of a module name because webpack can't
 * resolve dynamic require, as in, no variables. Given that, we pass in a function
 * that returns the require'd module, enabling us to wait until we are in a
 * browser environment to actually execute the requirement.
 */
function ssrSafeComponent(getComponent) {
  class SSRComponent extends React.Component {
    constructor(props) {
      super(props);
      this.Component = () => <div />;
    }

    componentDidMount() {
      if (typeof document !== `undefined`) {
        this.Component = getComponent();
      }
    }

    render() {
      const Component = this.Component;

      return <Component {...this.props} />;
    }
  }

  return SSRComponent;
}

export default ssrSafeComponent;
