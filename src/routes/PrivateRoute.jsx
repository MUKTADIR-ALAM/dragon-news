
import { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(user&&user?.email){
        return children;
    }
    if(loading){
        return <div className='flex justify-center items-center min-h-screen'><span className="loading loading-bars loading-lg"></span></div>
    }
  return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
}
