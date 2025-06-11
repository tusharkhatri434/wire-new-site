
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  React.useEffect(() => {
    // Define the initial state based on current window width
    const checkResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    // Check immediately
    checkResize()
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkResize)
    
    // Also use matchMedia for better responsiveness
    const mqlMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mqlMobile.addEventListener("change", checkResize)
    
    // Cleanup both event listeners
    return () => {
      window.removeEventListener("resize", checkResize)
      mqlMobile.removeEventListener("change", checkResize)
    }
  }, [])

  // Return a boolean for backward compatibility
  return windowWidth < MOBILE_BREAKPOINT
}

// New hook that returns device type information
export function useDeviceType() {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  React.useEffect(() => {
    const checkResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    checkResize()
    window.addEventListener("resize", checkResize)
    
    const mql = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", checkResize)
    
    return () => {
      window.removeEventListener("resize", checkResize)
      mql.removeEventListener("change", checkResize)
    }
  }, [])

  return {
    isMobile: windowWidth < MOBILE_BREAKPOINT,
    isTablet: windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT,
    isDesktop: windowWidth >= TABLET_BREAKPOINT
  }
}
