"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultConfig,
  Chain,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const blastChain: Chain = {
  id: 168587773,
  name: "Blast Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"],
    },
  },
};

const config = getDefaultConfig({
  appName: "Zarr-NFT",
  projectId: "9a6db3f7bd314e4c63edb5ce12cdb329",
  chains: [blastChain],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "modernnp"]}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              theme={darkTheme({
                accentColor: "#FCFC03",
                accentColorForeground: "black",
                borderRadius: "medium",
                fontStack: "system",
                overlayBlur: "small",
              })}
              modalSize="compact"
            >
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default Providers;
