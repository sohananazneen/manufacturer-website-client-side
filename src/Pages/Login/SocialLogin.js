import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const navigate = useNavigate();
    // const location = useLocation();

    // let from = location.state?.from?.pathname || "/";

    // let errorElement;

    // if (loading ) {
    //     return <Loading></Loading>
    // }
    // if (loading) {
    //     return <Loading></Loading>
    // }
    // if (error) {
    //     errorElement = <p className='text-danger'>Error: {error?.message}</p>
    // }

    // if (user) {
    //     navigate(from, { replace: true });
    // }
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
            {/* {errorElement} */}
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