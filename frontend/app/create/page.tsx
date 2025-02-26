"use client"
import dynamic from "next/dynamic";

// Dynamically import the Create component, disabling server-side rendering
const Create = dynamic(() => import("../../components/CreateArticle"), { ssr: false });

export default function Page() {
  return (
    <div>
      <Create />
    </div>
  );
}