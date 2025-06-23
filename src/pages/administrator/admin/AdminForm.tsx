import { useEffect, useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { getAdminById, createAdmin, updateAdmin } from "../../../api/adminApi";

import { handleUploadAvatar } from "../../../utils/fileUpload";
import type { UploadFile } from "antd/es/upload";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import type { AdminCreate } from "../../../types/admin/adminCreate";
import { getOrganizations } from "../../../api/organizationApi";
import type { Organization } from "../../../types/organization";
import type { Role } from "../../../types/role";
import { getRoles } from "../../../api/roleApi";

export default function AdminForm() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const orgs = await getOrganizations(null);
      setOrganizations(orgs?.data ?? []);
    };
    fetchOrganizations();

    const fetchRoles = async () => {
      const res = await getRoles();
      setRoles(res.data ?? []);
    };
    fetchRoles();

    if (id) {
      setLoading(true);
      getAdminById(id)
        .then((res) => {
          const admin = {
            ...res,
            orgId: res.organization?.id,
            roleCode: res.role?.code,
          };
          console.log("Admin data fetched:", admin);
          console.log(res);
          form.setFieldsValue(admin);
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

  const onFinish = async (values: AdminCreate) => {
    setLoading(true);
    console.log("Form values submitted:", values);
    try {
      if (id) {
        await updateAdmin(id, values);
      } else {
        await createAdmin(values);
      }
      navigate("/admin/admins");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grow">
      <div className="mx-auto mt-4 shadow-2xl w-fit p-8">
        <p className="text-center font-bold text-2xl text-blue-color mb-4">
          {id ? "Update Admin" : "Create Admin"}
        </p>
        <Form
          className="min-w-[500px]"
          form={form}
          name="admin"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Avatar"
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

          <Form.Item<AdminCreate>
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter full name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<AdminCreate>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input organization code!" },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<AdminCreate>
            label="Employee Id"
            name="employeeId"
            rules={[{ required: true, message: "Please input email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<AdminCreate>
            label="Phone Number"
            name="phoneNumber"
            // rules={[{ required: true, message: "Please input email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<AdminCreate>
            label="Role"
            name="roleCode"
            rules={[{ required: true, message: "Please select role!" }]}
          >
            <Select
              placeholder="Select role"
              onChange={(e) => {
                setSelectedRole(e);
              }}
            >
              {roles.map((role) => (
                <Select.Option key={role.id} value={role.code}>
                  {role.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {selectedRole !== "SUPER_ADMIN" && (
            <Form.Item<AdminCreate>
              label="Organization"
              name="orgId"
              rules={[
                { required: true, message: "Please select organization!" },
              ]}
            >
              <Select placeholder="Select organization">
                {organizations.map((org) => (
                  <Select.Option key={org.id} value={org.id}>
                    {org.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}

          <Form.Item<AdminCreate> name="avt">
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
