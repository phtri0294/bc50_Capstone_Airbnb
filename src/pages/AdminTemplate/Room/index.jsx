import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, Input } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import {
    actManageRoom,
    actDeleteRoom,
} from './duck/actions';
import {
    actDetailRoom
} from './EditRoom/duck/actions';

export default function ManageRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataRoom = useSelector((state) => state.manageRoomReducer.data);
    const detailRoom = useSelector((state) => state.detailRoomReducer.data);

    useEffect(() => {
        dispatch(actManageRoom());
    }, [dispatch]);

    const handleInfoEditRoom = async (id) => {
        dispatch(actDetailRoom(id));
    };

    const columns = [
        {
            title: 'Mã phòng',
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
            title: 'Tên phòng',
            dataIndex: 'tenPhong',
            sorter: (a, b) => {
                let nameA = a.name.toLowerCase().trim();
                let nameB = b.name.toLowerCase().trim();
                if (nameA > nameB) {
                    return 1;
                }
                return -1;
            },
            width: '25%',
        },
        {
            title: 'Số khách',
            dataIndex: 'khach',
            sorter: (a, b) => {
                let khachA = a.khach.toLowerCase().trim();
                let khachB = b.khach.toLowerCase().trim();
                if (khachA > khachB) {
                    return 1;
                }
                return -1;
            },
            width: '10%',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'giaTien',
            sorter: (a, b) => {
                let giaTienA = a.giaTien;
                let giaTienB = b.giaTien;
                if (giaTienA > giaTienB) {
                    return 1;
                }
                return -1;
            },
            width: '10%',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',

            width: '25%',
        },
        {
            title: 'Thao Tác',
            dataIndex: 'thaoTac',
            width: '20%',
            render: (text, record) => record.tacVu,
        }
    ];

    const renderData = () => {
        if (!dataRoom) {
            return [];
        }
        const data = dataRoom?.map((item, index) => {
            return {
                key: index,
                id: item.id,
                tenPhong: item.tenPhong,
                khach: item.khach,
                giaTien: item.giaTien,
                hinhAnh: <img width={120} height={100} src={item.hinhAnh} alt={item.tenPhong} />,
                tacVu: (<Fragment>
                    <NavLink
                        key={1}
                        className='text-2xl'
                        to={`/admin/edit-room/${item.id}`}
                        onClick={() => handleInfoEditRoom(item.id)}

                    > <EditOutlined
                            className='text-yellow-600'
                        />
                    </NavLink >

                    <NavLink
                        key={2}
                        className='ml-3 text-3xl'
                        onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xoá căn phòng này không: ' + item.tenPhong + ' (ID: ' + item.id + ')')) {
                                dispatch(actDeleteRoom(item.id));
                                dispatch(actManageRoom());
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
                DANH SÁCH PHÒNG
            </div>
            <hr className='h-divider mb-4' />
            <NavLink
                to={'/admin/add-room'}
                className='text-white button-add-new  inline-block'
                onClick={() => {
                    navigate('admin/Room/AddRoom');
                }}
            >
                Thêm Phòng
            </NavLink>
            {renderData()}
        </Fragment>
    );
};


