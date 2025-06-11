import { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Upload, message } from "antd";
import type { UploadFile } from "antd/es/upload";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { uploadFile } from "../../../api/fileApi";
import { createOrganization } from "../../../api/organizationApi";
import { PlusOutlined } from "@ant-design/icons";

type FieldType = {
  avatar?: string;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  website?: string;
  policyUrl?: string;
  termUrl?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  try {
    createOrganization(values);
    message.success("Tạo tổ chức thành công!");
  } catch (err) {
    console.log(err);
    message.error("Tạo thất bại!");
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function CreateOrganization() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    return Array.isArray(e) ? e : e?.fileList;
  };

  const handleUploadAvatar = async (options: UploadRequestOption) => {
    const { file } = options;
    const previewUrl = URL.createObjectURL(file as File);

    setFileList([
      {
        uid: (file as any).uid || Date.now().toString(),
        name: (file as File).name,
        status: "done",
        url: previewUrl,
      },
    ]);
    const res = await uploadFile(file as File);
    form.setFieldsValue({ avatar: res });
  };

  return (
    <div className="grow">
      <div className="mx-auto mt-4 shadow-2xl w-fit p-8">
        <p className="text-center font-bold text-2xl text-blue-color mb-4">
          Create Organization
        </p>
        <Form
          className="min-w-[500px]"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={handleUploadAvatar}
              maxCount={1}
              multiple={false}
              listType="picture-card"
              fileList={fileList}
              onRemove={() => {
                setFileList([]);
                form.setFieldsValue({ avatar: undefined });
              }}
            >
              <button
                style={{
                  color: "inherit",
                  cursor: "inherit",
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                {/* <div style={{ marginTop: 8 }}>Upload</div> */}
              </button>
            </Upload>
          </Form.Item>

          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mobile phone"
            name="phone"
            rules={[{ required: true, message: "Please input phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please input website!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Policy Url" name="policyUrl">
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Term Url" name="termUrl">
            <Input />
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button className="w-[200px]" type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
