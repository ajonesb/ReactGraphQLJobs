import { gql } from "apollo-boost";

const getJobsQuery = gql`
  {
    jobs {
      id
      title
      postedAt
      locationNames
    }
  }
`;

export {getJobsQuery};