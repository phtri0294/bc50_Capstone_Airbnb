import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
} from '@ant-design/icons';
import {
    actManageLocation,
    actDeleteLocation,
} from './duck/actions';
import {
    actDetailLocation
} from './EditLocation/duck/actions';

export default function ManageLocation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataLocation = useSelector((state) => state.manageLocationReducer.data);
    const detailLocation = useSelector((state) => state.detailLocationReducer.data);

    useEffect(() => {
        dispatch(actManageLocation());
    }, [dispatch]);

    const handleInfoEditLocation = (id) => {
        dispatch(actDetailLocation(id));
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
            title: 'Tên vị trí',
            dataIndex: 'tenViTri',
            sorter: (a, b) => {
                let tenViTriA = a.tenViTri.toLowerCase().trim();
                let tenViTriB = b.tenViTri.toLowerCase().trim();
                if (tenViTriA > tenViTriB) {
                    return 1;
                }
                return -1;
            },
            width: '15%',
        },
        {
            title: 'Tỉnh thành',
            dataIndex: 'tinhThanh',
            sorter: (a, b) => {
                let roleA = a.role.toLowerCase().trim();
                let roleB = b.role.toLowerCase().trim();
                if (roleA > roleB) {
                    return 1;
                }
                return -1;
            },
            width: '15%',
        },
        {
            title: 'Quốc gia',
            dataIndex: 'quocGia',
            sorter: (a, b) => {
                let quocGiaA = a.quocGia.toLowerCase().trim();
                let quocGiaB = b.quocGia.toLowerCase().trim();
                if (quocGiaA > quocGiaB) {
                    return 1;
                }
                return -1;
            },
            width: '15%',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            width: 200,

        },
        {
            title: 'Thao Tác',
            dataIndex: 'thaoTac',
            width: '20%',
            render: (text, record) => record.tacVu,
        }
    ];

    const renderData = () => {
        if (!dataLocation) {
            return [];
        }
        const data = dataLocation?.map((item, index) => {
            return {
                key: index,
                id: item.id,
                tenViTri: item.tenViTri,
                tinhThanh: item.tinhThanh,
                quocGia: item.quocGia,
                hinhAnh: <img width={120} height={120} src={item.hinhAnh} alt={item.tenViTri} />,
                tacVu: (
                    <Fragment>
                        <NavLink
                            key={1}
                            className='text-2xl'
                            to={`/admin/edit-location/${item.id}`}
                            onClick={() => handleInfoEditLocation(item.id)}

                        >
                            <EditOutlined
                                className='text-yellow-600'
                            />
                        </NavLink >

                        <NavLink
                            key={2}
                            className='ml-3 text-3xl'
                            onClick={() => {
                                if (window.confirm('Bạn có chắc muốn xoá vị trí này không: ' + item.tenViTri + ' (ID: ' + item.id + ')')) {
                                    dispatch(actDeleteLocation(item.id));
                                    dispatch(actManageLocation());
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
                DANH SÁCH VỊ TRÍ
            </div>
            <hr className='h-divider mb-4' />
            <NavLink
                to={'/admin/add-location'}
                className='text-white button-add-new inline-block'
                onClick={() => {
                    navigate('admin/Location/AddLocation');
                }}
            >
                Thêm vị trí
            </NavLink>
            {renderData()}
        </Fragment>
    );
};


