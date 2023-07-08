import styled from "@emotion/styled";

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 600px;
`;

export const Input = styled.input`
     
`;

export const Text = styled.p`
     margin-top: 0;
     margin-bottom: 0;
     margin-right: 10px;
     text-decoration: none;

     & completed {
          text-decoration: line-through;
        }
`;

export const Delete = styled.button`
   color: green;
`;
