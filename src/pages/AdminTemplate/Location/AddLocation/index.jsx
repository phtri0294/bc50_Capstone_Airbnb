import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Radio,
} from 'antd';
import {  Formik } from 'formik';
import actAddNewLocation from './duck/actions';


export default function AddLocation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();
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
                </Form>
            </Formik>
        </Fragment >
    );
};
