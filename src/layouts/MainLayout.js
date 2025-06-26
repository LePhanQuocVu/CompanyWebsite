import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1, padding: '1rem' }}>
              <Outlet /> {/* nơi các page sẽ được render */}
          </main>
          <Footer />
      </div>
      </>
}
