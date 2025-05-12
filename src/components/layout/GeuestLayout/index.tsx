import { Footer } from "@/components/Footer";
import NavbarComponents from "@/components/Navbar";

const GeuestLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavbarComponents />
      <div className="container mx-auto px-28 py-5">{children}</div>
      <Footer />
    </>
  );
};

export default GeuestLayout;
