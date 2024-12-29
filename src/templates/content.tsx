import * as React from "react";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import { graphql } from "gatsby";

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
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h1, h2, h3");
      headings.forEach((heading) => {
        if (heading instanceof HTMLElement) {
          if (heading.tagName === "H1") {
            heading.style.fontSize = "2rem";
            heading.style.fontWeight = "bold";
          } else if (heading.tagName === "H2") {
            heading.style.fontSize = "1.5rem";
            heading.style.fontWeight = "600";
            heading.id = (heading.textContent || heading.innerText).split(
              " "
            )[0];
          } else if (heading.tagName === "H3") {
            heading.style.fontSize = "1.25rem";
            heading.style.fontWeight = "500";
          }
        }
      });
    }

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
      <div className="flex flex-col items-center gap-[20px] py-[40px]">
        <div ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />
        <a href={frontmatter.origin}>
          <h2>원본 바로가기</h2>
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
