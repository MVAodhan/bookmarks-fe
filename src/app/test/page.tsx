"use client";
import React from "react";
import * as z from "zod";
import DOMPurify from "dompurify";

const page = () => {
  const clean = DOMPurify.sanitize(
    '<p>Hello <script>alert("xss")</script><strong>World</strong></p>'
  );

  console.log(clean);

  return <div>page</div>;
};

export default page;
