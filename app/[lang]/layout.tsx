import Navbar from '@/app/components/navbar'
import './globals.css'
import React from 'react'
import { getStrapiURL } from "@/app/utils/api-helpers";
import { fetchAPI } from "@/app/utils/fetch-api";
import { i18n } from "../../i18n-config";
import type { Metadata } from "next";
import Footer from "@/app/components/footer";

const FALLBACK_SEO = {
  title: "Ashutosh's personal website",
  description: "This is my personal website made with NextJS and Strapi",
}

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      //"navbar.links",
      //"navbar.navbarLogo.logoImg",
      //"footer.footerLogo.logoImg",
      //"footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      //"footer.categories",
    ],
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return <div>this is an error page</div>;

  const { footer } = global.data.attributes;

  return (
    <html lang={params.lang} >
      <body suppressHydrationWarning={true}>
        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          <Navbar />
          {children}
        </main>
        <Footer
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        />
      </body>
    </html>
  )
}
