import { Button, Form, message, Upload } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '@/redux/auth/selectors';

export default function AppSettingForm() {
  const translate = useLanguage();
  const token = useSelector(selectAuthToken);
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  return (
    <>
      <Form.Item
        name="file"
        label="Logo"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          name="settingValue" // ✅ match backend fieldName
          action="http://localhost:8888/api/setting/upload/companyLogo"
          method="POST"
          beforeUpload={beforeUpload}
          listType="picture"
          accept="image/png, image/jpeg"
          maxCount={1}
          headers={{
            Authorization: `Bearer ${token}`,
          }}
        >
          <Button icon={<UploadOutlined />}>{translate('click_to_upload')}</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
