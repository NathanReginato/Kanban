const app = ((primitivesFactory, httpService) => {
    const body = document.getElementById("body");
    const laneContainer = primitivesFactory.div({className: "container"}); 
    const laneRow = primitivesFactory.div({className: "row"}); 
    const lanes = httpService.getData()
        .rows.map((row) => primitivesFactory.div({className: "col-sm-2", innerText: row}));

    body.appendChild(laneContainer);
    laneContainer.appendChild(laneRow);

    lanes.forEach((lane) => laneRow.appendChild(lane));

})(primitivesFactory, httpService)



// var para = 
// var node = document.createTextNode("This is new.");
// para.appendChild(node);

// var element = document.getElementById("div1");
// element.appendChild(para);