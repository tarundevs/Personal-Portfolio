import { Moon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    useEffect(() => {
        // Always set dark mode on component mount
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }, []);

    return (
        <div className={cn(
            "fixed max-sm:hidden top-4 right-6 z-50 p-2 rounded-full transition-colors duration-300",
            "bg-gray-800/20 backdrop-blur-sm"
        )}>
        </div>
    );
};