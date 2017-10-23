const httpService = (() => {    
    const getData = () => ({
            rows: ["New", "In Progress", "Ready for Testing", "Complete", "Accepted", "Rejected"]
        });
    
    return {
        getData
    }
})()