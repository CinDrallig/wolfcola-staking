import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      activeChain={ Pulsechain } 
      clientId="YOUR_CLIENT_ID" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0x1D4F18d768755C19E036055fC5E597AC6740088a");
}
