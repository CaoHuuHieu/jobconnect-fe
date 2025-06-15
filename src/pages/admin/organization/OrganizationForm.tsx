import { useEffect, useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import {
  getOrganizationById,
  createOrganization,
  updateOrganization,
} from "../../../api/organizationApi";
import { handleUploadAvatar } from "../../../utils/fileUpload";
import type { UploadFile } from "antd/es/upload";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import type { Organization } from "../../../types/organization";

export default function OrganizationForm() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getOrganizationById(id)
        .then((res) => {
          form.setFieldsValue(res);
          if (res.avatar) {
            setFileList([
              {
                uid: "-1",
                name: "avatar.png",
                status: "done",
                url: res.avatar,
              },
            ]);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [id, form]);

  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const customUpload = (options: UploadRequestOption) =>
    handleUploadAvatar(options, setFileList, (url) =>
      form.setFieldsValue({ avatar: url })
    );

  const onFinish = async (values: Organization) => {
    setLoading(true);
    try {
      if (id) {
        await updateOrganization(id, values);
      } else {
        await createOrganization(values);
      }
      navigate("/admin/organizations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grow">
      <div className="mx-auto mt-4 shadow-2xl w-fit p-8">
        <p className="text-center font-bold text-2xl text-blue-color mb-4">
          {id ? "Update Organization" : "Create Organization"}
        </p>
        <Form
          className="min-w-[500px]"
          form={form}
          name="organization"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={customUpload}
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
              </button>
            </Upload>
          </Form.Item>

          <Form.Item<Organization>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Organization>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Organization>
            label="Mobile phone"
            name="phone"
            rules={[{ required: true, message: "Please input phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Organization>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Organization>
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please input website!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Organization> label="Policy Url" name="policyUrl">
            <Input />
          </Form.Item>
          <Form.Item<Organization> label="Term Url" name="termUrl">
            <Input />
          </Form.Item>
          <Form.Item<Organization> name="avatar">
            <Input type="hidden" />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button
              className="w-[200px]"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              {id ? "Update" : "Save"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
