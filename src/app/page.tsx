import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BusinessProvider } from "@/context/BusinessContext";

export const metadata: Metadata = {
  title:
    "Santa Cruz Alimentos",
  description: "Este es el Dashboard de Santa Cruz Alimentos",
};

export default function Home() {
  return (
    <BusinessProvider>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </BusinessProvider>
  );
}
