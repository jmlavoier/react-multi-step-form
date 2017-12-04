import { connect } from 'react-redux';
import { changeRadio } from './actions';
import SecondStepForm from './SecondStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ secondStepForm }) => ({
  secondStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onClickRadio: name => dispatch(changeRadio(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondStepForm);
