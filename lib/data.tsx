import GoogleMaps from "@/components/ui/google-map";
// import Instagram from "@/components/ui/instagram-logo";
// import LinkedIn from "@/components/ui/linkedin-logo";
// import WhatsApp from "@/components/ui/whatsapp-logo";
import type { ActionButton, Benefit, SocialLink, Stat } from "@/types";
import { Mail } from "lucide-react";
import Image from "next/image";

const navData = {
  items: [
    { name: "主页", href: "/", isDisabled: false },
    { name: "关于我们", href: "/about-us", isDisabled: false },
  ],
};
const statsData: Stat[] = [
  { value: "5000+", label: "Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Service Categories" },
];
const benefits: Benefit[] = [
  {
    icon: "/icons/quality.svg",
    title: "质量",
    description:
      "秉持“诚信、高效、创新”的理念，不断提升服务质量，让更多人与企业受益于我们的服务，帮助其团队、公司规模不断扩大，业务广泛拓展，共创美好！",
  },
  {
    icon: "/icons/effective.svg",
    title: "定制",
    description:
      "为个人或企业提供一站式、定制化的管理解决方案。提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。",
  },
  {
    icon: "/icons/expertise.svg",
    title: "专业",
    description:
      "我们拥有一支由资深专家和行业精英组成的专业团队，他们凭借丰富的实战经验和深厚的专业知识，为客户提供定制化咨询服务以及长期售后跟踪服务，致力于满足客户从前期到发展过程中更全面的需求，以优质资源、良好口碑在行业中脱颖而出。",
  },
];
const socialLinks: SocialLink[] = [
  // {
  //   icon: <WhatsApp className="aspect-square" />,
  //   name: "WhatsApp",
  //   href: "http://...",
  // },
  // {
  //   icon: <LinkedIn className="aspect-square" />,
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/company/mumingter",
  // },
  // {
  //   icon: <Instagram className="aspect-square" />,
  //   name: "Instagram",
  //   href: "https://www.instagram.com/mumingter/",
  // },
  {
    icon: <GoogleMaps className="aspect-square" />,
    name: "Google Maps",
    href: "https://www.google.com/maps/place/Far+East+Finance+Building/@1.2820124,103.8501458,19z/data=!3m1!5s0x31da177b7280585d:0x630491f32506cf33!4m15!1m8!3m7!1s0x31da190e80fc602f:0x72001abb75a9ab1b!2sFar+East+Finance+Building!8m2!3d1.2820124!4d103.8507909!10e1!16s%2Fg%2F11c1wynrlk!3m5!1s0x31da190e80fc602f:0x72001abb75a9ab1b!8m2!3d1.2820124!4d103.8507909!16s%2Fg%2F11c1wynrlk?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D",
  },
];
const stickyScrollData = [
  {
    title: "主营范围",
    description:
      "我们的经营范围涵盖企业战略规划、组织架构优化、流程再造、人力资源管理、市场营销策划、品牌塑造与传播、以及信息技术咨询等多个领域。无论是个人或企业，无论其经验有无，我们都能提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。",
    content: (
      <Image
        src="/images/wechat.webp"
        alt="Image"
        fill
        className="object-contain"
      />
    ),
  },
];
// const services = {
//   electricalServices: [
//     {
//       title: "经营范围b",
//       description:
//       "我们的经营范围涵盖企业战略规划、组织架构优化、流程再造、人力资源管理、市场营销策划、品牌塑造与传播、以及信息技术咨询等多个领域。无论是个人或企业，无论其经验有无，我们都能提供量身定制的咨询服务，助力其在激烈的市场竞争中脱颖而出，实现跨越式发展。",
//     },
//   ],
// };
const actionButtons: ActionButton[] = [
  {
    id: "email",
    label: "Email",
    url: "mumingter@gmail.com",
    icon: <Mail className="size-5" />,
    bgColor: "blue",
  },
]

export {
  navData,
  statsData,
  benefits,
  socialLinks,
  stickyScrollData,
  // services,
  actionButtons
};
