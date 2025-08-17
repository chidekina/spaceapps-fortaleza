import ArrowDown from "../../components/ArrowDown";
import Banner from "../../components/Banner";
import BannerImage from "../../components/BannerImage";
import BannerText from "../../components/BannerText";
import Button from "../../components/Button";
import CircleBg from "../../components/CircleBg";
import GalaxyBg from "../../components/GalaxyBg";
import HeadText from "../../components/HeadText";
import Statics from "../../components/Statics";
import SpaceAppsStats from "../../components/SpaceAppsStats";
import SlideUpOnScroll from "../../effects/SlideUpOnScroll";
import staticsList from "../../db/statics.json";
import PromoBanner from "../../components/PromoBanner";
import Overlay from "../../components/Overlay";

const Home = () => {
    return (
        <>
            <Banner>
                <BannerText
                    typewriter={true}
                    speed="fast"
                    text="Welcome aboard to the biggest hackathon in the world."
                    className="italic px-4 sm:px-8 lg:px-16"
                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                />
                <BannerImage />
                <BannerText
                    text="3, 4 e 5"
                    fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    fontWeight="font-black"
                    textColor="text-neon-yellow"
                    className="px-4"
                />
                <BannerText
                    text="DE OUTUBRO DE 2025"
                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    fontWeight="font-bold"
                    margin="mb-8"
                    className="px-4"
                />
                <Button
                    text="Inscreva-se"
                    link="https://www.sympla.com.br/evento/nasa-space-apps-challenge-2025/3070558#compartilhar-evento?share_id=copiarlink"
                />
                <ArrowDown />
            </Banner>
            <PromoBanner />
            <GalaxyBg bgImage="/galaxy-2.jpg" data-section="space-apps-stats">
                <Overlay />
                <SlideUpOnScroll delay={0.2} duration={0.8} distance={80}>
                    <CircleBg>
                        <HeadText text="SPACE APPS EM NÚMEROS" />
                        <Statics list={staticsList} />
                    </CircleBg>
                </SlideUpOnScroll>
                <SpaceAppsStats />
            </GalaxyBg>
        </>
    );
}

export default Home;