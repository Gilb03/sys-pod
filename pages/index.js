import Layout from '../components/layout'
import Header from '../components/header'
import Hosts from '../components/hosts'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Tagline from '../components/tagline'
import Navbar from '../components/navbar'

export default () => (
  <Layout>
    <Navbar />
    <Header />
    <Banner />
    <Tagline />
    <Hosts />
    <Footer />
  </Layout>
)