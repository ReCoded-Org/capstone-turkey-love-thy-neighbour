import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--dark-blue);
`;

export const CTAButton = styled(BaseButton)`
  color: var(--white);
  padding: 13px 65px;
  margin-top: 13px;
`;

export const EditProfileButton = styled(BaseButton)`
  color: #ffffff !important;
  font-weight: bold !important;
  border-radius: 16px !important;
  margin: 5px;
  padding: 10px 30px;
`;

export const DiscardChangesButton = styled(BaseButton)`
  background-color: var(--logo-red) !important;
  color: var(--white);
  border: none !important;
  padding: 6px 12px;
`;

export const SaveChangesButton = styled(BaseButton)`
  background-color: var(--dark-blue) !important;
  color: var(--white);
  border: none !important;
  padding: 6px 12px;
`;

export const SignInUpButton = styled(BaseButton)`
  background-color: var(--dark-blue) !important;
  color: var(--white);
  border: none !important;
  padding: 8px;
  width: 100% !important;
`;

export const SignInUpGoogleButton = styled(BaseButton)`
  background-color: var(--logo-red) !important;
  color: var(--white);
  border: none !important;
  padding: 8px;
  width: 100% !important;
`;

export const SignInUpFacebookButton = styled(BaseButton)`
  background-color: var(--logo-blue) !important;
  color: var(--white);
  border: none !important;
  padding: 8px;
  width: 100% !important;
`;
