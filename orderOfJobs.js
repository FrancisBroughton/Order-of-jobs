/* 
the first part needs to be jobs without dependancies ie "" and z: ""
a: "", b: "c", c:"" = acb

returns an empty object id the string length is 0
Loop over the object
returns an error if a job is dependant on itself othewise
push jobs without any dependancies into the final result.

second part will look over jobs with dependancies

throw error if job is already in the returned array
if neither of the jobs (key and dependancy) are in the returned list add
if the if dependancy job is in the results add key job
if the key job in the results add depenancy

a: "", b: "c", c:"" = acb

*/
