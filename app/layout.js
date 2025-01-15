import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import Footer from "./_components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s || Sk Nails ",
    default: "Sk Nails V2",
  },
  description: "Sk Nails V2 with booking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        <header className="mx-auto max-w-7xl">
          <Navigation />
        </header>
        <main className="mx-auto max-w-6xl mainBG mb-[40px] md:mb-[70px] lg:mb-[100px]">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
        <footer className="mx-auto max-w-6xl">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
