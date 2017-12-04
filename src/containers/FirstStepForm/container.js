import { connect } from 'react-redux';
import { changeCheckBox } from './actions';
import FirstStepForm from './FirstStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ firstStepForm }) => ({
  firstStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onClickCheckBox: name => dispatch(changeCheckBox(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstStepForm);
