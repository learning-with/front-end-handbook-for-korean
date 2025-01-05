import * as React from "react";

import { HeadFC, graphql } from "gatsby";

import Layout from "../components/Layout";

type BlogPostDataProps = {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      origin: string;
    };
  };
};

export default function BlogPostTemplate({
  data,
}: {
  data: BlogPostDataProps;
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [html]);

  return (
    <Layout>
      <div className="flex flex-col gap-[20px] py-[40px]">
        <div ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />
        <a href={frontmatter.origin} className="text-end">
          원본 바로가기
        </a>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        origin
      }
    }
  }
`;

export const Head: HeadFC = () => <title>프론트엔드 핸드북</title>;
