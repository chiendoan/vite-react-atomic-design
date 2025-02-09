import React from "react";
import TypographyAtom from "@/components/ui/atoms/TypographyAtom";
import { Helmet } from "react-helmet";
import { APP_TITLE, PAGE_TITLE_CUSTOMER } from "@/utils/constants";

const Customer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_CUSTOMER} | {APP_TITLE}
        </title>
        <meta name="description" content="Welcome to Home Page" />
      </Helmet>
      <TypographyAtom variant="h4">Customer Page</TypographyAtom>
    </>
  );
};

export default Customer;
