import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--dark-blue);
  color: var(--white);
`;

export const LanguageButton = styled(BaseButton)`
  background: transparent;
`;

export const CTAButton = styled(BaseButton)`
  padding: 13px 65px;
  margin-top: 13px;
`;

export const EditProfileButton = styled(BaseButton)`
  font-weight: bold;
  border-radius: 16px;
  padding: 10px 30px;
  margin: 5px;
`;

export const DiscardChangesButton = styled(BaseButton)`
  background-color: var(--logo-red);
  padding: 6px 12px;
`;

export const SaveChangesButton = styled(BaseButton)`
  padding: 6px 12px;
`;

export const SignInUpButton = styled(BaseButton)`
  padding: 8px;
  width: 100%;
`;

export const SignInUpGoogleButton = styled(BaseButton)`
  background-color: var(--logo-red);
  width: 100%;
  padding: 8px;
`;

export const SignInUpFacebookButton = styled(BaseButton)`
  background-color: var(--logo-blue);
  width: 100%;
  padding: 8px;
`;

export const NeighborCardButton = styled(BaseButton)`
  background-color: var(--dark-blue) !important;
  color: var(--white);
  border: none !important;
  padding: 8px;
`;

export const NeighborsFilterButton = styled(BaseButton)`
  width: 49%;
  height: 40px;
`;

export const GoodFeedbackButton = styled(BaseButton)`
  padding: 0 7px;
  background-color: var(--logo-blue);
`;

export const BadFeedbackButton = styled(BaseButton)`
  padding: 0 7px;
  background-color: var(--logo-red);
`;
