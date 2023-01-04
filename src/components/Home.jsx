import { Card, Col, Divider, Row, Statistic } from "antd";
import { useGetAllCoinQuery } from "../services/cryptoAPI";
import millify from "millify";
import AllCurrencies from "./AllCurrencies";
import News from "./News";
import Loading from "./Loading";
const Home = () => {
  const { data, error, isFetching } = useGetAllCoinQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching)
    return (
      <div className="home-container flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="home-container">
        <div className="first-section">
          <Divider orientation="left">24 Hour Stats</Divider>
          <Row className="my-6" gutter={8}>
            <Col xl={12} lg={24}>
              <Card className="card-container" title="Global Statistics">
                <Row gutter={8}>
                  <Col span={12}>
                    <Statistic
                      title="Total Cryptocurrencies"
                      value={globalStats?.total}
                    ></Statistic>
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Total Exchanges"
                      value={millify(globalStats?.totalExchanges)}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Total Market Cap:"
                      value={`$${millify(globalStats?.totalMarketCap)}`}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Total 24h Volume"
                      value={`$${millify(globalStats?.total24hVolume)}`}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Total Cryptocurrencies"
                      value={globalStats?.total}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Total Markets"
                      value={millify(globalStats?.totalMarkets)}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
        <div className="second-section">
          <Divider orientation="left">Hot 10 Crypto Currencies</Divider>
          <AllCurrencies limited={true}></AllCurrencies>
        </div>
        <div className="third-section">
          <Divider orientation="left">Latest Crypto News</Divider>
          <News limited={true} />
        </div>
      </div>
    </>
  );
};

export default Home;
