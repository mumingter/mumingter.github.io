import React from "react";
import AboutUs from "../../../components/AboutUs";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "mumingter成立于2024年3月，我们是一家充满活力与创新精神的管理咨询公司，致力于为个人或企业提供一站式、定制化的管理解决方案。汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。",
  openGraph: {
    title: "About Us",
    description:
      "mumingter成立于2024年3月，我们是一家充满活力与创新精神的管理咨询公司，致力于为个人或企业提供一站式、定制化的管理解决方案。汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。随着全球化的深入，管理咨询公司应积极拓展国际市场，提供跨文化的咨询服务，帮助企业应对全球化带来的挑战和机遇。mungmingter企业入驻新加坡后，将继续秉持“诚信、高效、创新”的理念，不断提升服务质量，让更多人与企业受益于我们的服务，帮助其团队、公司规模不断扩大，业务广泛拓展，共创美好！",
    url: "https://mumingter.com/about-us",
    images: [
      {
        url: "/images/about-us.webp",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
  },
};
interface AboutUsSectionProps {
  title: string;
  isReverse: boolean;
  subtitle: string;
  description: string;
  imageHref: string;
  imageAlt: string;
}
const AboutUsSection = ({ ...props }: AboutUsSectionProps) => {
  const { title, subtitle, description, imageHref, imageAlt, isReverse } =
    props;
  return (
    <div className="w-full">
      <div className="layout grid h-fit grid-cols-1 items-start gap-5 lg:grid-cols-2">
        <div className={cn("h-fit", isReverse ? "lg:order-2" : "lg:order-1")}>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
        <FadeIn
          direction={isReverse ? "right" : "left"}
          className={cn("h-fit w-fit", isReverse ? "lg:order-1" : "lg:order-2")}
        >
          <Image
            src={imageHref}
            alt={imageAlt}
            width={640}
            height={360}
            className="aspect-video size-full"
          />
        </FadeIn>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <>
      <HeroWithBreadcrumb
        title="About Us"
        backgroundImageHref="/images/about-us.webp"
        backgroundImageAlt="Aerial Photography of Cityscape at Night"
        color="text-white sm:text-white"
      />
      <div className="about">
        <AboutUs />
      </div>
      <AboutUsSection
        title="经营范围"
        subtitle="About Us"
        imageAlt="Close Up Photo of People Holding Puzzle Pieces"
        description="我们的经营范围涵盖企业战略规划、组织架构优化、流程再造、人力资源管理、市场营销策划、品牌塑造与传播、以及信息技术咨询等多个领域。无论是个人或企业，无论其经验有无，我们都能提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。"
        imageHref="/images/mission.webp"
        isReverse={true}
      />
      <AboutUsSection
        title="品牌实力"
        subtitle="About Us"
        imageAlt="wechat qr code"
        description="我们拥有一支由资深专家和行业精英组成的专业团队，他们凭借丰富的实战经验和深厚的专业知识，为客户提供定制化咨询服务以及长期售后跟踪服务，致力于满足客户从前期到发展过程中更全面的需求，以优质资源、良好口碑在行业中脱颖而出。"
        imageHref="/images/wechat.webp"
        isReverse={false}
      />
    </>
  );
};

export default Page;
