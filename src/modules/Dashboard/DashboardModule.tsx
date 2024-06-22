'use client'

import { Button } from "antd"
import { useState } from "react"
import AddDeviceModal from "./component/AddDeviceModal"
import TableDashboard from "./component/TableDashboard"
import useAddDevice from "./hooks/useAddDevice"
import useFetchDevice from "./hooks/useFetchDevice"

export default function DashboardModule() {
  const { data } = useFetchDevice()
  const { mutation } = useAddDevice()
  const [openAddDeviceModal, setOpenAddDeviceModal] = useState(false)
  return (
    <div>
      <div className="flex justify-end mb-2 bg-red-500">
        <Button type="primary" onClick={() => { setOpenAddDeviceModal(true) }}>
          Create Device
        </Button>
      </div>
      <TableDashboard dataSource={data ?? []} />

      <AddDeviceModal
        open={openAddDeviceModal}
        handleOk={(value) => {
          mutation.mutate(value as any)
          setOpenAddDeviceModal(false)
        }}
        handleCancel={() => {
          setOpenAddDeviceModal(false)
        }}
      />
    </div>
  )
}