import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-[20px] py-[40px] md:py-[100px]">
        <h3 className="text-4xl font-extrabold">
          프론트엔드 개발자/엔지니어 핸드북 2024 <br />
          <span>한국어 번역본</span>
        </h3>
        <div>작성자: Cody Lindley 및 프론트엔드 마스터즈(Frontend Masters)</div>
        <img
          width={700}
          src="https://frontendmasters.com/guides/front-end-handbook/2024/images/FEM2024_1000w.jpeg"
          alt="프론트엔드 핸드북 배너 이미지"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
