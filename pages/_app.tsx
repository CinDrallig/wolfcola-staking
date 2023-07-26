import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Pulsechain } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "Pulsechain";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <ThirdwebProvider
      activeChain={Pulsechain}
      clientId: "fb5b78b67cf8fd462d6adb08086cc98b">
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
