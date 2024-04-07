"use client";
import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const AnalyticsPage = () => {
  const [llmOutput, setLlmOutput] = useState(""); // Removed any type since it's not valid here.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/analytics-report", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setLlmOutput(data.answer);
        setLoading(false);
      } catch (error) {
        // Catch block for any errors in the try block
        setLoading(false);
        setLlmOutput("An unexpected error occurred");
      }
    };

    fetchData();
  }, []); // Correctly closed the useEffect hook

  // Define words to show in TextGenerateEffect (can be static or dynamic)
  const words = "Fetching your customized analytics report...";
  const formattedOutput = llmOutput.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-40">
      <div className="stats-div items-center w-[50%] text-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-10">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="black"
            />
            <h1 className="font-bold text-8xl">Analytics</h1>
            <BarLoader />
          </div>
        ) : (
          <div className="space-y-10 w-fit ">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="black"
            />
            <h1 className="font-bold text-8xl">Analytics</h1>
            <div className="w-full flex flex-col items-center justify-center space-y-14">
              <div
                className="flex flex-col items-start justify-center space-y-5"
                style={{ whiteSpace: "pre-line" }}
              >
                {/* Insert the formatted HTML string */}
                <div dangerouslySetInnerHTML={{ __html: formattedOutput }} />
              </div>
              <div className="flex flex-col items-end justify-center space-y-5">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/graph1.png"
                        alt="graph1"
                        width={700}
                        height={700}
                      ></Image>
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/graph2.png"
                        alt="graph2"
                        width={700}
                        height={700}
                      ></Image>
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/graph3.png"
                        alt="graph3"
                        width={700}
                        height={700}
                      ></Image>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
