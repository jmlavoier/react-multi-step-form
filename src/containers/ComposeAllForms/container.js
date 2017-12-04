import { connect } from 'react-redux';
import ComposeAllForms from './ComposeAllForms';

/* istanbul ignore next */
const mapStateToProps = ({ firstStepForm, secondStepForm, thirdStepForm, fourthStepForm }) => ({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
});

export default connect(mapStateToProps)(ComposeAllForms);
