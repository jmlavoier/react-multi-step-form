import { connect } from 'react-redux';
import { changeCheckBox } from './actions';
import SecondStepForm from './SecondStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ secondStepForm }) => ({
  secondStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onClickCheckBox: name => dispatch(changeCheckBox(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondStepForm);
