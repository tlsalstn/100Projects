import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  label: string;
  active: boolean;
  onClick(): void;
}

interface LayoutProps {
  active: boolean;
}

const Layout = styled.button<LayoutProps>`
  padding: 24px;
  border: 6px solid #fff;
  background: ${(props) => props.active ? '#fff' : 'transparent'};
  cursor: pointer;

  & > p {
    color: ${(props) => props.active ? '#000' : '#fff'};
    font-weight: 700;
    font-size: 16px;
  }

  &:hover {
    background: #fff;

    & > p {
      color: #000;
    }
  }
`;

const ItemBox = (props: Props) => {
  const { src, label, active, onClick } = props;

  return (
    <Layout onClick={onClick} active={active}>
      <img src={src} alt={'item-box-label-image'} />
      <p>{label}</p>
    </Layout>
  );
};

export default ItemBox;
