import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--dark-blue);
`;

/* eslint-disable-next-line import/prefer-default-export */
export const CTAButton = styled(BaseButton)`
  color: var(--white);
  padding: 13px 65px;
  margin-top: 13px;
`;
