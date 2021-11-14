import styled from "@emotion/native"

export const ButtonContainer = styled.Pressable`
  box-shadow: 0px 16px 24px rgba(1, 1, 1, 0.1);

  border-radius: 16px;
  height: 44px;
  width: 160px;

  background-color: ${(p) =>
    p.disabled ? p.theme.colors.disabled : p.theme.colors.primary};

  flex-shrink: 0;

  letter-spacing: 1px;

  opacity: ${(p) => (p.disabled ? "0.5" : "1.0")};
`
