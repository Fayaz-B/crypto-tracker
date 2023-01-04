import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetCoinHistoryQuery } from "../services/cryptoAPI";
import moment from "moment/moment";
import { Grid } from "antd";

const dateFormatter = (date) => {
  let refDate = new Date(0);
  refDate.setUTCSeconds(date);
  return moment(refDate).format("DD/YY/MM HH:mm");
};

const { useBreakpoint } = Grid;

const CryptoAreaChart = ({ id, timeperiod }) => {
  const {
    data: coinHistory,
    isFetching,
    isSuccess,
  } = useGetCoinHistoryQuery({
    id,
    timeperiod,
  });
  const screens = useBreakpoint();

  return (
    <>
      <ResponsiveContainer width="100%" height={screens.sm ? 500 : 300}>
        <AreaChart
          data={coinHistory?.data?.history}
          margin={{ top: 10, right: 10, left: 15, bottom: 50 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B323FF" stopOpacity={0.8} />
              <stop offset="55%" stopColor="#9517F8" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#ADA1FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            tickFormatter={dateFormatter}
            angle={-35}
            textAnchor="end"
            // tickLine={screens.sm ? false : true}
            // tick={screens.sm ? false : true}
            height={screens.sm ? 40 : 0}
          >
            <Label value="Date" position="bottom" offset={10} />
          </XAxis>
          <YAxis
            tickFormatter={(price) => parseFloat(price).toFixed(4)}
            domain={["dataMin", "dataMax"]}
            angle={-45}
            textAnchor="end"
            // tickLine={screens.sm ? false : true}
            // tick={screens.sm ? false : true}
            width={screens.sm ? 40 : 0}
          >
            <Label value="Price in USD" angle={-90} position="left" dy="-10" />
          </YAxis>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip
            labelStyle={{ color: "red" }}
            labelFormatter={(value) => `Time: ${dateFormatter(value)}`}
            formatter={(value) => `$${parseFloat(value).toFixed(4)}`}
            // content={<CustomTooltip />}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#A323FF"
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default CryptoAreaChart;
