import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";
// import Draggable from 'react-draggable';


const Photos = ({ slice }) => {
    const photos = slice.items

    const [lightBox, setLightbox] = useState({
        open: false,
        index: null,
        url: ""
      });

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if(lightBox.open){
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }, [lightBox.open])

    const showLightbox = (url, index) => {
        setLightbox({
            open: true,
            index,
            url
        });
    };

    const navigate = direction => {
        if (direction === "next") {
            setLightbox({
                open: true,
                index: lightBox.index + 1,
                url: photos[lightBox.index + 1].photo.url
            });
        } else if (direction === "prev") {
            setLightbox({
                open: true,
                index: lightBox.index - 1,
                url: photos[lightBox.index - 1].photo.url
            });
        }
    };

    const closeLightbox = () => {
        setLightbox({
            open: false,
            index: null,
            url: ""
        });
    };

    // const handleDrag = (e, data) => {
    //     console.log('Event: ', e);
    //     console.log('Data: ', data);
    // }

    return (
    <>
    <div className="section-photos">
        <Masonry className={"masonry"} elementType={"div"}>
          {photos &&
            photos.map((element, i) => (
              <div className="photo-outer-box" key={i}>
                  <div className="photo-inner-box">
                        <img
                        alt={element.photo.alt}
                        src={element.photo.url}
                        onClick={() => showLightbox(element.photo.url, i)}
                        />
                  </div>
              </div>
            ))}
        </Masonry>
    </div>

    {lightBox.open && (
        <div className="lightbox">
          <div className="close" onClick={() => closeLightbox()}>
            <img src="/images/x.svg" alt="close"/>
          </div>
          {lightBox.index !== 0 && (
            <div className="leftBtn" onClick={() => navigate("prev")}>
              <img src="/images/chevron-left.svg" alt="back"/>
            </div>
          )}
        {/* 
        <Draggable
            axis="x"
            defaultPosition={{x: 0, y: 0}}
            onStart={() => console.log('moving')}  
            onDrag={handleDrag}
            onStop={() => console.log('Stopped')}
        > */}
            <img className="photo" src={lightBox.url} />
        {/* </Draggable> */}
          
          
          {lightBox.index !== photos.length - 1 && (
            <div className="rightBtn" onClick={() => navigate("next")}>
              <img src="/images/chevron-right.svg" alt="next"/>
            </div>
          )}
        </div>
      )}
    </>
    )
}

export default Photos
