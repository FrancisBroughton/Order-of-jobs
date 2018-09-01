/* 
the first part needs to be jobs without dependancies ie "" and z: ""
a: "", b: "c", c:"" = acb


Loop over the object

.

second part will look over jobs with dependancies

throw error if job is already in the returned array
if neither of the jobs (key and dependancy) are in the returned list add
if the if dependancy job is in the results add key job
if the key job in the results add depenancy

a: "", b: "c", c:"" = acb

*/

const orderOfJobs = jobs => { 
  if (jobs.length === 0) return [];
  // returns an empty object id the string length is 0

 const jobsObject = JSON.parse(jobs);
  //turn the data to a object
 const correctOrderOfJobs = [];
  // need an empty object that the data can be pushed into
  for (let keyJob in jobsObject) {
    // loop over the data
    if(jobsObject[keyJob] === keyJob) return ("Jobs cant depend on itself");
    //returns an error if a job is dependant on itself othewise
    if(jobsObject[keyJob].length === 0) {
      if(!correctOrderOfJobs.includes(keyJob)) correctOrderOfJobs.push(keyJob)
      //push jobs without any dependancies into the final result
    }
    
    // else {


    // }


  }

  return correctOrderOfJobs;

}

module.exports = { orderOfJobs };
