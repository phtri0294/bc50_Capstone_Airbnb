import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { actAuth } from './duck/actions';

export default function AuthPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const error = useSelector((state) => state.authReducer.error);

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(actAuth(state, navigate));
    };

    const renderError = () => {
        return (
            error && (
                <div className='alert alert-danger'>{error}</div>
            )
        );
    };

    if (localStorage.getItem('LOGIN_ADMIN')) {
        return <Navigate replace to='/admin' />
    };

    return (
        <div className="background-container">
            <img
                src="https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg"
                alt="Background Image"
                className='w-screen h-screen relative bg-cover bg-no-repeat background-image'
            />


            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-1/2 md:w-2/5 form-container'>
                <form
                    onSubmit={handleLogin}
                    className='max-w-screen-sm'
                >
                    <div className='mt-1 px-1 sm:px-1 md:px-1 lg:px-1 lg:mt-1 xl:px-1 xl:max-w-2xl'>
                        <h2 className='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold'>Đăng nhập</h2>


                        <div className='mt-12'>
                            <div>
                                <div>
                                    <div className='text-sm font-bold text-gray-700 tracking-wide'>Tài khoản</div>

                                    <input
                                        name='email'
                                        onChange={handleOnchange}
                                        className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                                        placeholder='Nhập vào email' />
                                </div>

                                <div className='mt-8'>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-sm font-bold text-gray-700 tracking-wide'>
                                            Mật khẩu
                                        </div>
                                    </div>

                                    <input
                                        name='password'
                                        onChange={handleOnchange}
                                        className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                                        placeholder='Nhập vào mật khẩu' />
                                </div>
                                {renderError()}
                                <div className='mt-10'>
                                    <button
                                        className='bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg'
                                        type='submit'
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>

                            <div
                                className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'
                            >
                                Bạn chưa có tài khoản ?
                                <NavLink
                                    to='/register'
                                    className='cursor-pointer text-indigo-600 hover:text-indigo-800 ml-2'>
                                    Đăng ký
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </form>
            </div >

        </div>
    );
};
