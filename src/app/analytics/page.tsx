"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BeatLoader from "react-spinners/BeatLoader";
import { analyticsCompletion } from "../../actions/analytics-completion";
import { useTransition } from "react";
const AnalyticsPage = () => {
  // State to store the LLM output
  const [llmOutput, setLlmOutput]: any = useState();
  const [loading, setLoading] = useState(false); // New state for managing loading state.
  const [isPending, startTransition] = useTransition();

  // Fetch the LLM output from the server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await analyticsCompletion();
        const data = await response.json();
        setLlmOutput(data.answer);
      } catch (error) {
        console.error("Failed to fetch analytics data:", error);
        setLlmOutput("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Define words to show in TextGenerateEffect (can be static or dynamic)
  const words = `Fetching your customized analytics report...`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="stats-div items-center w-[50%] text-center">
        <TextGenerateEffect words={words} />

        {loading ? (
          <BeatLoader></BeatLoader>
        ) : (
          <div className="mt-4 text-left" style={{ whiteSpace: "pre-line" }}>
            {llmOutput}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
