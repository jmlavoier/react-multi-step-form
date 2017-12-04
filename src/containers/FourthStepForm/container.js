import { connect } from 'react-redux';
import { onChangeSelect } from './actions';
import FourthStepForm from './FourthStepForm';

/* istanbul ignore next */
const mapStateToProps = ({ fourthStepForm }) => ({
  fourthStepForm,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onChangeSelect: value => dispatch(onChangeSelect(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FourthStepForm);
