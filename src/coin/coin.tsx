import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
// type Params = { [key: string]: string | undefined };

interface LocationState {
  state: {
    name: string;
    rank: number;
    symbol: string;
  };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0px auto;
`;

const MyLink = styled(Link)`
  display: block;
  color: #fff;
  margin-right: 20px;
  &:hover {
    text-decoration: underline 1px #ffffff;
  }
`;

const Header = styled.header`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(p) => p.theme.accentColor};
`;

const Contente = styled.div`
  height: 400px;
  width: 500px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #292929;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Description = styled.p`
  margin: 10px 20px;
  line-height: 20px;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as LocationState;

  // api가 object니까 useState가 {}로 됨
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();

  useEffect(() => {
    (async () => {
      //
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      //
      const priceDate = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceDate);
      setInfo(infoData);
      setPrice(priceDate);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      <Contente>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{info?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>SYMBOL:</span>
                <span>${info?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>OPEN SOURCE:</span>
                <span>{info?.open_source ? "Yes" : "No"}</span>
              </OverviewItem>
            </Overview>
            {/*  */}
            <Description>{info?.description}</Description>
            {/*  */}
            <Overview>
              <OverviewItem>
                <span>Total Suply:</span>
                <span>{price?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supplay:</span>
                <span>{price?.max_supply}</span>
              </OverviewItem>
            </Overview>
            <Div>
              <MyLink to="price">Price</MyLink>
              <MyLink to="chart">Chart</MyLink>
            </Div>
            <Outlet></Outlet>
          </>
        )}
      </Contente>
    </Container>
  );
}

export default Coin;
