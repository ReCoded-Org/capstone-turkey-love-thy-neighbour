import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  color: var(--white);
`;

/* eslint-disable import/prefer-default-export */
// I disabled this rule for now because since there's one export for now it's telling me that I should use use default export
export const CTAButton = styled(BaseButton)`
  background-color: var(--dark-blue);
  padding: 13px 65px;
  margin-top: 13px;
`;
