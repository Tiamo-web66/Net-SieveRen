import { Button, Card, Col, Flex, Form, Input, Row, Select } from 'antd';
import type { FormInstance } from 'antd';
import { enableStatusOptions, userGenderOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';
interface Props {
  reset: () => void;
  search: () => void;
  form: FormInstance;
}
const CloudSearch: FC<Props> = memo(({ reset, search, form }) => {
  const { t } = useTranslation();

  return (
    <Card
      className="card-wrapper"
      bordered={false}
      title={t('common.search')}
    >
      <Form
        labelCol={{
          span: 5,
          md: 7
        }}
        form={form}
      >
        <Row
          gutter={[16, 16]}
          wrap
        >
          <Col
            span={24}
            md={12}
            lg={6}
          >
            <Form.Item
              className="m-0"
              name="userName"
              label={t('page.resource.list.name')}
            >
              <Input placeholder={t('page.resource.list.form.name')} />
            </Form.Item>
          </Col>

          <Col
            span={24}
            md={12}
            lg={6}
          >
            <Form.Item
              className="m-0"
              name="userGender"
              label={t('page.resource.list.resourceClassification')}
            >
              <Select
                placeholder={t('page.resource.list.form.resourceClassification')}
                allowClear
                options={translateOptions(userGenderOptions)}
              />
            </Form.Item>
          </Col>

          <div className="flex-1">
            <Form.Item className="m-0">
              <Flex
                gap={12}
                align="center"
                justify="end"
              >
                <Button
                  icon={IconIcRoundRefresh({})}
                  onClick={reset}
                >
                  {t('common.reset')}
                </Button>
                <Button
                  icon={IconIcRoundSearch({})}
                  type="primary"
                  ghost
                  onClick={search}
                >
                  {t('common.search')}
                </Button>
              </Flex>
            </Form.Item>
          </div>
        </Row>
      </Form>
    </Card>
  );
});

export default CloudSearch;
