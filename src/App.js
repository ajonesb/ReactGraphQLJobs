import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import {getJobsQuery} from "../src/queries/queries";

// components
import JobList from "./components/JobList";
// import Search from "./components/search";

// apollo client setup
const client = new ApolloClient({
  uri: "https://api.graphql.jobs"
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Graph QL Jobs</h1>
            </div>
          </div>
          {/* <Search getJobsQuery={getJobsQuery} /> */}
          <JobList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
