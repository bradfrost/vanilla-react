import React from 'react';

function withDisambiguation(Component, type) {
  const bodyClass = `cn-disambiguation-${type}`;

  class DisambiguationComponent extends React.Component {
    componentDidMount() {
      if (!document.body.className.includes(bodyClass)) {
        document.body.className = `${document.body.className} ${bodyClass}`;
      }
    }

    componentWillUnmount() {
      document.body.className = document.body.className.replace(bodyClass, ``);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  DisambiguationComponent.displayName = Component.displayName;

  return DisambiguationComponent;
}

export default withDisambiguation;
