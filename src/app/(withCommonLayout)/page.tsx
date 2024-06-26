import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowWorks from "@/components/UI/HomePage/HowWorks/HowWorks";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";
import { Button } from "@mui/material";

const Page = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
      <TopRatedDoctor></TopRatedDoctor>
      <WhyUs></WhyUs>
      <HowWorks></HowWorks>
    </>
  );
};

export default Page;
