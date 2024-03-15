import { Component } from "react";

import ProfileCard from "./ProfileCard";

class ProfileCardList extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [
        {
          uid: 1,
          title: "Frodo",
          imageSource:
            "https://pbs.twimg.com/media/GIrC6-YXgAA0k89?format=png&name=small",
          description:
            "A hobbit and the bearer of the one ring. Bilbo's Nephew.",
        },
        {
          uid: 2,
          title: "Sam",
          imageSource:
            "https://pbs.twimg.com/media/GIrD_rUWwAA-M7K?format=png&name=120x120",
          description: "A loyal hobbit who was Frodo's gardener.",
        },
        {
          uid: 3,
          title: "Merry",
          imageSource:
            "https://pbs.twimg.com/media/GIrDDMOXIAABCAz?format=png&name=240x240",
          description:
            "Another hobbit friend of Frodo. Often seen with Pippin.",
        },
        {
          uid: 4,
          title: "Pippin",
          imageSource:
            "https://pbs.twimg.com/media/GIrDDMSWIAAmjPQ?format=png&name=240x240",
          description:
            "A hobbit who often hangs out with Merry and often gets into trouble.",
        },
        {
          uid: 5,
          title: "Gandalf",
          imageSource:
            "https://pbs.twimg.com/media/GIrC6-WWsAAdSqV?format=png&name=900x900",
          description:
            "A wizard who sets Frodo off on his quest and is very helpful to have around.",
        },
        {
          uid: 6,
          title: "Aragorn",
          imageSource:
            "https://pbs.twimg.com/media/GIrC6-XXEAASRkW?format=png&name=900x900",
          description:
            "A man who appears to be a wanderer but is actually the heir of the throne of Gondor.",
        },
        {
          uid: 7,
          title: "Boromir",
          imageSource:
            "https://pbs.twimg.com/media/GIrC6-YWEAE9pU9?format=png&name=small",
          description:
            "A man from Gondor who wants desperately to help his people",
        },
        {
          uid: 8,
          title: "Legolas",
          imageSource:
            "https://pbs.twimg.com/media/GIrDDMHWAAA36pA?format=png&name=small",
          description:
            "An elf from Mirkwood who has a sharp eye and good aim with his bow.",
        },
        {
          uid: 9,
          title: "Gimli",
          imageSource:
            "https://pbs.twimg.com/media/GIrDDL1WsAAYfow?format=png&name=small",
          description:
            "A dwarf who always speaks his mind and is always ready for a fight.",
        },
      ],
    };
  }

  render() {
    return this.state.profiles.map((profile) => {
      return (
        <ProfileCard
          key={profile.uid}
          title={profile.title}
          imageSource={profile.imageSource}
          description={profile.description}
          logger={this.props.logger}
        />
      );
    });
  }
}

export default ProfileCardList;
