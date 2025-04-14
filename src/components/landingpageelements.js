import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    padding: 30px;
    background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};

    h1 {
       font-size: 3rem;
       margin-bottom: 15px;
    }

    h2 {
        font-size: 1.5rem;
        max-width: 600px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;