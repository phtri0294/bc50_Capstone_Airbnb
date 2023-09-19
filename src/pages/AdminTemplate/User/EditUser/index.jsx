import React, { Fragment, useState, useEffect } from 'react';
import { Form, Input, Radio, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { actUpdateUser, actUploadUserImg } from './duck/actions';

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  const [formData, setFormData] = useState(null);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue('hinhAnh', file);
    setFormData(file);
  };

  const userDetail = useSelector(state => state.detailUserReducer.userDetail);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userDetail?.id,
      name: userDetail?.name,
      email: userDetail?.email,
      password: userDetail?.password || '',
      phone: userDetail?.phone || '',
      birthday: userDetail?.birthday,
      gender: userDetail?.gender,
      role: userDetail?.role,
      avatar: null,
    },

    onSubmit: async (values) => {
      const userId = values.id;
      await dispatch(actUpdateUser(userId, values, navigate));
    }
  });

  return (
    <Fragment>
      <div
        className='heading-page text-orange-800'>
        CHỈNH SỬA THÔNG TIN
      </div>
      <hr className='h-divider mb-4' />

      <div className='flex flex-wrap justify-center'>
        {/* Left <Side></Side> */}
        <div className='w-full md:w-1/3 border'>

          <div className='w-full border rounded-lg px-3 pt-2'>
            <Form.Item
              className='ml-5'
            >
              <img
                style={{ width: 170, height: 170 }}
                className='mx-auto rounded-full'
                src={imgSrc !== '' ? imgSrc : 'https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'}
                alt='...'
              />
              <br />
              <input
                type='file'
                onChange={handleChangeFile}
                accept='image/png, image/jpeg,image/gif,image/png'
              />
              <button
                type='submit'
                className='button-submit-edit mt-2'
                onClick={() => {
                  if (formData) {
                    dispatch(actUploadUserImg(formData));
                  } else {
                    alert('Vui lòng chọn một hình ảnh trước khi cập nhật.');
                  }
                }}
              >
                Cập nhật ảnh
              </button>
            </Form.Item>
          </div>

          <div className="mt-4 text-center">
            <div>
              <i className='fa fa-user-check text-white bg-green-500 rounded-full p-2' />
              <span className="ml-2 font-semibold text-lg">Xác minh danh tính</span>
            </div>
          </div>

          <div className="mt-4 border-t py-2 ml-3">
            <div className="font-semibold text-lg text-gray-800">
              Đã xác nhận
            </div>

            <div className="mt-2">
              <i className="fa fa-check-circle"></i>
              <span className="ml-2 text-sm italic">
                Địa chỉ email
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full md:w-2/4 lg:w-3/5 pl-5'>
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
            >
              <Input
                name='id'
                placeholder='Nhập số id'
                value={formik.values.id}
                onChange={formik.handleChange}
                disabled={true}
              />
            </Form.Item>

            <Form.Item
              label='Họ tên'
              htmlFor='name'
            >
              <Input
                name='name'
                placeholder='Nhập họ tên'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item
              label='Email'
              htmlFor='email'
            >
              <Input
                name='email'
                placeholder='Nhập email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item
              label='Mật Khẩu'
              htmlFor='password'
            >
              <Input
                name='password'
                placeholder='Nhập mật khẩu'
                value={formik.values.password}
                onChange={formik.handleChange}
                disabled={true}
              />
            </Form.Item>

            <Form.Item
              label='Điện Thoại'
              htmlFor='phone'
            >
              <Input
                name='phone'
                placeholder='Nhập số điện thoại'
                value={formik.values.phone}
                onChange={formik.handleChange}
                disabled={true}
              />
            </Form.Item>

            <Form.Item
              label='Ngày sinh'
              htmlFor='birthday'
            >
              <Input
                name='birthday'
                placeholder='Nhập ngày sinh'
                value={formik.values.birthday}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item
              label='Giới tính'
              htmlFor='gender'
            >
              <Select
                placeholder='Giới tính'
                value={formik.values.gender ? "true" : "false"}
                onChange={(value) => {
                  formik.setFieldValue('gender', value === 'true');
                }}
              >
                <Select.Option value='true'>Nam</Select.Option>
                <Select.Option value='false'>Nữ</Select.Option>
              </Select>
            </Form.Item >

            <Form.Item
              label='Vai trò'
              htmlFor='role'
            >
              <Select
                placeholder='Chọn vai trò người dùng'
                value={formik.values.role}
                onChange={(value) => {
                  formik.setFieldValue('role', value);
                }}
              >
                <Select.Option value='ADMIN'>ADMIN</Select.Option>
                <Select.Option value='USER'>USER</Select.Option>
              </Select>
            </Form.Item >

            <Form.Item label='Thao tác'>
              <button
                type='submit'
                className='button-submit-edit'
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

export default EditUser;