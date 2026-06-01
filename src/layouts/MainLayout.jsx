import { Outlet } from 'react-router-dom'
import CursorGlow from '../components/CursorGlow'
import ScrollToTop from '../components/ScrollToTop'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

function MainLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <MobileNavigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Navigation />
      <CursorGlow />
    </div>
  )
}

export default MainLayout
