import { useEffect } from 'react';
import Hero from "../Hero/Hero";
import SectionDivider from "../Shared/SectionDivider";
import AboutPreview from "../AboutPreview/AboutPreview";
import Highlights from "../Highlights/Highlights";
import TechStack from "../TechStack/TechStack";
import GitHubStats from "../GitHubStats/GitHubStats";
import CTASection from "../CTASection/CTASection";
import Footer from "../Footer/Footer";

const Home = () => {

    useEffect(() => {
        document.title = 'Pratyush Swain | MERN Fullstack Developer';
    }, [])

    return (
        <>
            <Hero />
            <SectionDivider />
            <AboutPreview />
            <SectionDivider />
            <Highlights />
            <SectionDivider />
            <TechStack />
            <SectionDivider />
            <GitHubStats />
            <SectionDivider />
            <CTASection />
            <Footer />
        </>
    );
}

export default Home;