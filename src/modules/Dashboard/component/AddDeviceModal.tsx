import { Form, Input, Modal } from "antd";
import { AddDevice } from "../hooks/useAddDevice";


interface IAddDeviceModalProps {
  open: boolean;
  handleOk(values: AddDevice): void;
  handleCancel(): void;
}

function AddDeviceModal(props: IAddDeviceModalProps) {
  const { open, handleOk, handleCancel: Cancel } = props
  const [form] = Form.useForm();

  const handleCancel = () => {
    Cancel();
  };


  return (
    <>
      <Modal
        title="Add Device"
        open={open}
        onCancel={handleCancel}
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            clearOnDestroy
            onFinish={(values) => {
              handleOk(values)
            }}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please input the type of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please input the status of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please input the location of collection!' }]}
        >
          <Input />
        </Form.Item>
      </Modal>
    </>
  );
}


export default AddDeviceModal