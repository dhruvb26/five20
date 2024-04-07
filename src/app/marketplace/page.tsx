import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll";
import { MagicButton } from "@/components/magic-button";
import { ShoppingBag, DollarSign } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
const MarketplacePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
      <h1 className="font-bold text-7xl">Marketplace</h1>
      <p className="text-lg py-2">
        Buy, Sell or Swap the ingredients you need!
      </p>
      <div className="mt-10 stats-div items-center w-[50%] text-center space-x-4">
        <MagicButton>
          <Link href="/marketplace/buy">
            <div className="flex flex-row items-center">
              <ShoppingBag className="mr-2" />
              Buy
            </div>
          </Link>
        </MagicButton>
        <MagicButton>
          <Link href="/marketplace/sell">
            <div className="flex flex-row items-center">
              <DollarSign className="mr-2" />
              Sell
            </div>
          </Link>
        </MagicButton>
      </div>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    </div>
  );
};

export default MarketplacePage;
