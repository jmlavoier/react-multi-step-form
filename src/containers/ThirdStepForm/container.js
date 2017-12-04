import { connect } from 'react-redux';
import { changeInput, checkText } from './actions';
import ThirdStepForm from './ThirdStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ thirdStepForm }) => ({
  thirdStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onChangeInput: value => dispatch(changeInput(value)),
  onClickCheck: value => dispatch(checkText(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStepForm);
