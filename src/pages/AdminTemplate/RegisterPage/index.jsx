import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import {
    Form,
    Input,
} from 'antd';
import { actRegister } from './duck/actions';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const initialValues = {
        id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        gender: '',
        role: '',
    };

    const onSubmitForm = (formData) => {
        dispatch(actRegister(formData, navigate));
    };

    return (
        <div className="background-container">
            <img
                src="https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg"
                alt="Background Image"
                className='w-screen h-screen relative bg-cover bg-no-repeat background-image'
            />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-lg bg-white px-5 py-5 w-4/5 sm:w-1/2 md:w-1/2 form-container'>

                <article className="mx-auto" style={{ maxWidth: 1000 }}>
                    <div
                        className="text-center text-3xl text-blue-900 font-medium">
                        ĐĂNG KÝ TÀI KHOẢN
                    </div>
                    <hr className='h-divider my-3' />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmitForm}
                    >
                        <Form
                            size={componentSize}
                            onFinish={onSubmitForm}
                            onValuesChange={onFormLayoutChange}
                        >
                            <div className='flex justify-between'>
                                {/* Left Side */}
                                <div>
                                    <Form.Item
                                        name='name'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend ">
                                                <span
                                                    className="input-group-text">
                                                    <i className="fa fa-user" />
                                                </span>
                                            </div>
                                            <Input
                                                name='name'
                                                className="form-control mr-5"
                                                placeholder="Họ tên"
                                                type="text"
                                            />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        name='phone'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text">
                                                    <i className="fa fa-phone" />
                                                </span>
                                            </div>
                                            <Input
                                                name='phone'
                                                className="form-control mr-5"
                                                placeholder="Số điện thoại"
                                                type="text"
                                            />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        name='gender'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-male text-lg px-1" />
                                                </span>
                                            </div>
                                            <select
                                                placeholder='Giới tính'
                                                name='gender'
                                                className="form-control mr-5"
                                            >
                                                <option value='true'>Nam</option>
                                                <option value='false'>Nữ</option>
                                            </select>
                                        </div>
                                    </Form.Item>
                                </div>

                                {/* Right Side */}
                                <div>
                                    <Form.Item
                                        name='email'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope" />
                                                </span>
                                            </div>
                                            <Input
                                                name='email'
                                                className="form-control"
                                                placeholder="Email@gmail.com"
                                                type="text"
                                            />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        name='password'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock" />
                                                </span>
                                            </div>
                                            <Input
                                                name='password'
                                                className="form-control"
                                                placeholder="Mật khẩu"
                                                type="text"
                                            />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        name='birthday'
                                        className='m-auto py-1'
                                    >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-calendar-alt" />
                                                </span>
                                            </div>
                                            <Input
                                                name='birthday'
                                                className="form-control"
                                                placeholder="Ngày sinh"
                                                type="text"
                                            />
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                            <Form.Item className='m-auto text-center'>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-success w-1/2"> Đăng Ký
                                    </button>
                                </div>
                            </Form.Item>

                            <div className='btn-redirect-login text-center'>
                                <div>
                                    <NavLink to={'/auth'}>
                                        <p>Bạn đã có tài khoản! Hãy đăng nhập tại đây</p>
                                    </NavLink>
                                </div>
                            </div>
                        </Form>

                    </Formik>
                </article >
            </div>
        </div>
    );
};
