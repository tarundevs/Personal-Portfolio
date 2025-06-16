import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { Starbackground } from "@/components/StarBackground.jsx";
import { NavBar } from "@/components/NavBar.jsx";
import { Speech_ASL } from "@/components/speechASL.jsx";

export const SpeechASLPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background effects */}
      <Starbackground />
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <Speech_ASL />
      </main>
    </div>
  );
};