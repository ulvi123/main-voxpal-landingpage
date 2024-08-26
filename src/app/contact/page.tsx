import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We are founders ourselves and our aim is to deliver the best and esthetic product to your use."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
