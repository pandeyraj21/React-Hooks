import React from 'react';

function WithExtraData(WrappedComponent) {
  return class extends React.Component {
    render() {
      const extraData = 'This is some extra data';
      return <WrappedComponent {...this.props} data={extraData} />;
    }
  };
}

export default WithExtraData;
