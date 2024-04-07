"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/ui/images-slider";
import { MagicButton } from "@/components/magic-button";
import { ArrowUpIcon, CircleDollarSign } from "lucide-react";
import { HandHelping } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
const donate = () => {
  const images = [
    "https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696786914221-81b1618bc50f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [error, setError] = useState("");
  const [data, setData] = useState<any>("");
  const [zipcodes, setZipcodes] = useState<string[]>([]);
  const [zipcode, setZipcode] = useState("");
  const [isZipcodeValid, setIsZipcodeValid] = useState<boolean | null>(null);
  const [agencyName, setAgencyName] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoodPantryData = async () => {
      try {
        const response = await fetch(
          "https://data.mo.gov/resource/eb3y-vtsa.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);

        // Extract zip codes from fetched data
        const extractedZipcodes = data.map((item: any) => {
          const humanAddress = JSON.parse(
            item?.location?.human_address || "{}"
          );
          return humanAddress.zip || "";
        });
        setZipcodes(extractedZipcodes.filter((zipcode: string) => zipcode)); // Filter out empty zip codes
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchFoodPantryData();
  }, []);

  useEffect(() => {
    setIsZipcodeValid(zipcodes.includes(zipcode));
  }, [zipcode, zipcodes]);

  const handleZipcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  useEffect(() => {
    if (isZipcodeValid && data.length > 0) {
      const entry = data.find((item: any) => {
        const humanAddress = JSON.parse(item?.location?.human_address || "{}");
        return humanAddress.zip === zipcode;
      });
      if (entry) {
        setAgencyName(entry.agency_name);
      } else {
        setAgencyName(null);
      }
    } else {
      setAgencyName(null);
    }
  }, [isZipcodeValid, zipcode, data]);

  const defaultImage = "https://your-default-image-url.com/default_image.jpg"; // Provide your default image URL here

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center p-40 pb-0">
      <h1 className="font-bold text-7xl ">Donate</h1>
      <p className="text-lg p-0 py-2">
        Donate meals to earn credits towards your next order!
      </p>
      <div className="flex flex-row items-center w-full justify-between p-4 px-0">
        <div className="w-[50%]">
          <Input
            type="text"
            placeholder="Search for a zipcode..."
            className="border rounded w-full"
            value={zipcode}
            onChange={handleZipcodeChange}
          />
        </div>
        <div className="flex flex-row items-center justify-end space-x-5">
          <Badge className="flex flex-col items-center text-center border-2 p-2 rounded-lg border-black">
            <HandHelping /> <p>100 meals</p>
          </Badge>
          <Badge className="flex flex-col items-center text-center border-2 p-2 rounded-lg border-black">
            <CircleDollarSign /> <p>50 credits</p>
          </Badge>
        </div>
      </div>

      {agencyName === null ? (
        <ImagesSlider className="h-[28rem] rounded-md" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Food Banks Near you
            </motion.p>
            <MagicButton>Visit their website →</MagicButton>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </motion.div>
        </ImagesSlider>
      ) : (
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {agencyName}
            </motion.p>
            <MagicButton>Visit their website →</MagicButton>
          </motion.div>
        </ImagesSlider>
      )}
    </div>
  );
};

export default donate;
