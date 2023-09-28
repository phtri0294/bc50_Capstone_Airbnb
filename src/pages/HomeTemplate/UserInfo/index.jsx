import React, { Fragment, useState, useEffect } from 'react';
import {
  Form,
  Input,
  Select,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { actUpdateUser, actDetailUser, actUploadUserImg } from './duck/actions';
import { actDetailBookRoom } from './UserBookRoom/duck/actions';

export default function UserInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState('default');
  const [defaultImgSrc, setDefaultImgSrc] = useState('https://airbnbnew.cybersoft.edu.vn/avatar/24-09-2023-04-04-52-1.png');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    birthday: false,
    gender: false,
  });

  const toggleEditing = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
    console.log('isEditing', isEditing)
    console.log('field', field)
  };

  const getUserDataFromLocalStorage = (storageKey) => {
    try {
      const storedData = localStorage.getItem(storageKey);
      if (storedData) {
        return JSON.parse(storedData);
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const LOGIN_USER_KEY = 'LOGIN_USER';
  const LOGIN_ADMIN_KEY = 'LOGIN_ADMIN';

  const userAdmin = getUserDataFromLocalStorage(LOGIN_ADMIN_KEY);
  const userUser = getUserDataFromLocalStorage(LOGIN_USER_KEY);

  const loggedInUser = userAdmin || userUser;
  const userId = loggedInUser ? loggedInUser.user.id : null;

  useEffect(() => {
    if (userId) {
      dispatch(actDetailUser(userId));
    }
  }, [dispatch, userId]);

  const userDetail = useSelector(state => state.HomeTemplateDetailUserReducer.data);
  const [imgSrc, setImgSrc] = useState(userDetail?.avatar || defaultImgSrc);

  useEffect(() => {
    if (userDetail?.avatar) {
      setImgSrc(userDetail.avatar);
    } else {
      setImgSrc(defaultImgSrc);
    }
  }, [userDetail?.avatar, defaultImgSrc]);

  const handleInfoBookRoom = async (userId) => {
    dispatch(actDetailBookRoom(userId));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userDetail?.id,
      name: userDetail?.name,
      email: userDetail?.email,
      phone: userDetail?.phone,
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

  const formikImg = useFormik({
    initialValues: {
      formFile: null
    },

    onSubmit: (value) => {
      let formData = new FormData();
      for (let key in value) {
        if (key !== 'formFile') {
          formData.append(key, value[key]);
        } else {
          formData.append('formFile', value.formFile);
        }
      };
      dispatch(actUploadUserImg(formData));
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
      <div>
        <div className="h-10" />
        <div className='container mx-auto mt-20 top-32'>
          <div className='grid grid-cols-3 items-center gap-2 ml-5'>
            <div
              className='text-orange-800 col-span-2 flex justify-center xs:ml-10 md:ml-40 lg:ml-80 font-bold text-xl'>
              THÔNG TIN NGƯỜI DÙNG
            </div>
            <div className='flex flex-row-reverse'>
              <span>
                <i className='fas fa-arrow-right fa-md fa-fw mr-2 text-blue-500' />
                <a 
                href="/user-book-room"
                onClick={() => handleInfoBookRoom(userId)}
                >Xem đặt phòng</a></span>
            </div>
          </div>
          <hr className='h-divider mb-4' />

          <div className='flex flex-wrap justify-center'>
            {/* Left Side */}
            <div className='w-full md:w-1/3 border'>
              <div className='w-full border px-3 pt-2'>
                <Form
                  onSubmitCapture={formikImg.handleSubmit}
                  onValuesChange={onFormLayoutChange}
                >
                  <Form.Item
                    className='text-center'
                  >
                    <img
                      style={{ width: 170, height: 170 }}
                      className='ml-20 rounded-full '
                      src={imgSrc === '' ? userDetail?.avatar : imgSrc}
                      alt='...'
                    />
                    <br />
                    {/* <div className='items-center'> */}
                    <input
                      type='file'
                      className='ml-20'
                      onChange={handleChangeFile}
                      accept='image/png, image/jpeg, image/gif, image/png'
                      name="formFile"
                    />
                    {/* </div> */}
                    <button
                      type='submit'
                      className='button-submit-edit mt-2'
                    >
                      Cập nhật ảnh
                    </button>
                  </Form.Item>
                </Form>
              </div>

              <div className="mt-4 text-center">
                <i className='fa fa-user-check text-white bg-green-500 rounded-full p-2' />
                <span className="ml-2 font-semibold text-lg">Xác minh danh tính</span>
              </div>

              <div className="my-2 mx-10 text-center">
                <p>Xác minh danh tính của bạn với huy hiệu xác minh danh tính.</p>
              </div>

              <div className='text-center'>
                <button
                  type='button'
                  className='button-success-edit mt-2'
                >
                  Nhận huy hiệu
                </button>
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

                <div className="mt-2">
                  <i className="fa fa-check-circle"></i>
                  <span className="ml-2 text-sm italic">
                    Số điện thoại
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

                <div class="border-b py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Họ tên</p>
                      <p>{userDetail?.name}</p>
                    </div>
                    <div>
                      <p
                        class="underline font-md text-md tracking-wide text-gray-800 hover:text-yellow-600 duration-150 cursor-pointer"
                        onClick={() => toggleEditing('name')}
                      >
                        Thay đổi
                      </p>
                    </div>
                  </div>
                  <div className={isEditing.name ? '' : 'hidden'}>
                    <Input
                      name='name'
                      placeholder='Nhập họ tên'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"

                    />
                    <button
                      type='submit'
                      className='button-submit-edit py-3 px-5 mt-2'
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>

                <div class="border-b py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Email</p>
                      <p>{userDetail?.email}</p>
                    </div>
                    <div>
                      <p class="underline font-md text-md tracking-wide text-gray-800 hover:text-yellow-600 duration-150 cursor-pointer"
                        onClick={() => toggleEditing('email')}
                      >
                        Thay đổi
                      </p>
                    </div>
                  </div>
                  <div className={isEditing.email ? '' : 'hidden'}>
                    <Input
                      name='email'
                      placeholder='Nhập email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"

                    />
                    <button
                      type='submit'
                      className='button-submit-edit py-3 px-5 mt-2'
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>

                <div class="border-b py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Số điện thoại</p>
                      <p>{userDetail?.phone}</p>
                    </div>
                    <div>
                      <p class="underline font-md text-md tracking-wide text-gray-800 hover:text-yellow-600 duration-150 cursor-pointer"
                        onClick={() => toggleEditing('phone')}
                      >
                        Thay đổi
                      </p>
                    </div>
                  </div>
                  <div className={isEditing.phone ? '' : 'hidden'}>
                    <Input
                      name='phone'
                      placeholder='Nhập số điện thoại'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"

                    />
                    <button
                      type='submit'
                      className='button-submit-edit py-3 px-5 mt-2'
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>

                <div class="border-b py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Ngày sinh</p>
                      <p>{userDetail?.birthday}</p>
                    </div>
                    <div>
                      <p
                        class="underline font-md text-md tracking-wide text-gray-800 hover:text-yellow-600 duration-150 cursor-pointer"
                        onClick={() => toggleEditing('birthday')}
                      >
                        Thay đổi
                      </p>
                    </div>
                  </div>
                  <div className={isEditing.birthday ? '' : 'hidden'}>
                    <Input
                      name='birthday'
                      placeholder='Nhập ngày sinh'
                      value={formik.values.birthday}
                      onChange={formik.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"

                    />
                    <button
                      type='submit'
                      className='button-submit-edit py-3 px-5 mt-2'
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>

                <div class="border-b py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Giới tính</p>
                      <p>{userDetail?.gender ? "Nam" : "Nữ"}</p>
                    </div>
                    <div>
                      <p class="underline font-md text-md tracking-wide text-gray-800 hover:text-yellow-600 duration-150 cursor-pointer"
                        onClick={() => toggleEditing('gender')}
                      >
                        Thay đổi
                      </p>
                    </div>
                  </div>
                  <div className={isEditing.gender ? '' : 'hidden'}>
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
                    <button
                      type='submit'
                      className='button-submit-edit py-3 px-5 mt-2'
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </Fragment >
  );
};