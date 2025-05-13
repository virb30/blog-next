import BlogHome from "@/pages/blog/BlogHome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
}

export default function Page() {
    return (
       <BlogHome />
    )
}