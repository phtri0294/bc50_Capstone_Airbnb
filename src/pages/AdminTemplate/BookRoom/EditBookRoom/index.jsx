import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Input,
} from 'antd';
import { useFormik } from 'formik';
import { actUpdateBookRoom } from './duck/actions';

export default function EditRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const bookRoomDetail = useSelector(state => state.detailBookRoomReducer.data);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: bookRoomDetail?.id,
            maPhong: bookRoomDetail?.maPhong,
            ngayDen: bookRoomDetail?.ngayDen,
            ngayDi: bookRoomDetail?.ngayDi,
            soLuongKhach: bookRoomDetail?.soLuongKhach,
            maNguoiDung: bookRoomDetail?.maNguoiDung,
        },

        onSubmit: (values) => {
            const bookRoomId = values.id;
            dispatch(actUpdateBookRoom(bookRoomId, values, navigate));
        },

    });

    return (
        <Fragment>
            <Form
                layout='horizontal'
                size={componentSize}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                style={{ maxWidth: 1000, }}
                onSubmitCapture={formik.handleSubmit}
                onValuesChange={onFormLayoutChange}
            >
                <div
                    className='heading-page text-orange-800'>
                    CHỈNH SỬA THÔNG TIN ĐẶT PHÒNG
                </div>
                <hr className='h-divider mb-4' />
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
                    label='Mã phòng'
                    htmlFor='maPhong'
                // rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
                >
                    <Input
                        name='maPhong'
                        className='ml-3'
                        placeholder='Nhập mã phòng'
                        value={formik.values.maPhong}
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Ngày đến'
                    htmlFor='ngayDen'
                // rules={[{ required: true, message: 'Vui lòng nhập số khách' }]}
                >
                    <Input
                        name='ngayDen'
                        className='ml-3'
                        placeholder='Nhập ngày đến'
                        value={formik.values.ngayDen}
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Ngày đi'
                    htmlFor='ngayDi'
                // rules={[{ required: true, message: 'Vui lòng nhập số phòng ngủ' }]}
                >
                    <Input
                        name='ngayDi'
                        className='ml-3'
                        placeholder='Nhập ngày đi'
                        value={formik.values.ngayDi}
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Số lượng khách'
                    htmlFor='soLuongKhach'
                // rules={[{ required: true, message: 'Vui lòng nhập số giường' }]}
                >
                    <Input
                        name='soLuongKhach'
                        className='ml-3'
                        placeholder='Nhập số lượng khách'
                        value={formik.values.soLuongKhach}
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Mã người dùng'
                    htmlFor='maNguoiDung'
                // rules={[{ required: true, message: 'Vui lòng nhập số phòng tắm' }]}
                >
                    <Input
                        name='maNguoiDung'
                        className='ml-3'
                        placeholder='Nhập mã người dùng'
                        value={formik.values.maNguoiDung}
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
        </Fragment >
    );
};
