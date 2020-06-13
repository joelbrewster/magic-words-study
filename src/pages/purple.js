import React, { useState } from 'react'
import Layout from "../components/layout"
import EmblaCarouselReact from 'embla-carousel-react'
import Confetti from "../components/confetti"

const IndexPage = () =>  {

  const colour = '#8E3AF6';
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
    'again',
    'ask',
    'best',
    'bring',
    'far',
    'find',
    'give',
    'how',
    'kind',
    'left',
    'man',
    'mother',
    'own',
    'room',
    'say',
    'step',
    'these',
    'too',
    'walk',
    'wish',
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
        <button className="embla__button embla__button--prev" onClick={() => embla.scrollPrev()}>
	    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
		<path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
	    </svg>
	</button>
	<button className="embla__button embla__button--next" onClick={() => embla.scrollNext()}>
	    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
		<path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
	    </svg>
	</button>
    </>
  )
}

export default IndexPage
