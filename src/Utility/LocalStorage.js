const getSaveJobApply =()=>{
    const storedJobApply=localStorage.getItem('Job-application');
    if(storedJobApply)
    {
        return JSON.parse(storedJobApply);
    }
    return [];
}

const saveJobApply = id =>{
   const storedJobApplys=getSaveJobApply();
//    doplicate id check 
   const exists = storedJobApplys.find(jobId => jobId===id)
   if(!exists)
   {
    storedJobApplys.push(id);
    localStorage.setItem('Job-application',JSON.stringify(storedJobApplys))
   }
}
export {getSaveJobApply, saveJobApply}