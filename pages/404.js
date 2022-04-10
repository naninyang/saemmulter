import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import withHead from '../components/utilities/withHead';
import styled from '@emotion/styled';
import styles from '../styles/Error.module.sass';
import { mixin } from '../styles/designSystem';

const Container = styled.div();

const Contents = styled.main({
  ...mixin.widthSettings,
});

function Custom404(props) {
  return (
    <Container className={`${styles.container} container`}>
      <Contents className='contents'>
        <h1>404 - Page Not Found</h1>
      </Contents>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Custom404, 'Page Not Found', '404');
