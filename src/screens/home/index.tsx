
"use client"
import React from 'react'
import AppBanner from './elements/app-banner'
import BrowseRange from './elements/browse-range'
import ProductSection from './elements/product-section'

function HomeScreen() {
  return (
    <div>
      <AppBanner />
      <BrowseRange />
      <ProductSection />
    </div>
  )
}

export default HomeScreen
