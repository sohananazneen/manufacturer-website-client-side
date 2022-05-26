import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let signInError;

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        signInError = <p className='text-danger'><small>{error?.message}</small></p>
    }

    if (user) {
        console.log(user);
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {signInError}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-danger w-100 d-block mx-auto my-2'>
                    <span className='px-2'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;