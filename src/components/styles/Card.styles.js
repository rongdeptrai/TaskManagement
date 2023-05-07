import styled from "styled-components";

export const CardContainer = styled.div`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;
  box-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.05) 0px 0px 0px 1px;
  border-radius: 4px;
  background-color: white;
  border: none;
  position: relative;
  &:hover {
    cursor: drag;
  }
`;

export const tagList = styled.div`
  color: "white";
`;
export const ButtonFlag = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 13px;
  cursor: pointer;
  padding-right: 0.5rem;
  align-items: center;
  border-radius: 4px;
`;
export const TodoCheck = styled.div`
  margin-top: 10px;

  padding-top: 20px;
  align-items: center;
  display: flex;
  gap: 10px;
`;
