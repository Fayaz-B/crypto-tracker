import { useState } from "react";
import { Row, Col, Select, Avatar, Card, Typography } from "antd";
import { useGetAllCoinQuery } from "../services/cryptoAPI";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";
import moment from "moment/moment";
import { Skeleton } from "antd";
import Loading from "./Loading";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ limited }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetAllCoinQuery(100);
  const {
    data: cryptoNews,
    isLoading,
    isFetching,
  } = useGetCryptoNewsQuery({
    newsCategory,
    count: limited ? 6 : 12,
  });
  if (isFetching)
    return (
      <div className="home-container flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <>
      <Row gutter={[24, 24]}>
        {!limited && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency, index) => (
                <Option key={index} value={currency.name}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="flex justify-between items-center">
                  <Title
                    style={{ fontWeight: 600 }}
                    className="news-title"
                    level={4}
                  >
                    {news.name}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="flex justify-between items-center mt-2 flex-wrap">
                  <div className="flex justify-between items-center gap-2">
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
