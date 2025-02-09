import React from "react";
import TypographyAtom from "@/components/ui/atoms/TypographyAtom";
import { Helmet } from "react-helmet";
import { PAGE_TITLE_HOME, APP_TITLE } from "@/utils/constants";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
        <meta name="description" content="Welcome to Home Page" />
      </Helmet>
      <TypographyAtom variant="h4">Welcome to Home Page</TypographyAtom>
    </>
  );
};

export default Home;
