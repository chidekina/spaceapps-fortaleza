import ArrowDown from "../../components/ArrowDown";
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
import Banner from "../../components/Banner";

const Home = () => {
    return (
        <>
            <Banner>
                <BannerText
                    typewriter={true}
                    speed="fast"
                    text="Welcome aboard to the biggest hackathon in the world."
                    className="italic"
                />
                <BannerImage />
                <BannerText
                    text="3, 4 e 5"
                    fontSize="text-5xl"
                    fontWeight="font-black"
                    textColor="text-neon-yellow"
                />
                <BannerText
                    text="DE OUTUBRO DE 2025"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    margin="mb-8"
                />
                <Button
                    text="Inscreva-se"
                    link="https://www.sympla.com.br/preview/d05c9b4ea5d496d2fe49626a0c93c3be"
                />
                <ArrowDown />
            </Banner>
            <PromoBanner />
            <GalaxyBg>
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