import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from '@emotion/styled';
import Header from '../components/layout/header';
import styles from '../styles/Home.module.sass';
import { fontWeights, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';

const Container = styled.div()

const Contents = styled.main()

function Home(props) {
  return (
    <>
      <Header />
      <Container className={`${styles.container} container`}>
        <div>캐로셀 영역</div>
        <Contents>
          메인 영역
        </Contents>
      </Container>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Home, '깨끗한 지하수 연구기업 Clean Groundwater Tech company');
