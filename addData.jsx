import { useInfoContext } from "../context/infoContext";
import { Modal, Form, Input } from "antd";

// Add building Info
const AddBuildingInfo = () => {
  const { form1, addBuildingInfo, isBuildingInfo, handleAddCancel } =
    useInfoContext();
  const { TextArea } = Input;
  return (
    <div>
      <Modal
        title="Add Building Info"
        open={isBuildingInfo}
        onOk={() => form1.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form1} onFinish={addBuildingInfo} name="basic">
            <Form.Item
              label="About"
              name="about"
              rules={[{ required: true, message: "Please Input About!" }]}
            >
              <TextArea style={{ height: 100 }} />
            </Form.Item>
            <Form.Item
              label="Course"
              name="course"
              rules={[{ required: true, message: "Please Input Course!" }]}
            >
              <TextArea style={{ height: 100 }} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

// Add Building Name
const AddBuildingName = () => {
  const { form, addBuildingName, isBuildingName, handleAddCancel } =
    useInfoContext();
  return (
    <div>
      <Modal
        title="Add Building Name"
        open={isBuildingName}
        onOk={() => form.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form} onFinish={addBuildingName} name="basic">
            <Form.Item
              label="Building Name"
              name="buildingname"
              rules={[
                { required: true, message: "Please Input Building Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

// Add Building Office
const AddBuildingOffice = () => {
  const { form2, addBuildingOffice, isBuildingOffice, handleAddCancel } =
    useInfoContext();
  return (
    <div>
      <Modal
        title="Add Building Office"
        open={isBuildingOffice}
        onOk={() => form2.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form2} onFinish={addBuildingOffice} name="basic">
            <Form.Item
              label="Building Office"
              name="buildingoffice"
              rules={[
                { required: true, message: "Please Input Building Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export { AddBuildingInfo, AddBuildingName, AddBuildingOffice };
