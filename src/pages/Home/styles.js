import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 3rem;

  > .carousel-wrapper {
    max-width: 160rem;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`