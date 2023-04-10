import styled from "styled-components";

const AlertMsg = styled.div`
  display: flex;
  font-size: 40px;
  justify-content: center;
  margin-top: 10px;
`;

function NotFound() {
  return <AlertMsg>404 Not Found. </AlertMsg>;
}
export default NotFound;
