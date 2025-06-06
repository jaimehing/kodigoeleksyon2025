import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import useSessionStorage from '@/lib/useSessionStorage';
import BallotSection from '@/components/BallotSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import { manilaCityPositions } from '@/lib/manilaCityPositions';

const ManilaCity = () => {
    // Refs for animation targets
    const howItWorksRef = useRef<HTMLDivElement>(null);
    const ballotRef = useRef<HTMLDivElement>(null);
    const mainContentRef = useRef<HTMLDivElement>(null);

    // Set up animation observer
    useAnimationObserver([howItWorksRef, ballotRef]);

    const [selectedCandidates, setSelectedCandidates] = useSessionStorage<Record<string, string[]>>(
        'kodigo-manila-selections',
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
                <title>Kodigo Eleksyon 2025 - Ballot Builder for Manila City</title>
                <meta name="description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Manila City. Make the voting process faster and easier." />
                <meta name="keywords" content="kodigo, eleksyon, 2025, philippines elections, ballot builder, voting guide, manila city" />
                <link rel="canonical" href="https://kodigoeleksyon2025.netlify.app/manila-city" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kodigoeleksyon2025.netlify.app/manila-city" />
                <meta property="og:title" content="Kodigo Eleksyon 2025 - Ballot Builder for Manila City" />
                <meta property="og:description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Manila City. Make the voting process faster and easier." />
                <meta property="og:image" content="https://kodigoeleksyon2025.netlify.app/kodigo-eleksyon.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://kodigoeleksyon2025.netlify.app/manila-city" />
                <meta name="twitter:title" content="Kodigo Eleksyon 2025 - Ballot Builder for Manila City" />
                <meta name="twitter:description" content="Create your personalized Kodigo ballot for the 2025 Philippine elections in Manila City." />
                <meta name="twitter:image" content="https://kodigoeleksyon2025.netlify.app/kodigo-eleksyon.png" />

                {/* Accessibility meta tags */}
                <html lang="en" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "Kodigo Eleksyon 2025",
                        "description": "Create your personalized Kodigo ballot for the 2025 Philippine elections in Manila City.",
                        "url": "https://kodigoeleksyon2025.netlify.app/manila-city",
                        "applicationCategory": "UtilityApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "PHP"
                        },
                        "audience": {
                            "@type": "Audience",
                            "name": "Voters in Manila City"
                        }
                    })}
                </script>
            </Helmet>

            <main id="main-content" ref={mainContentRef}>
                <div className="container mx-auto max-w-6xl px-6 mt-8 mb-2">
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <h1 className="text-2xl font-bold text-orange-800 text-center">Manila City Ballot Builder</h1>
                        <p className="text-orange-700 text-center mt-2">
                            Create your personalized ballot for the Manila City 2025 elections
                        </p>
                    </div>
                </div>

                {/* Ballot Section (always shown at the top) */}
                <BallotSection
                    selectedCandidates={selectedCandidates}
                    setSelectedCandidates={setSelectedCandidates}
                    positions={manilaCityPositions}
                    cityName="Manila City"
                />

                {/* How it Works Section */}
                <HowItWorksSection />
            </main>

            <Footer />
        </div>
    );
};

export default ManilaCity;