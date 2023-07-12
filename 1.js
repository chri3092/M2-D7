const searchJobs = function (titleQuery, locationQuery){
    let acceptParameters = []
    let acceptTitle = jobs.filter(jobs => jobs.title === titleQuery)
    for (let i = 0; i < acceptTitle.length; i++) {
      let allTitleResult = acceptTitle[i]
      if (allTitleResult === true) {
        acceptParameters.push(allTitleResult)
      }
    } 
    let acceptLocation = jobs.filter(jobs => jobs.location === locationQuery)
    for (let i = 0; i < acceptLocation.length; i++) {
      let allLocationResult = acceptLocation[i]
      if (allLocationResult === true) {
        acceptParameters.push(allLocationResult)
      }
    }  
    
  }
  const data = searchJobs("developer", "US")
  console.log(data)