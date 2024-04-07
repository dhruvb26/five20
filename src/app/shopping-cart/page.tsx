"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Potatoes",
    description: "30 lbs, $1.25/lbs",
    price: "$37.50",
  },
  {
    title: "Tomatoes",
    description: "20 lbs, $1.99/lbs",
    price: "$39.80",
  },
];

const notifications2 = [
  {
    title: "Potatoes by Spinelli's, (Grade-A)",
    description: "30 lbs, $1.25/lbs",
    price: "$37.50",
  },
];

const notifications3 = [
  {
    title: "Garlic",
    description: "15 lbs, $2/lbs",
    price: "$30.00",
  },
];

type CardProps = React.ComponentProps<typeof Card>;
const ShoppingCartPage = ({ className, ...props }: CardProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen space-x-10">
      <Card className={cn("w-[500px] h-[500px]", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Shopping Cart</CardTitle>
          <CardDescription className="text-lg text-center">
            You have 2 items in your cart.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 justify-between">
          <div className="justify-between">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-emerald-600" />
                <div className="space-y-1">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                    <div>{notification.price}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full flex items-center space-x-4 rounded-md border p-4">
              <BellIcon />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Are you willing to swap your ingredients?
                </p>
                <p className="text-sm text-muted-foreground">
                  Reduce food waste when you swap your ingredients.
                </p>
              </div>
              <Switch
                checked={isSwitchOn}
                onCheckedChange={setIsSwitchOn}
                aria-readonly
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Checkout
          </Button>
        </CardFooter>
      </Card>
      {isSwitchOn && (
        <Card className={cn("w-[500px] h-[500px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Your Total</CardTitle>
            <CardDescription className="text-lg text-center">
              Your previous total is $77.30
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 justify-center">
            <div className="space-y-4">
              <p className="text-md text-center">
                If you choose to swap the ingredients you want to buy with the
                ingredients you have up for sale you could potentially save up
                to $30.00
              </p>
              <div
                className="w-full flex items-center space-x-4 rounded-md border p-4"
                style={{ color: "green" }}
              >
                <div className="flex-1 space-y-1">
                  {notifications2.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                      <div className="space-y-1">
                        <div className="flex flex-row items-center justify-between">
                          <div>
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                          <div>{notification.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="w-full flex items-center space-x-4 rounded-md border p-4"
                style={{ color: "red" }}
              >
                <div className="flex-1 space-y-1">
                  {notifications3.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                      <div className="space-y-1">
                        <div className="flex flex-row items-center justify-between">
                          <div>
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                          <div>{notification.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="pt-4 text-center text-gray font-semibold text-xl">
                Now your total is $47.30
              </h1>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CheckIcon className="mr-2 h-4 w-4" /> Checkout
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ShoppingCartPage;
