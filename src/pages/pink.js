import React, { useState } from 'react'
import Layout from "../components/layout"
import EmblaCarouselReact from 'embla-carousel-react'

const IndexPage = () =>  {

  const colour = '#ED70C8';
  const [embla, setEmbla] = useState(null);

  const options = {
    align: 'center',
    containerSelector: '*',
    slidesToScroll: 1,
    containScroll: false,
    draggable: true,
    dragFree: false,
    loop: false,
    speed: 10,
    startIndex: 0,
    selectedClass: 'is-selected',
    draggableClass: 'is-draggable',
    draggingClass: 'is-dragging'
  };

  const words = [
    'after',
    'am',
    'boy',
    'day',
    'eat',
    'five',
    'fly',
    'girl',
    'good',
    'home',
    'help',
    'jump',
    'play',
    'ran',
    'read',
    'saw',
    'sing',
    'sit',
    'think',
    'us',
  ];
  return (
    <>
	<EmblaCarouselReact
	  htmlTagName="div"
	  emblaRef={setEmbla}
	  options={options}
	>

	    <div className="slide">
		{words.map(word =>
		  <div className="slide-inner" style={{ backgroundColor: `${colour}` }}>
		      <p>
			  {word}
		      </p>
		  </div>
		)}
	    </div>
	</EmblaCarouselReact>

    </>
  )
}

export default IndexPage