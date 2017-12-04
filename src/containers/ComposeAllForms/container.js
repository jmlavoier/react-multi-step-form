import { connect } from 'react-redux';
import ComposeAllForms from './ComposeAllForms';

/* istanbul ignore next */
const mapStateToProps = ({ firstStepForm, secondStepForm }) => ({
  firstStepForm,
  secondStepForm,
});

export default connect(mapStateToProps)(ComposeAllForms);
