import Floating from "@/components/floating";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";

export default function Home() {
  return (
    <main className="home-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Floating />
    </main>
  );
}
