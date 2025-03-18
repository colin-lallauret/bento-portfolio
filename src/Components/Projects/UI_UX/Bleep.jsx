import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/bleep/1.png";
import Image2 from "../../../Assets/Images/Full_img/bleep/2.png";
import Image3 from "../../../Assets/Images/Full_img/bleep/3.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function Bleep() {
  useEffect(() => {
    document.title = "Portfolio — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Portfolio — Colin LALLAURET";
        favicon.href = FavIcon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const randomImg = "https://picsum.photos/1920/1080";

  return (
    <>
      <Header />
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>Bleep</h1>
            <p>#UI / UX Design</p>
          </div>
          <div className="tags">
            <p className="tag">Mobile</p>
            <p className="tag">Email</p>
            <p className="tag">Figma</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={Image1} alt="rdm" />
          <div className="img-group">
            <img src={Image2} alt="rdm" />
            <img src={Image3} alt="rdm" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text">
            <h3>Bleep, la « mailbox » sécurisée.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              lobortis leo. Ut sit amet lacinia sapien, vestibulum eleifend
              lorem. In et mauris tempor, congue orci quis, tempor magna.
              Aliquam vitae risus ipsum. Duis aliquet velit vel justo
              sollicitudin, in pellentesque dolor lacinia. Ut tincidunt id augue
              sit amet pellentesque. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
              Etiam nec tincidunt quam. Fusce ultrices nisi semper, euismod
              tellus vel, lacinia velit. Nunc gravida lectus quis metus congue
              placerat. Phasellus dolor sapien, tempus vitae tellus vel,
              accumsan semper tortor. Integer non dictum nibh, id vulputate
              orci. Suspendisse potenti. Aenean eu nisl sapien. Ut dignissim est
              et odio accumsan, volutpat placerat augue dapibus. Phasellus erat
              augue, semper non leo sed, condimentum commodo turpis. Phasellus
              non ipsum sapien. Suspendisse pulvinar venenatis massa, ac ornare
              nibh dapibus id. Donec posuere faucibus mi vel consectetur. Fusce
              imperdiet egestas leo, at condimentum odio mattis vel. In in
              rhoncus purus, vel hendrerit felis. In sed sagittis velit, quis
              volutpat mauris. Nullam ornare congue tincidunt.
            </p>
          </div>
          <div className="info-wrapper">
            <div className="group-solo">
              <h3>Réaliser en groupe</h3>
              <p>Colin LALLAURET (moi)</p>
              <p>Théo LE GOURRIEREC</p>
            </div>
            <div className="used">
              <img src={randomImg} alt="rdm" />
              <img src={randomImg} alt="rdm" />
              <img src={randomImg} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/3d-game/ninjacut" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent
          </Link>
          <Link to="/projet/ui-ux/cnt" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Bleep);
