import type { Metadata } from "next";
import "../../app/globals.css";
import Navbar from '@/Shared/Navbar/Navbar'

export const metadata: Metadata = {
  title: {
    default: "Janitorial Appointment Services | Professional Cleaning Lead Generation",
    template: "%s | Janitorial Leads"
  },
  description: "Get high-quality janitorial leads and appointments for your cleaning business. Professional lead generation services with 90% conversion rate. Book appointments today at janitorialappointment.com!",
  keywords: [
    "janitorial leads",
    "cleaning business leads", 
    "commercial cleaning appointments",
    "janitorial services",
    "cleaning lead generation",
    "commercial cleaning leads",
    "janitorial appointment booking",
    "cleaning business marketing",
    "professional cleaning services",
    "commercial janitorial leads",
    "janitorial appointment services",
    "cleaning company leads",
    "janitorial lead generation",
    "commercial cleaning lead generation",
    "janitorial business leads",
    "cleaning service appointments",
    "janitorial marketing services",
    "commercial janitorial appointments"
  ],
  authors: [{ name: "Janitorial Appointment Services" }],
  creator: "Janitorial Appointment Services",
  publisher: "Janitorial Appointment Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://janitorialappointment.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://janitorialappointment.com',
    title: 'Janitorial Appointment Services | Professional Cleaning Lead Generation',
    description: 'Get high-quality janitorial leads and appointments for your cleaning business. Professional lead generation services with 90% conversion rate. Visit janitorialappointment.com today!',
    siteName: 'Janitorial Appointment Services',
    images: [
      {
        url: '/assets/about-us-janitorial-appointments.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Janitorial Lead Generation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janitorial Appointment Services | Professional Cleaning Lead Generation',
    description: 'Get high-quality janitorial leads and appointments for your cleaning business. Professional lead generation services with 90% conversion rate. Visit janitorialappointment.com today!',
    images: ['/assets/about-us-janitorial-appointments.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/Janitorial.png" />
        <link rel="apple-touch-icon" href="/assets/Janitorial.png" />
        <meta name="theme-color" content="#5538F4" />
        <meta name="msapplication-TileColor" content="#5538F4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Janitorial Appointment Services",
              "description": "Professional janitorial lead generation and appointment booking services. Get high-quality commercial cleaning leads that convert with 90% success rate.",
              "url": "https://janitorialappointment.com",
              "logo": "https://janitorialappointment.com/assets/Janitorial.png",
              "image": "https://janitorialappointment.com/assets/about-us-janitorial-appointments.webp",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "contact@janitorialappointment.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceType": "Janitorial Lead Generation",
              "areaServed": "United States",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourcompany",
                "https://twitter.com/yourhandle"
              ]
            })
          }}
        />
        
        {/* Services Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Janitorial Services",
              "description": "Professional janitorial lead generation and cleaning services with high conversion rates",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "IT Development",
                  "description": "Professional Web Solutions and Support Services for janitorial businesses",
                  "provider": {
                    "@type": "Organization",
                    "name": "Janitorial Appointment Services"
                  }
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Lead Generation",
                  "description": "High-converting janitorial lead generation services for cleaning businesses with 90% success rate",
                  "provider": {
                    "@type": "Organization",
                    "name": "Janitorial Appointment Services"
                  }
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "Appointment Setting",
                  "description": "Exclusive Appointment Setting for Janitorial Services with guaranteed results",
                  "provider": {
                    "@type": "Organization",
                    "name": "Janitorial Appointment Services"
                  }
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "Digital Marketing",
                  "description": "Expert SEO and Digital Marketing Services for janitorial businesses",
                  "provider": {
                    "@type": "Organization",
                    "name": "Janitorial Appointment Services"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
