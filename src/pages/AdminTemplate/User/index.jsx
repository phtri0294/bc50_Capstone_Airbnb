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
  actManageUser,
  actDeleteUser,
} from './duck/actions';
import {
  actDetailUser
} from './EditUser/duck/actions';

export default function ManageUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.manageUserReducer.data);
  const userDetail = useSelector((state) => state.detailUserReducer.data);
  const { Search } = Input;

  useEffect(() => {
    dispatch(actManageUser());
  }, [dispatch]);

  const onSearch = keyword => {
    dispatch(actManageUser(keyword));
  };

  const handleInfoEditUser = async (id) => {
    dispatch(actDetailUser(id));
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
      width: '15%',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      width: '15%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      width: '20%',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      sorter: (a, b) => {
        let genderA = a.gender;
        let genderB = b.gender;
        if (genderA > genderB) {
          return 1;
        }
        return -1;
      },
      width: '20%',
      render: (gender) => {
        return gender ? 'Male' : 'Female';
      },
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
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
      title: 'Thao Tác',
      dataIndex: 'thaoTac',
      width: '15%',
      render: (text, record) => record.tacVu,
    }
  ];

  const renderData = () => {
    if (!dataUser) {
      return [];
    }
    const data = dataUser?.map((item, index) => {
      return {
        key: index,
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        role: item.role,
        tacVu: (<Fragment>
          <NavLink
            key={1}
            className='text-2xl'
            to={`/admin/edit-user/${item.id}`}
            onClick={() => handleInfoEditUser(item.id)}

          > <EditOutlined
              className='text-yellow-600'
            />
          </NavLink >

          <NavLink
            key={2}
            className='ml-3 text-3xl'
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn xoá người dùng này không: ' + item.name + ' (ID: ' + item.id + ')')) {
                dispatch(actDeleteUser(item.id));
                dispatch(actManageUser());
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
        DANH SÁCH NGƯỜI DÙNG
      </div>
      <hr className='h-divider mb-4' />
      <NavLink
        to={'/admin/add-user'}
        className='text-white button-add-new'
        onClick={() => {
          navigate('admin/User/AddUser');
        }}
      >
        Thêm người dùng
      </NavLink>

      <Search
        className='my-4 bg-blue-500'
        placeholder='input search text'
        enterButton={<SearchOutlined />}
        type="text"
        size='large'
        onSearch={onSearch}
        allowClear
      />
      {renderData()}
    </Fragment>
  );
};



