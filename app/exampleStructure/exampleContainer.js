import { connect } from 'react-redux';
import ExampleComponent from './exampleComponent';

// from reducer
const mapStateToProps = (state) => {
  return {
    exampleProp: state.prop,
  };
};

// from actions
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false })(ExampleComponent);
