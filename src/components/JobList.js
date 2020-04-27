import React, { Component } from "react";
import { graphql } from "react-apollo";
import {getJobsQuery} from "../queries/queries";


class JobList extends Component {
  displayJobs() {
    var data = this.props.data;
    if (data.loading) {
      return <div className="loading">Loading jobs...</div>;
    } else {
      return data.jobs.map(job => {
        return (
          <div className="col-md-4 mt-5" key={job.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">
                  Date Posted:
                  <br />
                  {job.postedAt}
                </p>
                <p className="card-text">
                  Location:
                  <br />
                  {job.locationNames}
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return <div className="row">{this.displayJobs()}</div>;
  }
}

export default graphql(getJobsQuery)(JobList);
