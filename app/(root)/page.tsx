import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import FadeIn from "@/components/animations/FadeIn";
import AboutUs from "@/components/AboutUs";
import { benefits, stickyScrollData } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mumingter",
  openGraph: {
    title: "文化咨询",
  },
};
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="layout flex flex-col gap-8 !pb-0 pt-8">
          <div className="grid grid-cols-1 items-center justify-between gap-5 lg:grid-cols-12">
            <HighlightedHeading
              text="文化咨询 | 解惑人生"
              highlightedWord="Service"
              className="h3 sm:h1 text-center font-semibold uppercase lg:col-span-7 lg:text-left"
            />
            <div className="text-center lg:col-span-4 lg:col-end-13">
              <p className="p">
                无论是个人或企业，无论其经验有无，我们都能提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。
              </p>
              <Link href="/about-us">
                <Button className="mt-2 bg-accent-500 text-white hover:bg-accent-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-fit w-full rounded-lg">
            <Image
              src="/images/hero.webp"
              alt="Cargo Ship"
              priority
              width={1300}
              height={800}
              objectFit="cover"
              className="relative size-full rounded-lg"
            />
            <div className="absolute bottom-0 flex h-[70px] w-full items-center justify-center bg-black/60 px-5 backdrop-blur-sm md:h-[90px] md:justify-between">
              <div className="flex items-center justify-between">
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">5000+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Customers
                  </p>
                </div>
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">10+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Years Experience
                  </p>
                </div>
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">15+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Service Categories
                  </p>
                </div>
              </div>
              <p className="p hidden text-white lg:block">
                把握航向，破浪前行，驶向成功的彼岸。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="layout flex flex-col gap-5">
          <SectionHeading
            title="为什么选择我们"
            description="不辜负每一份信任，为每一个客户创造价值。"
          />
          <div className="grid h-fit grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index: number) => (
              <FadeIn
                delay={0.2 + index * 0.2}
                duration={0.8}
                direction="left"
                className="flex size-full"
                key={index}
              >
                <div className="flex flex-col items-start justify-start gap-2 rounded-lg border border-neutral-100 bg-white p-4 text-left shadow-md">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={50}
                    height={50}
                    className="aspect-square rounded-md bg-primary-500 p-2"
                  />
                  <h6 className="h6 mt-2 font-semibold">{benefit.title}</h6>
                  <p className="p mt-1">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="aboutus">
        <AboutUs />
      </section>
      <section className="services">
        <div className="layout flex flex-col gap-[50px]">
          <SectionHeading
            subtitle="Our Services"
            title="服务内容"
            description="我们的服务内容涵盖企业战略规划、组织架构优化、流程再造、人力资源管理、市场营销策划、品牌塑造与传播、以及信息技术咨询等多个领域。无论是个人或企业，无论其经验有无，我们都能提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。"
          />
          <StickyScroll content={stickyScrollData} />
        </div>
      </section>
    </>
  );
};

export default Home;
