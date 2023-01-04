import { Col, Row, Table } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useGetExchangesQuery } from "../services/cryptoAPI";

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>Get the PRO subscription to get access !</Title>
          <Table />
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
