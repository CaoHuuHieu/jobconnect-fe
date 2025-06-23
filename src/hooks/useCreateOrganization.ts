import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { createOrganization } from "../api/organizationApi";
import type { Organization } from "../types/organization";

export const useCreateOrganization = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onFinish = async (values: Organization) => {
    try {
      await createOrganization(values);
      api.success({
        message: "Thành công",
        description: "Tổ chức đã được tạo thành công.",
      });
      setTimeout(() => navigate("/admin/organizations"), 1000);
    } catch (err) {
      console.error(err);
      api.error({
        message: "Thất bại",
        description: "Không thể tạo tổ chức.",
      });
    }
  };

  return { onFinish, onFinishFailed, contextHolder };

  function onFinishFailed(errorInfo: any) {
    console.log("Failed:", errorInfo);
  }
};
