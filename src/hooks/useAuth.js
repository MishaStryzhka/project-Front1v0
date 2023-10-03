import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectCurrentTheme,
  selectIsFirstLogin,
  selectUserType,
  selectToken,
  selectResponse,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const currentTheme = useSelector(selectCurrentTheme);
  const isFirstLogin = useSelector(selectIsFirstLogin);
  const userType = useSelector(selectUserType);
  const token = useSelector(selectToken);
  const response = useSelector(selectResponse);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    currentTheme,
    isFirstLogin,
    userType,
    token,
    response,
  };
};
