import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .carousel-wrapper {
    max-width: 160rem;
    margin: 0 auto;
    position: relative;
    padding: 0 2rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  > .show-more {
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 3rem auto 6rem;
    padding: 1rem;
    border: none;
    border-radius: .5rem;
    background: none;
    outline: 2px solid ${({ theme }) => theme.COLORS.GRAY };
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.BLACK };

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED };
      outline: 2px solid ${({ theme }) => theme.COLORS.RED };
    }
  }
`

export const ModsList = styled.section`
  width: 100%;
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  > nav {
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 0 2rem;
      justify-content: center;
      gap: 2rem;

      li {
        font-size: 2rem;
        font-weight: 400;
        
        &:nth-child(1) a {
          color: ${({ theme }) => theme.COLORS.RED };
        }
      }

      span {
        opacity: 0.5;
      }
    }
  }

  > .mods {
    max-width: 140rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`