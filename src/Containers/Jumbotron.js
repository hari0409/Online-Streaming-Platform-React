import React from "react";
import Jumbotron from "../Components/Jumbotron/index";
import JumboData from "../fixtures/jumbo.json"
function JumbotronContainer() {
  return (
    <div className="App">
      <Jumbotron.Container>
          {JumboData.map((item)=>(
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.subTitle>{item.subTitle}</Jumbotron.subTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
      </Jumbotron.Container>
    </div>
  );
}

export default JumbotronContainer;
