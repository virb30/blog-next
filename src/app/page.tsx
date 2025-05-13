import { Metadata } from "next";
import HomeComponent from "@/pages/home/Home";

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <HomeComponent posts={[]} />
  );
}
