// app/profile/page.tsx
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { fetchProfileData } from "./action";
import ProfileData from "@/components/profile/profileData";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Profile = async () => {
  const userData = await fetchProfileData();

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Profile" />
        <ProfileData data={userData} /> {/* Pasa la prop `data` correctamente */}
      </div>
    </DefaultLayout>
  );
};

export default Profile;