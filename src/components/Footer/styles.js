import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 18.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND };
  background: ${({ theme }) => theme.COLORS.BLACK };
  
  > .logo {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 13rem;
    }
  }

  > nav ul {
    display: flex;
    align-items: center;
    gap: 3rem;

    li a {
      color: ${({ theme }) => theme.COLORS.BACKGROUND };

      &:hover {
        color: ${({ theme }) => theme.COLORS.RED };
      }
    }

    svg {
      font-size: 2rem;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.RED };
      }
    }
  }
`