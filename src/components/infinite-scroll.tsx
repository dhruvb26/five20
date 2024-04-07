"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Using the marketplace app to manage our excess inventory has been a game-changer for Bella Vista Kitchen. It's incredibly user-friendly and has helped us significantly reduce waste. We've been able to buy ingredients at lower prices and sell our surplus, improving our bottom line. Highly recommend!",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "We were skeptical about joining another platform but decided to give it a try. Best decision ever! Not only did we clear out space by selling excess inventory, but we also found rare ingredients from other restaurants. The customer service is top-notch, always ready to assist with any issues.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "Being part of this marketplace has fostered a sense of community among local restaurants. It's amazing how we can support each other by swapping ingredients. Bella Vista Kitchen has saved a considerable amount on ingredients since joining. The app's inventory management tool is a bonus!",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "At first, we had trouble navigating the app and understanding how to list our items effectively. However, after reaching out to support, they were incredibly helpful and guided us through the process. Now, we're not only managing our inventory better but also contributing to a more sustainable industry.",

    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "As a small restaurant, every penny counts. This app has allowed us to optimize our inventory like never before. We've purchased high-quality ingredients at a fraction of the cost and sold items that would have otherwise gone to waste. It's empowering to know we have control over our inventory in such a detailed way.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
