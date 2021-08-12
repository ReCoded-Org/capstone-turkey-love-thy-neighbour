import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--dark-blue);
`;

// I disabled the next line's import/prefer-default-export rule because since in this version we just have one export it keeps telling me that I should export it with default
/* eslint-disable-next-line import/prefer-default-export */
export const CTAButton = styled(BaseButton)`
  color: var(--white);
  padding: 13px 65px;
  margin-top: 13px;
`;
