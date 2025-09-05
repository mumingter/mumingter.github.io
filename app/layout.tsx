import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mumingter",
    default: "Mumingter",
  },
  description:
    "Mumingter 致力于为个人或企业提供一站式、定制化的管理解决方案。汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。",
  openGraph: {
    title: {
      template: "%s | Mumingter",
      default: "Mumingter",
    },
    description:
      "Mumingter 致力于为个人或企业提供一站式、定制化的管理解决方案。Converter 汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。",
    siteName: "Mumingter",
    url: "https://mumingter.com",
    type: "website",
    locale: "en_US",
  },
  applicationName: "Mumingter",
  appleWebApp: {
    title: "Mumingter",
    statusBarStyle: "black-translucent",
  },
  keywords: [
    "mumingter",
    "沐明堂",
    "文化咨询",
    "企业管理",
    "出马仙",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.className} scroll-smooth antialiased`}
        suppressHydrationWarning={true}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
