import React from "react";
import { ButtonContent, Button, Icon,Rating, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const ButtonExampleAnimated = () => (
  <div>
    <div>
      <Button animated="yellow">
        <ButtonContent visible>Next</ButtonContent>
        <ButtonContent hidden>
          <Icon name="arrow right" />
        </ButtonContent>
      </Button>
      <Button animated="vertical">
        <ButtonContent hidden>Shop</ButtonContent>
        <ButtonContent visible>
          <Icon name="shop" />
        </ButtonContent>
      </Button>
      <Button animated="red">
        <ButtonContent visible>Sign-up for a Pro account</ButtonContent>
        <ButtonContent hidden>$12.99 a month</ButtonContent>
      </Button>
    </div>
    <div>
      <Rating defaultRating={3} maxRating={5} />
    </div>
    <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
  </div>
);

export default ButtonExampleAnimated;
