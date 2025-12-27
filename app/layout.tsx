import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="ko"><body className="text-white">
      <Header />{children}<Footer />
    </body></html>
  );
}
