import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 10rem;
  position: relative;
  z-index: 100;
  margin-bottom: 2rem;
  
  > nav {
    max-width: 120rem;
    height: 100%;
    margin: 2rem auto;
    
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .nav-links:nth-child(1) {
        @media screen and (max-width: 962px) {
          display: none;
        }
      }

      .nav-links {
        display: flex;
        gap: 3rem;

        .link-w-icon {
          display: flex;
          align-items: center;
          gap: 2rem;

          svg {
            font-size: 2rem;

            &:hover {
              cursor: pointer;
              color: ${({ theme }) => theme.COLORS.RED };
            }
          }
          
          span {
            color: ${({ theme }) => theme.COLORS.RED };
          }
        }
      }

      .menu-btn-wrapper {
        display: none;

        @media screen and (max-width: 962px) {
          display: block;
        }
      }

      .menu-btn {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        cursor: pointer;

        .bar {
          width: 2.8rem;
          height: .2rem;
          margin: .3rem 0;
          background: ${({ theme }) => theme.COLORS.GRAY };
        }
      }

      .open {
        .menu-btn {
          .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .bar:nth-child(2) {
            opacity: 0;
          }

          .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
        }

        .menu {
          display: block;
          width: 100%;
          position: absolute;
          top: 15rem;
          animation: opacity 200ms backwards reverse;
          background: ${({ theme }) => theme.COLORS.BACKGROUND };

          ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;

            li:nth-child(1) {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 2rem;
            }
          }
        }
      }

      .close {
        .menu {
          display: none;
        }
      }

      button {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
      }
    }

    .hide-responsive {
      @media screen and (max-width: 962px) {
        display: none;
      }
    }
  }

  > .mods-menu {
    position: absolute;
    top: 12rem;
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND };

    ul {
      display: flex;
      align-items: center;
      gap: 10rem;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        
        &:hover {
          cursor: pointer;

          h3 {
            color: ${({ theme }) => theme.COLORS.RED };
          }
        }
        
        h3 {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
  
    img {
      width: 8rem;
    }
  }

  .active {
    display: flex;
    animation: opacity 200ms backwards reverse;
  }

  .inactive {
    display: none;
  }

  @keyframes opacity {
    100% {
      opacity: 0;
    }
  }
`