import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.countColumns}, 1fr);
  margin-top: 15px;
  border-radius: 5px;
  background-color: #f0f1f2;
  height: 100%;
  padding: 0.7rem;
  grid-gap: 13px;
`;
