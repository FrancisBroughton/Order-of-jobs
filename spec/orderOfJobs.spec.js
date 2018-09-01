const { expect } = require("chai");
const { orderOfJobs } = require("../orderOfJobs")

describe("order of jobs", () => {
  it("#1 returns and empty array if no job has is passed", () => {
    const input = "";
    const actual = orderOfJobs(input);
    expect(actual).to.eql([])
  })

  it("#2 returns a single array when one job is passed with no dependancies are passed", () => {
    const input = '{"a":""}';
    const actual = orderOfJobs(input);
    expect(actual).to.eql(["a"]);
  })

  it("#3 returns an array in the correct order when multiple jobs are passed with no dependencies", () => {
    const input = '{"a":"", "b":"", "c":""}';
    const actual = orderOfJobs(input);
    expect(actual).to.eql(["a", "b", "c"])
  })

  it("#4 returns error message 'Jobs cant depend on itself' if it depends on itself", () => {
    let input = '{"a": "a"}';
    let actual = orderOfJobs(input);
    expect(actual).to.equal("Jobs cant depend on itself");

    input = '{"a": "", "b": "", "c": "c"}'
    actual = orderOfJobs(input);
    expect(actual).to.equal("Jobs cant depend on itself")
  })

  it("#5 returns an array in the correct order if one job has dependencies", () => {
    let input = '{"a": "", "b": "c", "c": ""}';
    let actual = orderOfJobs(input);
    expect(actual).to.eql(["a", "c", "b"])

    input = '{"a": "d", "b": "c", "c": ""}';
    actual = orderOfJobs(input);
    expect(actual).to.eql(["d","a", "c", "b"])
  })

  it("#6 returns an array in the correct order if many jobs have a dependency", () => {
    let input = '{"a": "", "b": "c", "c": "f", "d": "a", "e": "b", "f": ""}';
    let actual = orderOfJobs(input);
    expect(actual).to.eql(["a", "d", "f", "c", "b", "e"])
  })

  it("#7 returns error message 'Jobs can’t have circular dependencies' if the jobs order is circular", () => {
    const input = '{"a": "", "b": "c", "c": "f", "d": "a", "e": "", "f": "b"}';
    const actual = orderOfJobs(input);
    expect(actual).to.equal('Jobs can’t have circular dependencies');
  } )

})