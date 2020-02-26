import React from "react";
import { graphql } from "gatsby";
// import styled from "@emotion/styled";

// const styled

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;
  return (
    <>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
      <pre>{data.timestamp}</pre>
    </>
  );
};
export default Post;
export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        body {
          html
        }
        timestamp
      }
    }
  }
`;
