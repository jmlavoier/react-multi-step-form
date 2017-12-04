import { connect } from 'react-redux';
import { changeInput } from './actions';
import ThirdStepForm from './ThirdStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ thirdStepForm }) => ({
  thirdStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onChangeInput: value => dispatch(changeInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStepForm);
