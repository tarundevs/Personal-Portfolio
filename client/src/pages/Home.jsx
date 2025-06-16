import { ThemeToggle } from "../components/ThemeToggle.jsx";
import {Starbackground} from "@/components/StarBackground.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {HomeSection} from "@/components/HomeSection.jsx";
import {AboutUs} from "@/components/AboutUs.jsx";
import { Help } from "@/components/Help.jsx";
import {Footer} from "@/components/Footer.jsx"
export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background effects */}
    <Starbackground />
    {/* NavBar */}
    <NavBar />
    {/* Main Content */}
    <main>
        <HomeSection />
        <AboutUs />
        <Help />
    </main>
    {/* Footer */}
    <Footer />
  </div>
};