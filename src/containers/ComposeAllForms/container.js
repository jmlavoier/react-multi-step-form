import { connect } from 'react-redux';
import ComposeAllForms from './ComposeAllForms';

/* istanbul ignore next */
const mapStateToProps = ({ dataForm }) => ({ dataForm });

export default connect(mapStateToProps)(ComposeAllForms);
