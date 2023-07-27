// Header Style
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HeaderContainer = styled(Flex)`
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.detailColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.6rem;
  }
`;
export const HeaderForm = styled.form`
  display: flex;
  width: 45%;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  border: 1px solid rgba(15, 63, 42, 0.3);
  margin: 20px;
`;

export const SearchInput = styled.input``;

export const SelectBox = styled.select``;

export const HeaderButton = styled.button``;
