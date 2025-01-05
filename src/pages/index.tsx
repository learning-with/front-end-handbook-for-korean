import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[20px] py-[30px] md:py-[60px]">
        <h3 className="text-4xl font-extrabold">
          프론트엔드 개발자/엔지니어 핸드북
        </h3>
        <div>
          제작 날짜: 2024.12 - 진행 중
          <div>
            원문 작성자: Cody Lindley 및 프론트엔드 마스터즈(Frontend Masters)
          </div>
        </div>
        <div>
          <div>본 페이지는 한국 프론트엔드 개발자를 위해 작성되었습니다.</div>
          <div> 추가적인 정보는 Learning-with 스터디에서 제작되었으며,</div>
          <div>추가에 대해 원작자의 승인을 받았습니다.</div>
        </div>
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

export const Head: HeadFC = () => (
  <>
    <title>프론트엔드 핸드북</title>
    <meta
      name="description"
      content="프론트엔드 개발자/엔지니어 핸드북 한국어 번역본을 제공합니다."
    />
    <meta
      name="keywords"
      content="프론트엔드 개발, 프론트엔드 핸드북, 프론트엔드 면접, 부트캠프, 프론트엔드 개발 로드맵, 개발자 개발자 핸드북"
    />
    <meta property="og:title" content="프론트엔드 핸드북 한국어 번역본" />
    <meta
      property="og:description"
      content="프론트엔드 개발자/엔지니어 핸드북 한국어 번역본을 제공합니다."
    />
    <meta
      property="og:image"
      content="https://frontendmasters.com/guides/front-end-handbook/2024/images/FEM2024_1000w.jpeg"
    />
    <meta property="og:url" content="https://your-website-url.com" />
  </>
);
