import React from "react";
import Feed from "@components/Feed";

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Unleash your creative potential with PromptHub, the ultimate
        AI-powered prompt discovery and sharing platform. Discover captivating
        prompts, create your own, and connect with a vibrant community of
        like-minded creators. Elevate your creativity today with PromptHub.
      </p>
      {/* Feeds */}
      <Feed />
    </section>
  );
};

export default Page;
