//import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type CardProps = React.ComponentProps<typeof Card>

export function AboutPage({ className, ...props }: CardProps) {
  return (
    <div className="flex items-center pt-28 flex-wrap">
      {/* First row with two cards */}
      <div className="flex justify-center w-full mb-8 space-x-4">
        <Card className={cn("w-[250px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-lg">Dhruv Bansal</CardTitle>
            <CardDescription className="text-md">Sophomore majoring in Computer Science at ASU</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-[250px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-lg">Kanav Gupta</CardTitle>
            <CardDescription className="text-md">Sophomore majoring in Computer Science at ASU</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Second row with three cards */}
      <div className="flex justify-center w-full space-x-4">
        <Card className={cn("w-[280px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-lg">Twanda Vera</CardTitle>
            <CardDescription className="text-md">Graduate student studying Global Management at ASU</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-[280px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-lg">Shreyas Bachiraju</CardTitle>
            <CardDescription className="text-md">Sophomore majoring in Informatics at ASU</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-[280px]", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-lg">Vansh Gupta</CardTitle>
            <CardDescription className="text-md">Sophomore majoring in Computer Science at ASU</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          </CardContent>
          <CardFooter>
            
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default AboutPage;