import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Input,
    Select,
} from 'antd';
import { useFormik } from 'formik';
import { actUpdateRoom, actUploadRoomImg } from './duck/actions';

export default function EditRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const [defaultImgSrc, setDefaultImgSrc] = useState('https://airbnbnew.cybersoft.edu.vn/avatar/27-09-2023-11-33-00-hotel.png');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const roomDetail = useSelector(state => state.detailRoomReducer.data);
    const [imgSrc, setImgSrc] = useState(roomDetail?.hinhAnh || defaultImgSrc);

    useEffect(() => {
        if (roomDetail?.hinhAnh) {
            setImgSrc(roomDetail.hinhAnh);
        } else {
            setImgSrc(defaultImgSrc);
        }
    }, [roomDetail?.hinhAnh, defaultImgSrc]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: roomDetail?.id,
            tenPhong: roomDetail?.tenPhong,
            khach: roomDetail?.khach,
            phongNgu: roomDetail?.phongNgu,
            giuong: roomDetail?.giuong,
            phongTam: roomDetail?.phongTam,
            moTa: roomDetail?.moTa,
            giaTien: roomDetail?.giaTien,
            mayGiat: roomDetail?.mayGiat,
            banLa: roomDetail?.banLa,
            tivi: roomDetail?.tivi,
            dieuHoa: roomDetail?.dieuHoa,
            wifi: roomDetail?.wifi,
            bep: roomDetail?.bep,
            doXe: roomDetail?.doXe,
            hoBoi: roomDetail?.hoBoi,
            banUi: roomDetail?.banUi,
            maViTri: roomDetail?.maViTri,
            hinhAnh: null,
        },

        onSubmit: async (values) => {
            const roomId = values.id;
            await dispatch(actUpdateRoom(roomId, values, navigate));
        },
    });

    const formikImg = useFormik({
        initialValues: {
            formFile: null
        },

        onSubmit: (value) => {
            const roomId = roomDetail.id;
            let formData = new FormData();
            for (let key in value) {
                if (key !== 'formFile') {
                    formData.append(key, value[key]);
                } else {
                    formData.append('formFile', value.formFile);
                }
            };
            dispatch(actUploadRoomImg(roomId, formData));
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
                CHỈNH SỬA THÔNG TIN
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
                                    src={imgSrc === '' ? roomDetail?.hinhAnh : imgSrc}
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

                    <div className='w-full '>
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
                                label='Máy giặt'
                                htmlFor='mayGiat'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Máy giặt'
                                    value={formik.values.mayGiat ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('mayGiat', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Bàn là'
                                htmlFor='banLa'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Bàn là'
                                    value={formik.values.banLa ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('banLa', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Tivi'
                                htmlFor='tivi'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Tivi'
                                    value={formik.values.tivi ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('tivi', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Điều hòa'
                                htmlFor='dieuHoa'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Điều hòa'
                                    value={formik.values.dieuHoa ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('dieuHoa', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Wifi'
                                htmlFor='wifi'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Wifi'
                                    value={formik.values.wifi ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('wifi', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Bếp'
                                htmlFor='bep'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Bếp'
                                    value={formik.values.bep ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('bep', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Đỗ xe'
                                htmlFor='doXe'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Đỗ xe'
                                    value={formik.values.doXe ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('doXe', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Hồ bơi'
                                htmlFor='hoBoi'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Hồ bơi'
                                    value={formik.values.hoBoi ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('hoBoi', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >

                            <Form.Item
                                label='Bàn ủi'
                                htmlFor='banUi'
                                className='custom-label-select'
                            >
                                <Select
                                    placeholder='Bàn ủi'
                                    value={formik.values.banUi ? 'true' : 'false'}
                                    onChange={(value) => {
                                        formik.setFieldValue('banUi', value === 'true');
                                    }}
                                >
                                    <Select.Option value='true'>Có</Select.Option>
                                    <Select.Option value='false'>Không</Select.Option>
                                </Select>
                            </Form.Item >
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
                            label='Mã vị trí'
                            htmlFor='maViTri'
                        // rules={[{ required: true, message: 'Vui lòng nhập giá tiền' }]}
                        >
                            <Input
                                name='maViTri'
                                className='ml-3'
                                placeholder='Nhập mã vị trí'
                                value={formik.values.maViTri}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Tên phòng'
                            htmlFor='tenPhong'
                        // rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
                        >
                            <Input
                                name='tenPhong'
                                className='ml-3'
                                placeholder='Nhập tên phòng'
                                value={formik.values.tenPhong}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Khách'
                            htmlFor='khach'
                        // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                        >
                            <Input
                                name='khach'
                                className='ml-3'
                                placeholder='Nhập số khách'
                                value={formik.values.khach}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Phòng ngủ'
                            htmlFor='phongNgu'
                        // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                        >
                            <Input
                                name='phongNgu'
                                className='ml-3'
                                placeholder='Nhập số phòng ngủ'
                                value={formik.values.phongNgu}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Giường'
                            htmlFor='giuong'
                        // rules={[{ required: true, message: 'Vui lòng nhập số giường' }]}
                        >
                            <Input
                                name='giuong'
                                className='ml-3'
                                placeholder='Nhập số giường'
                                value={formik.values.giuong}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Phòng tắm'
                            htmlFor='phongTam'
                        // rules={[{ required: true, message: 'Vui lòng nhập số phòng tắm' }]}
                        >
                            <Input
                                name='phongTam'
                                className='ml-3'
                                placeholder='Nhập số phòng tắm'
                                value={formik.values.phongTam}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Mô tả'
                            htmlFor='moTa'
                        // rules={[{ required: true, message: 'Vui lòng nhập mô tả phòng' }]}
                        >
                            <Input
                                name='moTa'
                                className='ml-3'
                                placeholder='Nhập mô tả phòng'
                                value={formik.values.moTa}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Giá tiền'
                            htmlFor='giaTien'
                        // rules={[{ required: true, message: 'Vui lòng nhập giá tiền' }]}
                        >
                            <Input
                                name='giaTien'
                                className='ml-3'
                                placeholder='Nhập giá tiền'
                                value={formik.values.giaTien}
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
