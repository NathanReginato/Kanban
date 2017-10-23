const primitivesFactory = ((document) => {

    const _createElement = (elementType) => document.createElement(elementType);
    const _createElementWithConfiguration = (elementType, configuration) => {
        const element = _createElement(elementType)    
        for (let key in configuration) {
            element[key] = configuration[key];
        };
        return element;
    }

    const div = (configuration) => 
        configuration ? 
        _createElementWithConfiguration("div", configuration) : 
        _createElement("div")
     
     
    return {
        div
    }
    
})(document);
