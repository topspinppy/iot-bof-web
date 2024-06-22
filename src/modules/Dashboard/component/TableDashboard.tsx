import type { TableProps } from 'antd';
import { Space, Table } from 'antd';
import { Device, DeviceResponse } from '../hooks/useFetchDevice';


interface ITableDashboardProps {
  dataSource: DeviceResponse
}

const columns: TableProps<Device>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
    render: (data) => {
      return (
        <>
          {data}
        </>
      )
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (data) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function TableDashboard(props: ITableDashboardProps) {
  const { dataSource } = props
  return <Table columns={columns} dataSource={dataSource} />
}

export default TableDashboard