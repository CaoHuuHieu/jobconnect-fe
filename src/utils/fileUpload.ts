import type { UploadRequestOption } from "rc-upload/lib/interface";
import { uploadFile } from "../api/fileApi";
import type { UploadFile } from "antd/es/upload";

export const handleUploadAvatar = async (
  options: UploadRequestOption,
  setFileList: (fileList: UploadFile[]) => void,
  setAvatar: (url: string) => void
) => {
  const { file } = options;
  const previewUrl = URL.createObjectURL(file as File);
  const uid = (file as any).uid || Date.now().toString();

  setFileList([
    {
      uid,
      name: (file as File).name,
      status: "done",
      url: previewUrl,
    },
  ]);

  const res = await uploadFile(file as File);
  setAvatar(res);
};
