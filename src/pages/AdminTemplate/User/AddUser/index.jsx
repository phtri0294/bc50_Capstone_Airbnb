import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Select,
    Radio,
} from 'antd';
import { Formik } from 'formik';
import { actAddNewUser } from './duck/actions';

const AddUser = () => {
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

    const onSubmitForm = (values) => {
        dispatch(actAddNewUser(values, navigate));
    };

    return (
        <Fragment>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmitForm}
            >
                <Form
                    form={form}
                    layout='horizontal'
                    size={componentSize}
                    labelCol={{ span: 4, }}
                    wrapperCol={{ span: 14, }}
                    style={{ maxWidth: 1000, }}
                    onFinish={onSubmitForm}
                    onValuesChange={onFormLayoutChange}
                >
                    <div
                        className='heading-page text-green-800'>
                        THÊM NGƯỜI MỚI
                    </div>
                    <hr className='h-divider mb-4' />

                    <Form.Item
                        label='Kích thước chữ'
                        name='size'
                    >
                        <Radio.Group>
                            <Radio.Button value='small'>Small</Radio.Button>
                            <Radio.Button value='default'>Default</Radio.Button>
                            <Radio.Button value='large'>Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label='ID'
                        name='id'
                        hidden={true}
                    >
                        <Input
                            name='id'
                            placeholder='Nhập id'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Họ Tên'
                        name='name'
                        rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                    >
                        <Input
                            name='name'
                            placeholder='Nhập họ tên'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                    >
                        <Input
                            name='email'
                            placeholder='Nhập email'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Mật Khẩu'
                        name='password'
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                    >
                        <Input
                            name='password'
                            placeholder='Nhập mật khẩu'
                            type='password'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Điện Thoại'
                        name='phone'
                        // rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                    >
                        <Input
                            name='phone'
                            placeholder='Nhập số điện thoại'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Ngày sinh'
                        name='birthday'
                        // rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}
                    >
                        <Input
                            name='birthday'
                            placeholder='Nhập ngày sinh'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Giới tính'
                        name='gender'
                        rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
                    >
                        <Select
                            placeholder='Chọn giới tính'
                        >
                            <Select.Option value='true'>Nam</Select.Option>
                            <Select.Option value='false'>Nữ</Select.Option>
                        </Select>
                    </Form.Item >

                    <Form.Item
                        label='Vai trò'
                        name='role'
                        rules={[{ required: true, message: 'Vui lòng chọn loại người dùng' }]}
                    >
                        <Select
                            placeholder='Chọn loại người dùng'
                        >
                            <Select.Option value='ADMIN'>ADMIN</Select.Option>
                            <Select.Option value='USER'>USER</Select.Option>
                        </Select>
                    </Form.Item >

                    <Form.Item
                        label='Thao tác'
                    >
                        <button
                            type='submit'
                            className='button-submit-addnew'
                        >
                            Thêm mới
                        </button>
                    </Form.Item>
                </Form>
            </Formik>
        </Fragment>
    );
};

export default AddUser;