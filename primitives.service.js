const primitivesAbstract = ((primitivesFactory) => {
    
        const addToParent = (parent, child) => parent
         
        primitivesFactory._proto_ = {
            addToParent
        }


        
    })(primitivesFactory);