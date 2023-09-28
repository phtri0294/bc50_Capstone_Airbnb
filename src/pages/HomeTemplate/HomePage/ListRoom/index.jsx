import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actManageRoom from './duck/actions';

export default function ListRoom() {
    const dispatch = useDispatch();
    const dataRoom = useSelector((state) => state.manageRoomReducer.data);

    useEffect(() => {
        dispatch(actManageRoom());
    }, [dispatch]);

    const renderData = () => {
        if (!dataRoom) {
            return null;
        }
        const data = dataRoom?.map((item, index) => (
            <div className='card border-red-500 bg-gray-200 '>
                <a
                    key={index}
                    href='/admin'
                    className='font-link-edit'
                >
                    <div>
                        <img
                            src={item.hinhAnh}
                            alt={item.tenPhong}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            className='rounded-t-md'
                        />
                    </div>
                    <div className='mx-1'>
                        <p className="flex justify-between mt-2">
                            <span className="font-bold">{item.tenPhong}</span>
                            <span><i className="fa fa-star"></i> 7.32</span>
                        </p>
                        <p className="text-gray-500">9214 km</p>
                        <p className="mt-1">
                            <span className="font-bold">${item.giaTien}</span> đêm
                        </p>
                    </div>
                </a>
            </div>
        ));
        return data;
    };

    return (
        <div className="container mx-auto mt-5">
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {renderData()}
            </div>

        </div>

    );
};