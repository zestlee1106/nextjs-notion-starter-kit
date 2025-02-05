export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID

// window 타입 선언
declare global {
  interface Window {
    gtag: any
  }
}

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}