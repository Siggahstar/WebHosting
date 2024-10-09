import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import HeroOne from './components/HeroOne'
import HostingInfo from './components/HostingInfo'
import CenteredBoxes from './components/CenteredBoxes'
import HostingFeature from './components/HostingFeatures'
import SecurityFeature from './components/SecurityFeatures'
import SupportTeamSection from './components/SupportTeamSection'
import SuccessStory from './components/SuccessStory'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Heading />
      <Navbar />
      <HeroOne />
      <HostingInfo />
      <CenteredBoxes />
      <HostingFeature />
      <SecurityFeature />
      <SupportTeamSection />
      <SuccessStory />
      <Footer />
    </>
  )
}

export default App
