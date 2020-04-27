import React, { Component } from "react";
import JobList from "./JobList";
// import { getJobsQuery } from "../queries/queries"

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    });
  }

  render() {
    let filteredJobs = this.props.jobs.filter(job => {
      return job.title.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <input
          className="text"
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
        <hr />
        <ul>
          {filteredJobs.map((job)=> {
            return <JobList job={job} 
                key={job.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
