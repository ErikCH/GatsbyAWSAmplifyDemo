import * as React from "react";
import Amplify from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  Amplify.configure({});
  return (
    <main style={pageStyles}>
      <Authenticator>
        {({ signOut }) => {
          return <button onClick={signOut}>Sign Out</button>;
        }}
      </Authenticator>
    </main>
  );
};

export default IndexPage;
