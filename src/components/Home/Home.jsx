import AboutPreview from "../AboutPreview/AboutPreview";
import CTASection from "../CTASection/CTASection";
import Footer from "../Footer/Footer";
import GitHubStats from "../GitHubStats/GitHubStats";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import SectionDivider from "../Shared/SectionDivider";
import TechStack from "../TechStack/TechStack";

const Home = () => {

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