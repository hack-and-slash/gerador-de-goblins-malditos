import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Goblin = styled.div`
  text-align: center;

  h1 {
    font-size: 40px;
    color: var(--primaryColor);
  }
`;

export const Button = styled.div`
  background-color: var(--primaryColor);
  color: #fff;
  padding: 0 10px 3px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease;

  span {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    background-color: var(--darkColor);
  }
`;
