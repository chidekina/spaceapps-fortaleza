import ArrowDown from "../../components/ArrowDown";
import Banner from "../../components/Banner";
import BannerImage from "../../components/BannerImage";
import BannerText from "../../components/BannerText";
import Button from "../../components/Button";

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
        </>
    );
}

export default Home;