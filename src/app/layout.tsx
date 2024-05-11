import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { MyState } from "@/context/Store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "lens-corp-ai",
    template: "%s | lens-corp-ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script async src="node_modules/@material-tailwind/html/scripts/ripple.js"></script>
      <MyState>
        <body style={{ backgroundColor: "#000000" }}>
          <Navbar />
          {children}

          <Footer />
        </body>
      </MyState>
    </html>
  );
}
