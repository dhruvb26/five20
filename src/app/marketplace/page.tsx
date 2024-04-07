import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag,DollarSign   } from "lucide-react"

import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll";
const MarketplacePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-1">
      <h1 className="font-bold text-9xl mb-20 gap-2">Marketplace</h1>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <div className="stats-div items-center w-[50%] text-center gap-1">
        <Button className="gap-2" style={{ fontSize: 'large', padding: '18px 24px' }}>
          <ShoppingBag  className="mr-2 h-4 w-4" /> Buy
        </Button>
        <Button className="gap-2 size-md"  style={{ fontSize: 'large', padding: '18px 24px' }}>
          <DollarSign  className="mr-2 h-4 w-4" /> Sell
        </Button>
      </div>
    </div>
  );
};

export default MarketplacePage;
