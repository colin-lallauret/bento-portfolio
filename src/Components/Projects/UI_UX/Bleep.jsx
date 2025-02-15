import React from "react";
import Header from "../../Regions/Header";

function Bleep() {
  const randomImg = "https://source.unsplash.com/random/800x600";

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
            <p className="tag">SEO</p>
            <p className="tag">Figma</p>
            <p className="tag">Article</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={randomImg} alt="rdm" />
          <div>
            <img src={randomImg} alt="rdm" />
            <img src={randomImg} alt="rdm" />
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
          <div>
            <div className="group-solo">
              <p>Colin LALLAURET (moi)</p>
              <p>Théo LE GOURRIEREC</p>
            </div>
            <div className="hardware">
              <img src={randomImg} alt="rdm" />
              <img src={randomImg} alt="rdm" />
              <img src={randomImg} alt="rdm" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Bleep;
