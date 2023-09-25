import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Radio,
} from 'antd';
import { useFormik, Formik } from 'formik';
import actAddNewBookRoom from './duck/actions';


export default function AddBookRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const initialValues = {
        id: '',
        maPhong: '',
        ngayDen: '',
        ngayDi: '',
        soLuongKhach: '',
        maNguoiDung: '',
    };

    const onSubmitForm = (values) => {
        dispatch(actAddNewBookRoom(values, navigate));
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
                        THÊM ĐẶT PHÒNG MỚI
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
                        label='Mã phòng'
                        name='maPhong'
                    // rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
                    >
                        <Input
                            name='maPhong'
                            className='ml-3'
                            placeholder='Nhập mã phòng'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Ngày đến'
                        name='ngayDen'
                    // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                    >
                        <Input
                            name='ngayDen'
                            className='ml-3'
                            placeholder='Nhập ngày đến'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Ngày đi'
                        name='ngayDi'
                    // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                    >
                        <Input
                            name='ngayDi'
                            className='ml-3'
                            placeholder='Nhập ngày đi'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Số lượng khách'
                        name='soLuongKhach'
                    // rules={[{ required: true, message: 'Vui lòng nhập số giường' }]}
                    >
                        <Input
                            name='soLuongKhach'
                            className='ml-3'
                            placeholder='Nhập số lượng khách'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Mã người dùng'
                        name='maNguoiDung'
                    // rules={[{ required: true, message: 'Vui lòng nhập số phòng tắm' }]}
                    >
                        <Input
                            name='maNguoiDung'
                            className='ml-3'
                            placeholder='Nhập mã người dùng'
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
                </Form>
            </Formik>
        </Fragment >
    );
};
