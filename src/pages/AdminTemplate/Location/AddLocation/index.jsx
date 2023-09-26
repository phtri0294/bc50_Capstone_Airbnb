import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Radio,
    Switch,
    Select
} from 'antd';
import { useFormik, Formik } from 'formik';
import actAddNewLocation from './duck/actions';


export default function AddLocation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();
    const [imgSrc, setImgSrc] = useState('');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const initialValues = {
        id: '',
        tenViTri: '',
        tinhThanh: '',
        quocGia: '',
        hinhAnh: {},
    };

    const onSubmitForm = (values) => {
        dispatch(actAddNewLocation(values, navigate));
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
                        THÊM VỊ TRÍ MỚI
                    </div>
                    <hr className='h-divider mb-4' />
                    <div className='w-full flex justify-stretch border'>
                        {/* Left Side */}
                        <div className='w-full md:w-3/6 lg:w-3/6 border'>
                            <div className='w-full border py-2 pl-5'>
                                <Form.Item
                                    name='hinhAnh'
                                    className='grid justify-items-center'
                                >
                                    <img
                                        style={{ width: 170, height: 170 }}
                                        className='ml-5 rounded-full'
                                        src={imgSrc !== '' ? imgSrc : 'https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'}
                                        alt='...'
                                    />
                                    <br />
                                    <input
                                        type='file'
                                        className='ml-5'
                                        // onChange={handleChangeFile}
                                        accept='image/png, image/jpeg,image/gif,image/png'
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className='w-full md:w-4/6 lg:w-4/6 ml-5'>
                            <Form.Item
                                label='Cỡ chữ'
                                name='size'
                            >
                                <Radio.Group className='ml-3' >
                                    <Radio.Button value='small'>Small</Radio.Button>
                                    <Radio.Button value='default'>Default</Radio.Button>
                                    <Radio.Button value='large'>Large</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label='Tên vị trí'
                                name='tenViTri'
                            // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                            >
                                <Input
                                    name='tenViTri'
                                    className='ml-3'
                                    placeholder='Nhập vị trí'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Tỉnh thành'
                                name='tinhThanh'
                            // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                            >
                                <Input
                                    name='tinhThanh'
                                    className='ml-3'
                                    placeholder='Nhập tỉnh thành'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Quốc gia'
                                name='quocGia'
                            // rules={[{ required: true, message: 'Vui lòng nhập số giường' }]}
                            >
                                <Input
                                    name='quocGia'
                                    className='ml-3'
                                    placeholder='Nhập quốc gia'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Thao tác'
                            >
                                <button
                                    type='submit'
                                    className='button-submit-addnew ml-3'
                                >
                                    Thêm mới
                                </button>
                            </Form.Item>
                            {/* </Form> */}
                        </div>

                    </div>
                </Form>
            </Formik>
        </Fragment >
    );
};
