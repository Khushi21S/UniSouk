import React from "react";

export default function Clients() {
  const logos = [
    {
      name: "Disney",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg",
      alt: "Disney Logo",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google Logo",
    },
    {
      name: "HubSpot",
      src: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
      alt: "HubSpot Logo",
    },
    {
      name: "YouTube",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
      alt: "YouTube Logo",
    },
    {
      name: "Slack",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
      alt: "Slack Logo",
    },
    {
      name: "Shopify",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      alt: "Shopify Logo",
    },
  ];

  return (
    <section className="py-12 text-center bg-white">
      <p className="text-sm uppercase text-gray-500 font-bold">Trusted by top-leading companies</p>
      <div className="flex justify-center gap-8 mt-6 flex-wrap items-center">
        {logos.map(({ name, src, alt }) => (
          <img
            key={name}
            src={src}
            alt={alt}
            className="h-8 w-auto "
          />
        ))}
      </div>
    </section>
  );
}
