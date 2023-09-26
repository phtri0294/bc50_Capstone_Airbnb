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
import actAddNewRoom from './duck/actions';


export default function AddRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();
    const [imgSrc, setImgSrc] = useState('');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    // const formik = useFormik({
    //     initialValues: {
    //         id: '',
    //         tenPhong: 0,
    //         khach: 0,
    //         phongNgu: 0,
    //         giuong: 0,
    //         phongTam: 0,
    //         moTa: '',
    //         giaTien: 0,
    //         mayGiat: false,
    //         banLa: false,
    //         tivi: false,
    //         dieuHoa: false,
    //         wifi: false,
    //         bep: false,
    //         doXe: false,
    //         hoBoi: false,
    //         banUi: false,
    //         maViTri: 0,
    //         // hinhAnh: {},
    //     },

    //     // onSubmit: (values) => {
    //     //     let formData = new FormData();
    //     //     for (let key in values) {
    //     //         if (key !== 'hinhAnh') {
    //     //             formData.append(key, values[key]);
    //     //         } else {
    //     //             formData.append('File', values.hinhAnh, values.hinhAnh.name);
    //     //         };
    //     //     }
    //     //     console.log(formData);
    //     //     console.log(values);
    //     //     dispatch(actAddNewRoom(formData, navigate));
    //     // },

    //     onSubmit: (values) => {
    //         // let formData = new FormData();
    //         // for (let key in values) {
    //         //     if (key !== 'hinhAnh') {
    //         //         formData.append(key, values[key]);
    //         //     } else if (values.hinhAnh instanceof File) {
    //         //         formData.append('File', values.hinhAnh, values.hinhAnh.name);
    //         //     }
    //         // }
    //         // console.log(formData);
    //         console.log(values);
    //         dispatch(actAddNewRoom(values, navigate));
    //     },
    // });

    // const onSubmitForm = (formData) => {
    //     dispatch(actAddNewRoom(formData, navigate));
    // };

    // const handleChangeSwitch = (fieldName, formik) => (value) => {
    //     formik.setFieldValue(fieldName, value);
    // };

    // const handleChangeFile = (e) => {
    //     let file = e.target.files[0];
    //     let reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = (e) => {
    //         setImgSrc(e.target.result);
    //     }
    //     formik.setFieldValue('hinhAnh', file);
    // };

    const initialValues = {
        id: '',
        tenPhong: 0,
        khach: 0,
        phongNgu: 0,
        giuong: 0,
        phongTam: 0,
        moTa: '',
        giaTien: 0,
        mayGiat: false,
        banLa: false,
        tivi: false,
        dieuHoa: false,
        wifi: false,
        bep: false,
        doXe: false,
        hoBoi: false,
        banUi: false,
        maViTri: 0,
        hinhAnh: {},
    };

    const onSubmitForm = (values) => {
        dispatch(actAddNewRoom(values, navigate));
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
                        THÊM PHÒNG MỚI
                    </div>
                    <hr className='h-divider mb-4' />
                    {/* <Form
                // form={form}
                layout='horizontal'
                size={componentSize}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                style={{ maxWidth: 1000, }}
                // onFinish={onSubmitForm}
                // onValuesChange={onFormLayoutChange}

                onSubmitCapture={formik.handleSubmit}
                onValuesChange={onFormLayoutChange}
            > */}
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

                            <div className='w-full '>
                                <Form.Item
                                    label='Máy giặt'
                                    name='mayGiat'
                                    className='custom-label-switch'
                                >
                                    <Select>

                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item >

                                <Form.Item
                                    label='Bàn là'
                                    name='banLa'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Tivi'
                                    name='tivi'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Điều hòa'
                                    name='dieuHoa'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Wifi'
                                    name='wifi'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Bếp'
                                    name='bep'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Đỗ xe'
                                    name='doXe'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Hồ bơi'
                                    name='hoBoi'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label='Bàn ủi'
                                    name='banUi'
                                    className='custom-label-switch'
                                >
                                    <Select>
                                        <Select.Option value='true'>Có</Select.Option>
                                        <Select.Option value='false'>Không</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className='w-full md:w-4/6 lg:w-4/6 ml-5'>
                            {/* <Form
                        // form={form}
                        layout='horizontal'
                        size={componentSize}
                        labelCol={{ span: 4, }}
                        wrapperCol={{ span: 14, }}
                        style={{ maxWidth: 1000, }}
                        // onFinish={onSubmitForm}
                        // onValuesChange={onFormLayoutChange}

                        onSubmitCapture={formik.handleSubmit}
                        onValuesChange={onFormLayoutChange}
                    > */}
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
                                label='Mã vị trí'
                                name='maViTri'
                            // rules={[{ required: true, message: 'Vui lòng nhập giá tiền' }]}
                            >
                                <Input
                                    name='maViTri'
                                    className='ml-3'
                                    placeholder='Nhập mã vị trí'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Tên phòng'
                                name='tenPhong'
                            // rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
                            >
                                <Input
                                    name='tenPhong'
                                    className='ml-3'
                                    placeholder='Nhập tên phòng'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Khách'
                                name='khach'
                            // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                            >
                                <Input
                                    name='khach'
                                    className='ml-3'
                                    placeholder='Nhập số khách'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Phòng ngủ'
                                name='phongNgu'
                            // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                            >
                                <Input
                                    name='phongNgu'
                                    className='ml-3'
                                    placeholder='Nhập số phòng ngủ'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Giường'
                                name='giuong'
                            // rules={[{ required: true, message: 'Vui lòng nhập số giường' }]}
                            >
                                <Input
                                    name='giuong'
                                    className='ml-3'
                                    placeholder='Nhập số giường'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Phòng tắm'
                                name='phongTam'
                            // rules={[{ required: true, message: 'Vui lòng nhập số phòng tắm' }]}
                            >
                                <Input
                                    name='phongTam'
                                    className='ml-3'
                                    placeholder='Nhập số phòng tắm'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Mô tả'
                                name='moTa'
                            // rules={[{ required: true, message: 'Vui lòng nhập mô tả phòng' }]}
                            >
                                <Input
                                    name='moTa'
                                    className='ml-3'
                                    placeholder='Nhập mô tả phòng'
                                />
                            </Form.Item>

                            <Form.Item
                                label='Giá tiền'
                                name='giaTien'
                            // rules={[{ required: true, message: 'Vui lòng nhập giá tiền' }]}
                            >
                                <Input
                                    name='giaTien'
                                    className='ml-3'
                                    placeholder='Nhập giá tiền'
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
