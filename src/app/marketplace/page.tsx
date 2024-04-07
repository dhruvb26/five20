import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag,DollarSign   } from "lucide-react"

import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll";
import { MagicButton } from "@/components/magic-button";
import { ShoppingBag, DollarSign } from "lucide-react";
const MarketplacePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-7xl mb-20">Marketplace</h1>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <div className="stats-div items-center w-[50%] text-center">
        <Button>
          <Link href="/marketplace/buy">Buy</Link>
        </Button>
        <Button>
          <Link href="/marketplace/sell">Sell</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketplacePage;
