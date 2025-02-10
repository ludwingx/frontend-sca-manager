import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BusinessProvider } from "@/context/BusinessContext";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
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
