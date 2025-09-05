import React from "react";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";
import { statsData } from "@/lib/data";

const AboutUs = () => {
  return (
    <>
      <div className="layout grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          title="Mumingter"
          subtitle="ABOUT US"
          description="Mumingter 成立于2024年3月，我们是一家充满活力与创新精神的管理咨询公司，致力于为个人或企业提供一站式、定制化的管理解决方案。汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。"
        />
        <div className="flex h-full flex-col gap-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.788371976477!2d103.85741317481572!3d1.2839069989345173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da112b3435b5bb%3A0x5c5b92a59493590!2sFar%20East%20Finance%20Building!5e0!3m2!1sen!2ssg!4v1715740400507!5m2!1sen!2ssg"
            loading="lazy"
            className="size-full"
            title="Muminter Location"
          ></iframe>
          <Stats stats={statsData} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;