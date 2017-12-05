import { connect } from 'react-redux';
import ComposeAllForms from './ComposeAllForms';

/* istanbul ignore next */
const mapStateToProps = ({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
  fivethStepForm,
}) => ({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
  fivethStepForm,
});

export default connect(mapStateToProps)(ComposeAllForms);
