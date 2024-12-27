import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <main className="w-full p-[20px] flex">
      <div>
        <div onClick={toggleMenu}>메뉴바</div>
        {isMenuOpen && (
          <div className="bg-blue">
            <a href="/contents/overview-of-field-of-work">개요</a>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[20px] m-auto">
        <h3 className="text-4xl font-extrabold">
          프론트엔드 개발자/엔지니어 핸드북 2024 (한국어 번역본)
        </h3>
        <div>작성자: Cody Lindley 및 프론트엔드 마스터즈(Frontend Masters)</div>
        <img
          width={700}
          src="https://frontendmasters.com/guides/front-end-handbook/2024/images/FEM2024_1000w.jpeg"
          alt="프론트엔드 핸드북 배너 이미지"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
