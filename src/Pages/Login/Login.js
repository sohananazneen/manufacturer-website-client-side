import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
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

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    const navigateSignUp = event => {
        navigate('/signup');
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' >
            <Card style={{ width: '30rem' }} className='shadow-lg p-3  bg-body rounded-3' >
                <Card.Body>
                    <Card.Title className='text-center fw-bold text-danger my-4'>Login</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email"  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-danger">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-danger">{errors.email.message}</span>}
                            </label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"  {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-danger">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                            </label>
                        </Form.Group>
                        {signInError}
                        <Button variant="danger w-100 mx-auto d-block mb-2" type="submit">
                            LOGIN
                        </Button>
                    </Form>
                    <p><small>
                        Don't have Account? <CustomLink to="/signup" className='text-decoration-none text-primary' onClick={navigateSignUp} >Creat New Account</CustomLink>
                    </small> </p>
                    <SocialLogin />
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;