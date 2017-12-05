import { connect } from 'react-redux';
import { submitForm } from './actions';
import FivethStepForm from './FivethStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ firstStepForm, secondStepForm, thirdStepForm, fourthStepForm, fivethStepForm, dataForm }) => ({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
  fivethStepForm,
  dataForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onClickSubmit: otherForms => dispatch(submitForm(otherForms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FivethStepForm);
