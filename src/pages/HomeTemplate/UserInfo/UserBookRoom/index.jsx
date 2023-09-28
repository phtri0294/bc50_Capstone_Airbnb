import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actDetailBookRoom, actDetailRoom } from './duck/actions';

export default function UserBookRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState('default');
  const [defaultImgSrc, setDefaultImgSrc] = useState('https://airbnbnew.cybersoft.edu.vn/avatar/24-09-2023-04-04-52-1.png');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
      dispatch(actDetailBookRoom(userId));
    }
  }, [dispatch, userId]);

  const dataBookRoom = useSelector((state) => state.HomeTemplateDetailBookRoomReducer.data);

  const renderData = () => {
    return dataBookRoom?.map((item, index) => {
      return <div className='w-full grid grid-flow-col justify-start border my-2' key={index}>
        <div className='border'>
          <img
            style={{ width: 170, height: 170 }}
            className='cover'
            src='https://airbnbnew.cybersoft.edu.vn/avatar/27-09-2023-11-33-00-hotel.png'
            alt='...'
          />
        </div>
        <div className='pl-3 py-2'>
          <div>
            <p>Mã phòng: {item?.maPhong}</p>
            <p>Số khách: {item?.soLuongKhach}</p>
          </div>
          <hr />
          <div>
            <p>Ngày đến: {item?.ngayDen}</p>
            <p>Ngày đi: {item?.ngayDi}</p>
          </div>
        </div>

      </div>
    })
  };

  return (
    <Fragment>
      <div>
        <div className="h-10" />
        <div className='container mx-auto mt-20 top-32'>
          <div className='grid grid-cols-3 items-center gap-2 ml-5'>
            <div
              className='text-green-600 col-span-2 flex justify-center xs:ml-10 md:ml-40 lg:ml-80 font-bold text-xl'>
              THÔNG TIN ĐẶT PHÒNG
            </div>
            <div className='flex flex-row-reverse'>
              <span>
                <i className='fas fa-arrow-right fa-md fa-fw mr-2 text-blue-500' />
                <a
                  href="/user-info"
                >
                  Thông tin người dùng
                </a>
              </span>
            </div>
          </div>
          <hr className='h-divider mb-4' />

          <div className='flex'>
            {/* Left Side */}
            <div className='w-full md:w-2/3 px-4'>
              {renderData()}
            </div>

            {/* Right Side */}
            <div class="hidden md:block md:w-1/3">
              <div class="w-full sticky top-32 border mt-4 rounded-lg shadow-lg p-4">
                <h3 class="font-semibold text-2xl mb-3">Khám phá các địa điểm thú vị</h3>

                <p class="text-gray-600 text-base">Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi</p>
                <a class="inline-block w-auto my-4 border border-black font-semibold hover:bg-gray-200 duration-200 px-5 py-3 rounded-lg" href="/">Bắt đầu tìm kiếm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
