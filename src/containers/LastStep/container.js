import { connect } from 'react-redux';
import LastStep from './LastStep';

/* istanbul ignore next */
const mapStateToProps = ({ dataForm }) => ({
  dataForm,
});

export default connect(mapStateToProps)(LastStep);
