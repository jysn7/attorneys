
import HeroSlider from "@/components/Hero/HeroSlider";
import { Introduction } from "@/components/Sections/Introduction";
import { SelectedWorks } from "@/components/Sections/SelectedWorks";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <Introduction />
      <SelectedWorks />

    </div>
  );
}
