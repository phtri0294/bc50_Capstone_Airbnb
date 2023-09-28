import React, { Fragment, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Input,
} from 'antd';
import { useFormik } from 'formik';
import { actUpdateLocation, actUploadLocationImg } from './duck/actions';

export default function EditLocation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [defaultImgSrc, setDefaultImgSrc] = useState('https://airbnbnew.cybersoft.edu.vn/avatar/27-09-2023-11-33-00-hotel.png');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const locationDetail = useSelector(state => state.detailLocationReducer.data);
    const [imgSrc, setImgSrc] = useState(locationDetail?.hinhAnh || defaultImgSrc);

    useEffect(() => {
        if (locationDetail?.hinhAnh) {
            setImgSrc(locationDetail.hinhAnh);
        } else {
            setImgSrc(defaultImgSrc);
        }
    }, [locationDetail?.hinhAnh, defaultImgSrc]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: locationDetail?.id,
            tenViTri: locationDetail?.tenViTri,
            tinhThanh: locationDetail?.tinhThanh,
            quocGia: locationDetail?.quocGia,
            hinhAnh: null,
        },

        onSubmit: async (values) => {
            const locationId = values.id;
            await dispatch(actUpdateLocation(locationId, values, navigate));
        },
    });

    const formikImg = useFormik({
        initialValues: {
            formFile: null
        },

        onSubmit: (value) => {
            const locationId = locationDetail.id;
            let formData = new FormData();
            for (let key in value) {
                if (key !== 'formFile') {
                    formData.append(key, value[key]);
                } else {
                    formData.append('formFile', value.formFile);
                }
            };
            dispatch(actUploadLocationImg(locationId, formData));
        },
    });

    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImgSrc(e.target.result);
            formikImg.setFieldValue('formFile', file);
        };
    };

    return (
        <Fragment>
            <div
                className='heading-page text-orange-800'>
                CHỈNH SỬA THÔNG TIN VỊ TRÍ
            </div>
            <hr className='h-divider mb-4' />
            <div className='w-full flex justify-stretch border'>
                {/* Left Side */}
                <div className='w-full md:w-3/6 lg:w-3/6 border'>
                    <div className='w-full border py-2 pl-5'>
                        <Form
                            onSubmitCapture={formikImg.handleSubmit}
                            onValuesChange={onFormLayoutChange}
                        >
                            <Form.Item
                                name='hinhAnh'
                                className='grid justify-items-center'
                            >
                                <img
                                    style={{ width: 170, height: 170 }}
                                    className='ml-5'
                                    src={imgSrc === '' ? locationDetail?.hinhAnh : imgSrc}
                                    alt='...'
                                />
                                <br />
                                <input
                                    type='file'
                                    name='hinhAnh'
                                    className='ml-5'
                                    onChange={handleChangeFile}
                                    accept='image/png, image/jpeg, image/gif'
                                />
                                <button
                                    type='submit'
                                    className='button-submit-edit mt-2 ml-5'
                                >
                                    Cập nhật ảnh
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                {/* Right Side */}
                <div className='w-full md:w-4/6 lg:w-4/6 ml-5'>
                    <Form
                        layout='horizontal'
                        size={componentSize}
                        labelCol={{ span: 4, }}
                        wrapperCol={{ span: 14, }}
                        style={{ maxWidth: 1000, }}
                        onSubmitCapture={formik.handleSubmit}
                        onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item
                            label='ID'
                            htmlFor='id'
                        // rules={[{ required: true, message: 'Vui lòng nhập giá tiền' }]}
                        >
                            <Input
                                name='id'
                                className='ml-3'
                                placeholder='Nhập id'
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                disabled={true}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Tên vị trí'
                            htmlFor='tenViTri'
                        // rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
                        >
                            <Input
                                name='tenViTri'
                                className='ml-3'
                                placeholder='Nhập tên vị trí'
                                value={formik.values.tenViTri}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Tỉnh thành'
                            htmlFor='tinhThanh'
                        // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                        >
                            <Input
                                name='tinhThanh'
                                className='ml-3'
                                placeholder='Nhập tỉnh thành'
                                value={formik.values.tinhThanh}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Quốc gia'
                            htmlFor='quocGia'
                        // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                        >
                            <Input
                                name='quocGia'
                                className='ml-3'
                                placeholder='Nhập quốc gia'
                                value={formik.values.quocGia}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Thao tác'
                        >
                            <button
                                type='submit'
                                className='button-submit-edit ml-3'
                            >
                                Cập nhật
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Fragment >
    );
};