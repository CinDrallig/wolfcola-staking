import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(Pulsechain, {
  clientId: "fb5b78b67cf8fd462d6adb08086cc98b",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK(Pulsechain, {
  secretKey: "mCicoRCbEq0C_ZaoQKLiHiA9YSsp-kClhMQveKnSoJbVZvC6jvCunNWhNAnQXYae0KtrQqnMeHSIKPxF5mi36Q",
});

const contract = await sdk.getContract("0x1D4F18d768755C19E036055fC5E597AC6740088a");

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "Pulsechain";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
