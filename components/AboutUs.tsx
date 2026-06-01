import { statsData } from "@/lib/data";
import React from "react";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="layout grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          title="Mumingter"
          subtitle="ABOUT US"
          description="Mumingter 成立于2024年3月，我们是一家充满活力与创新精神的管理咨询公司，致力于为个人或企业提供一站式、定制化的管理解决方案。汇聚行业精英，融合前沿管理理念，为个人或企业提供信息整合咨询、规划宣传方向的综合咨询服务，助力其突破瓶颈，实现可持续发展。"
        />
        <div className="flex h-full flex-col gap-5">
          <iframe
            src="https://www.google.com/maps?q=The%20Plaza%2C%20Singapore&output=embed"
            loading="lazy"
            className="size-full"
            title="Muminter Location"
          ></iframe>
          <Stats stats={statsData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;