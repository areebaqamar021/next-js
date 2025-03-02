"use client"
import React from 'react'
import AppBanner from './elements/app-banner'
import BrowseRange from './elements/browse-range'
import ProductSection from './elements/product-section'
import Footer from './elements/app-footer'

function HomeScreen() {
  return (
    <div>
      <AppBanner />
      <BrowseRange />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default HomeScreen
