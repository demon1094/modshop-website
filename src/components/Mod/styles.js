import styled from 'styled-components'

export const Container = styled.div`
  width: 31rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > img {
    width: 100%;
    cursor: pointer;
  }

  > .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    h2 {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  > span {
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.BLACK };
  }
`