import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, Input } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
} from '@ant-design/icons';
import {
    actManageBookRoom,
    actDeleteBookRoom,
} from './duck/actions';
import {
    actDetailBookRoom
} from './EditBookRoom/duck/actions';

export default function ManageBookRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataBookRoom = useSelector((state) => state.manageBookRoomReducer.data);

    useEffect(() => {
        dispatch(actManageBookRoom());
    }, [dispatch]);

    const handleInfoEditBookRoom = async (id) => {
        dispatch(actDetailBookRoom(id));
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => {
                let idA = a.id;
                let idB = b.id;
                if (idA > idB) {
                    return 1;
                }
                return -1;
            },
            width: '10%',
        },
        {
            title: 'Mã phòng',
            dataIndex: 'maPhong',
            sorter: (a, b) => {
                let maPhongA = a.maPhong;
                let maPhongB = b.maPhong;
                if (maPhongA > maPhongB) {
                    return 1;
                }
                return -1;
            },
            width: '10%',
        },
        {
            title: 'Ngày đến',
            dataIndex: 'ngayDen',
            sorter: (a, b) => {
                let ngayDennA = a.ngayDen;
                let ngayDennB = b.ngayDen;
                if (ngayDennA > ngayDennB) {
                    return 1;
                }
                return -1;
            },
            width: '20%',
        },
        {
            title: 'Ngày đi',
            dataIndex: 'ngayDi',
            sorter: (a, b) => {
                let ngayDiA = a.ngayDi;
                let ngayDiB = b.ngayDi;
                if (ngayDiA > ngayDiB) {
                    return 1;
                }
                return -1;
            },
            width: '20%',
        },
        {
            title: 'Số lượng khách',
            dataIndex: 'soLuongKhach',
            sorter: (a, b) => {
                let soLuongKhachA = a.soLuongKhach;
                let soLuongKhachB = b.soLuongKhach;
                if (soLuongKhachA > soLuongKhachB) {
                    return 1;
                }
                return -1;
            },
            width: '10%',
        },
        {
            title: 'Mã người đặt phòng',
            dataIndex: 'maNguoiDung',
            sorter: (a, b) => {
                let maNguoiDungA = a.maNguoiDung;
                let maNguoiDungB = b.maNguoiDung;
                if (maNguoiDungA > maNguoiDungB) {
                    return 1;
                }
                return -1;
            },
            width: '15%',
        },
        {
            title: 'Thao Tác',
            dataIndex: 'thaoTac',
            width: '20%',
            render: (text, record) => record.tacVu,
        }
    ];

    const renderData = () => {
        if (!dataBookRoom) {
            return [];
        }
        const data = dataBookRoom?.map((item, index) => {
            return {
                key: index,
                id: item.id,
                maPhong: item.maPhong,
                ngayDen: item.ngayDen,
                ngayDi: item.ngayDi,
                soLuongKhach: item.soLuongKhach,
                maNguoiDung: item.maNguoiDung,
            
                tacVu: (<Fragment>
                    <NavLink
                        key={1}
                        className='text-2xl'
                        to={`/admin/edit-book-room/${item.id}`}
                        onClick={() => handleInfoEditBookRoom(item.id)}

                    >
                        <EditOutlined
                            className='text-yellow-600'
                        />
                    </NavLink >

                    <NavLink
                        key={2}
                        className='ml-3 text-3xl'
                        onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xoá mã đặt phòng này không: ' + item.maPhong)) {
                                dispatch(actDeleteBookRoom(item.id));
                                dispatch(actManageBookRoom());
                            }
                        }}
                    ><DeleteOutlined
                            className='text-red-600'
                        />
                    </NavLink>
                </Fragment >
                ),
            };
        });
        return <Table columns={columns} dataSource={data} />
    };

    return (
        <Fragment>
            <div
                className='heading-page text-cyan-600'>
                DANH SÁCH ĐẶT PHÒNG
            </div>
            <hr className='h-divider mb-4' />
            <NavLink
                to={'/admin/add-book-room'}
                className='text-white button-add-new inline-block'
                onClick={() => {
                    navigate('admin/BookRoom/AddBookRoom');
                }}
            >
                Thêm đặt phòng mới
            </NavLink>
            {renderData()}
        </Fragment>
    );
};


