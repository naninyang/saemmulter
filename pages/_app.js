import { appWithTranslation } from 'next-i18next';
import styled from '@emotion/styled';
import { isIE } from 'react-device-detect';
import LinkButton from '../components/utilities/linkButton';
import Header from '../components/layout/header';
import Footer from '../components/layout/Footer';
import { colors, fontWeights, Rem } from '../styles/designSystem';
import '../styles/globals.sass'

const IE = styled.div({
  padding: '10px',
  backgroundColor: '#fb4637',
  '& p': {
    textAlign: 'center',
    fontWeight: fontWeights.regular,
    fontSize: Rem(16),
    color: colors.white,
    '& strong': {
      fontWeight: fontWeights.black,
    },
    '& a': {
      color: colors.white,
      fontWeight: fontWeights.black,
      textDecoration: 'underline',
    },
  },
});

function SaemmulterApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {isIE && <IE><p><strong>오래된 브라우저</strong>를 사용하고 있군요. 안전하고 편리한 인터넷을 위해 <LinkButton href="http://browsehappy.com/">브라우저를 업그레이드</LinkButton> 하세요.</p></IE>}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(SaemmulterApp);
