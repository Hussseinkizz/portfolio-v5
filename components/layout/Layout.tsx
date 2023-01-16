import { useStore } from "hooks/useStore";
import Head from "next/head";
import { JSXElement } from "utils/UI_types";
import AppBar from "./AppBar";

const Layout = ({ children }: JSXElement) => {
  const {
    store: { showNav },
    setStore,
  } = useStore();

  const closeNav = () => {
    setStore({ type: "CLOSE_NAV" });
  };

  return (
    <div className="min-h-screen w-full transition ease-linear">
      <Head>
        <title>Hussein Kizz - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative h-screen w-full overflow-y-auto bg-white text-black">
        {/* The Header */}
        <AppBar />
        <main className="w-full flex-auto" onClick={closeNav}>
          {/* The Main View */}
          <section className="h-full w-full">{children}</section>
        </main>
        {/* The Footer */}
        <footer className="flex flex-col items-center justify-center gap-4 bg-black bg-opacity-95 text-white md:flex-row md:justify-between md:px-24 md:py-4">
          <span className="foo">&copy; 2023 Hussein Kizz.</span>
          <span className="foo">Made In 🇺🇬 With Love</span>
          <span className="foo">Github</span>
        </footer>
      </section>
    </div>
  );
};

export default Layout;
