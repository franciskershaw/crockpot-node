import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/icons/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../hooks/auth/useUser';
import { useAuth } from '../../hooks/auth/useAuth';

const Header = ({ title }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { signout } = useAuth();

  const onLogout = () => {
    signout();
    return navigate('/login');
  };

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <div className="header__left flex items-center">
          <h1 className="h3">{title}</h1>
        </div>
        <div className="header__right">
          {user ? (
            <div onClick={onLogout} className="cursor-pointer">
              <Icon text={'Log out'}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Icon>
            </div>
          ) : (
            <Link to={'/login'}>
              <Icon text={'Log in'}>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </Icon>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;