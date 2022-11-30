import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

const StyledBanner = styled.div`
  color: pink;
`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <h1>{props.text}</h1>
    </StyledBanner>
  );
}

export default Banner;
