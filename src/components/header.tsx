"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/language-selector";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const DynamicScrollHeader = dynamic(() => import("./dynamic-scroll-header"), {
  ssr: false,
});

export default function Header({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (lang: string) => void;
}) {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <DynamicScrollHeader>
      {(scrolled: boolean) => (
        <header
          className={cn(
            "fixed top-0 left-0 right-0 z-40 transition-all duration-100",
            scrolled
              ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
              : "bg-transparent"
          )}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  src={scrolled ? "/colored-logo.png" : "/white-logo.png"}
                  alt="WidiaTech Logo"
                  width={60}
                  height={60}
                  className="h-14 w-14"
                />
                <span
                  className={cn(
                    "font-bold text-2xl transition-colors duration-200",
                    scrolled
                      ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      : "text-white",
                    "aggressive-font text-sm"
                  )}
                >
                  WidiaTech
                </span>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="#tentang"
                  onClick={() => scrollToSection("tentang")}
                  className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors duration-200"
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="#layanan"
                  onClick={() => scrollToSection("layanan")}
                  className="text-base font-medium text-gray-200 hover:text-pink-400 transition-colors duration-200"
                >
                  {t.nav.services}
                </Link>
                <Link
                  href="#produk"
                  onClick={() => scrollToSection("produk")}
                  className="text-base font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.nav.digitalProducts}
                </Link>
                <Link
                  href="#testimoni"
                  onClick={() => scrollToSection("testimoni")}
                  className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors duration-200"
                >
                  {t.nav.testimonials}
                </Link>
              </nav>
              <div className="hidden md:flex items-center gap-4">
                <LanguageSelector
                  language={language}
                  setLanguage={setLanguage}
                />
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  asChild
                >
                  <Link
                    href="https://wa.me/6282236883438"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.nav.contactUs}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}
    </DynamicScrollHeader>
  );
}
