import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.mumingter.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://www.mumingter.com/about-us",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		},
	];
}
