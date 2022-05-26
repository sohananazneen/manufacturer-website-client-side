import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';
const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let signInError;

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInError = <p className='text-danger'>
            <small>
                {error?.message || updateError?.message}
            </small>
        </p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/');
    }

    const navigateLogin = event => {
        navigate('/login');
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' >
            <Card style={{ width: '30rem' }} className='shadow-lg p-3 bg-body rounded-3' >
                <Card.Body>
                    <Card.Title className='text-center fw-bold text-danger my-4'>Sign Up</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter You Name"  {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-danger">{errors.name.message}</span>}
                            </label>
                        </Form.Group>

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
                            Sign Up
                        </Button>
                    </Form>
                    <p><small>
                        Already have an account? <CustomLink to="/login" className='text-decoration-none text-primary' onClick={navigateLogin} >Please Login</CustomLink>
                    </small> </p>
                    <SocialLogin />
                </Card.Body>
            </Card>
        </div>
    );
};

export default SignUp;