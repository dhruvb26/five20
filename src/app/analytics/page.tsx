"use client";
import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Spotlight } from "@/components/ui/spotlight";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode; // Changed from string to React.ReactNode for JSX elements
}
const AnalyticsPage = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/analytics-report");
        const data = await response.json();
        //         const report = `
        // Forecast Insight: Expect increased demand for tomatoes, mozzarella, and basil due to high sales of Margherita Pizza and Caprese Salad. Also, anticipate a rise in usage of flour, spaghetti, and pancetta due to Spaghetti Carbonara's popularity.

        // Surplus Actions: Urgently sell surplus perishable ingredients nearing their shelf life end: basil, chicken broth, and veal shanks.

        // Replenishment Actions:
        // - Urgent: Immediately purchase basil, parmesan, breadcrumbs, garlic, pine nuts, calamari, and lemon as their quantities are negative or zero.
        // - Timely procurement recommended for tomatoes, mozzarella, and spaghetti, considering their high usage rate and perishability. These ingredients are essential for popular menu items like Margherita Pizza and Spaghetti Carbonara.
        // `;
        setContent(parseReportToContent(data.answer));
      } catch (error) {
        console.error("An unexpected error occurred: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-20">
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
        <div className="flex flex-col items-center justify-center space-y-10">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="black"
          />
          <h1 className="font-bold text-8xl">Analytics</h1>
          <div className="w-screen">
            <StickyScroll content={content} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPage;

function parseReportToContent(report: string): ContentItem[] {
  const sections = report.split(/\n(?=[A-Z][a-z]+ [A-Z][a-z]+:)/);

  // Custom headings for each image
  const customHeadings = [
    "How much food did you save this month?", // Heading for the second image
    "Insights",
    "Number of credits earned", // Heading for the third image
  ];

  let content = sections
    .map((section, index) => {
      const titleMatch = section.match(/^(.*?):/);
      const title = titleMatch ? titleMatch[1].trim() : "";
      const description = title
        ? section.substring(title.length + 1).trim()
        : section.trim();

      // Construct the content element with an image and a custom heading.
      const imgSrc = `/graph${index + 1}.png`;
      const imageHeading = customHeadings[index];
      const contentElement = (
        <div className="text-center flex flex-col items-center w-full h-full bg-white space-y-5">
          <h3 className="font-semibold text-lg">{imageHeading}</h3>{" "}
          {/* Custom heading */}
          <Image
            src={imgSrc}
            width={1000} // Specify appropriate size
            height={1100}
            alt={title}
          />
        </div>
      );

      return { title, description, content: contentElement };
    })
    .filter((item) => item.title && item.description);

  // Append a fourth custom content object
  const customTitle = "Subscribe now!"; // Example custom title
  const customDescription =
    "Join our premium plan for more data driven insights."; // Example custom description
  const fourthContentElement = (
    <div className="text-center flex flex-col items-center w-full h-full bg-white space-y-5">
      <Image
        src="/subscribe.png"
        width={1000}
        height={1100}
        alt="Custom Title for Fourth Image"
      />
    </div>
  );
  content.push({
    title: customTitle,
    description: customDescription,
    content: fourthContentElement,
  });

  return content;
}
