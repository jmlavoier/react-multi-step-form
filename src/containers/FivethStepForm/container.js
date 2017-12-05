import { connect } from 'react-redux';
import { submitForm } from './actions';
import FivethStepForm from './FivethStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ fivethStepForm }) => ({
  fivethStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onClickSubmit: () => dispatch(submitForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FivethStepForm);
