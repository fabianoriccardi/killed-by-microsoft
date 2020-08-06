import React from 'react';
import styled from 'styled-components';

import Tombstone from '../assets/tombstone-alt.svg';

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import PressCoverage from './PressCoverage';

// Images
import TWITTER from '../assets/twitter.svg';
import GITHUB from '../assets/github.svg';

type Props = {
  url: string;
  imgSrc: string;
  altText: string;
};
const SocialLink: React.FunctionComponent<Props> = ({
  url,
  imgSrc,
  altText,
}: Props) => {
  const style = {
    border: 'none',
  };

  return (
    <a style={style} href={url}>
      <img src={imgSrc} alt={altText} />
    </a>
  );
};

const CopyNotice = styled.div`
  font-size: 0.75em;
  text-align: center;
  margin: 30px 0 20px 0;
`;

const TombstoneStyle = {
  width: '60px',
  marginRight: '10px',
};

const Title = styled.div`
  font-size: 2.5em;
  color: #fafafa;
  font-weight: lighter;
`;

const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const SocialWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  a {
    display: block;
    margin: 0 10px;
  }
`;

export default () => (
  <>
    {/* <PressCoverage /> */}
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <img style={TombstoneStyle} src={Tombstone} alt="Tombstone" />
          <Title>Killed by Microsoft</Title>
        </FooterTitle>
        <div>
          <p>
            Killed by Microsoft is the Microsoft graveyard; a free and open source
            list of discontinued Microsoft services, products, devices, and apps.
            We aim to be a source of factual information about the history
            surrounding Microsoft&apos;s dead projects.
          </p>
          <p>
            <a
              href="https://github.com/fabiuz7/killed-by-microsoft/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about dying and dead Microsoft products. You can join the
            discussion on&nbsp;
            <a href="https://github.com/fabiuz7/killed-by-microsoft/issues">GitHub</a>. This project is derived from Killed By Google
            by&nbsp;
            <a
              href="https://codyogden.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cody Ogden
            </a>
            .
          </p>
          <p>
            Press inquiries and other assorted death threats?
            <br />
            Throw a&nbsp;
            <a href="mailto:knife@killedbymicrosoft.info">
              knife@killedbymicrosoft.info
            </a>
            .
          </p>
        </div>
        <CopyNotice>
          <a href="https://github.com/fabiuz7/killed-by-microsoft/blob/master/LICENSE">
            &copy; 2020 Fabiano Riccardi, Cody Ogden.
          </a>
        </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/fabiuz7/killed-by-microsoft"
            altText="GitHub"
            imgSrc={GITHUB}
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
