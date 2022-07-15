import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default App;
