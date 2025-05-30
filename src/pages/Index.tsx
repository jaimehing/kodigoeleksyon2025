
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import useSessionStorage from '@/lib/useSessionStorage';
import BallotSection from '@/components/BallotSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const Index = () => {
  // Refs for animation targets
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const ballotRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  // Set up animation observer
  useAnimationObserver([howItWorksRef, ballotRef]);
  
  const [selectedCandidates, setSelectedCandidates] = useSessionStorage<Record<string, string[]>>(
    'kodigo-selections', 
    {}
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Skip to content link - hidden visually but accessible to screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Skip to main content
      </a>
      
      <Helmet>
        <title>Kodigo Eleksyon 2025 - Ballot Builder for Zamboanga City</title>
        <meta name="description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Zamboanga City. Make the voting process faster and easier." />
        <meta name="keywords" content="kodigo, eleksyon, 2025, philippines elections, ballot builder, voting guide, zamboanga city" />
        <link rel="canonical" href="https://kodigoeleksyon2025.netlify.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodigoeleksyon2025.netlify.app/" />
        <meta property="og:title" content="Kodigo Eleksyon 2025 - Ballot Builder for Zamboanga City" />
        <meta property="og:description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Zamboanga City. Make the voting process faster and easier." />
        <meta property="og:image" content="https://kodigoeleksyon2025.netlify.app/kodigo-eleksyon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kodigoeleksyon2025.netlify.app/" />
        <meta name="twitter:title" content="Kodigo Eleksyon 2025 - Ballot Builder for Zamboanga City" />
        <meta name="twitter:description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Zamboanga City." />
        <meta name="twitter:image" content="https://kodigoeleksyon2025.netlify.app/kodigo-eleksyon.png" />
        
        {/* Accessibility meta tags */}
        <html lang="en" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Kodigo Eleksyon 2025",
            "description": "Create your personalized Kodigo ballot for the 2025 Philippine elections in Zamboanga City.",
            "url": "https://kodigoeleksyon2025.netlify.app",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "PHP"
            },
            "audience": {
              "@type": "Audience",
              "name": "Voters in Zamboanga City"
            }
          })}
        </script>
      </Helmet>
      
      <main id="main-content" ref={mainContentRef}>
        {/* Ballot Section (always shown at the top) */}
        <BallotSection 
          selectedCandidates={selectedCandidates}
          setSelectedCandidates={setSelectedCandidates}
        />
        
        {/* How it Works Section */}
        <HowItWorksSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
