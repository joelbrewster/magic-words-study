import React, { useState } from 'react'
import Layout from "../components/layout"
import EmblaCarouselReact from 'embla-carousel-react'
import Confetti from "../components/confetti"

const IndexPage = () =>  {

  const colour = '#EB3323';
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
    'all',
    'for',
    'so',
    'as',
    'had',
    'not',
    'they',
    'are',
    'have',
    'on',
    'we',
    'at',
    'he',
    'one',
    'with',
    'but',
    'her',
    'said',
    'you',
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
		<div className="slide-inner slider-inner-confetti" style={{ backgroundColor: `${colour}` }}>
                    <Confetti/>
		</div>
	    </div>
	</EmblaCarouselReact>

    </>
  )
}

export default IndexPage
