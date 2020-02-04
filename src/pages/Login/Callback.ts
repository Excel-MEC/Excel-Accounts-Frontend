import { handleAuthentication } from '../../config/auth0';

const Callback = (props: any) => {
  handleAuthentication(props.location.hash, props.history);
  return null;
};

export default Callback;
