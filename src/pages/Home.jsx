import { ThemeToggle } from "../components/ThemeToggle.jsx";
import {Background} from "@/components/Background.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {HomeSection} from "@/components/HomeSection.jsx";
import {AboutUs} from "@/components/AboutUs.jsx";
import {Portfolio} from "@/components/Portfolio.jsx";
import { Contact } from "@/components/Contact.jsx";
import {Footer} from "@/components/Footer.jsx"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background effects */}
    <Background />
    {/* NavBar */}
    <NavBar />
    {/* Main Content */}
    <main>
        <HomeSection />
        <AboutUs />
        <Portfolio />
        <Contact />
    </main>
    {/* Footer */}
    <Footer />
  </div>
};