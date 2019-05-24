import BaseComponent from "../BaseComponent.js";
import wait from '../../lib/wait.js';
import SliderButton from './SliderButton.js';

export default class TestimonialSlider extends BaseComponent {
    usedComponents = [
        SliderButton
    ];

    html = `
        <div class="testimonial-images"></div>
        <div class="testimonial-texts">
            <div class="dots"></div>

            <div class="texts"></div>
        </div>
    `;

    testimonials = [
        {
            text : "Det tog kun 5 minutter. Nu har jeg et personligt CV, som har skaffet mig tre jobsamtaler alene den sidste uge. Det er vanvttigt fedt, at jeg selv kan vælge farver og layout. Det giver så mange muligheder!",
            person: "Jonas",
            image: "/img/testimonials/testimonial1.jpg",
        },
        {
            text : "xD.",
            person: "Yeet",
            image: "/img/testimonials/testimonial2.jpg",
        },
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
            person: "Ma~",
            image: "/img/testimonials/testimonial3.jpg",
        },
        {
            text : "Max Najs",
            person: "Thore Husfeldt",
            image: "/img/testimonials/testimonial4.jpg",
        },
    ];

    slideSpeed = 4000;

    _shouldBeRunning = false;

    _current = 0;

    _timeout = null;

    // language=CSS
    get css() {
        return `
            :host {
                display: flex;
                flex-direction: column;
                font-family: 'Open Sans', sans-serif;
                color: white;
                --image-height: 400px;
                overflow: hidden;
                position: relative;

                --text-padding: 30px 30px 0 0;
                --button-padding: 30px 30px 0 0;
            }

            .testimonial-images {
                position: relative;
                height: var(--image-height);
            }

            .testimonial-image {
                height: var(--image-height);
                object-fit: cover;
                object-position: top;
                position: absolute;
                opacity: 0;
                transition: 300ms ease-in-out opacity;
            }

            .testimonial-image.visible {
                opacity: 1;
            }

            .testimonial-texts {
                display: flex;
                overflow: hidden;
                flex-direction: column-reverse;
            }

            .testimonial-text {
                position: absolute;
                opacity: 0;
                padding: var(--text-padding);
                line-height: 1.4;
                font-size: 1.5em;
                font-style: italic;
                transition: 300ms ease-in-out opacity;
                font-weight: 100;
                pointer-events: none;
            }

            .testimonial-text.visible {
                opacity: 1;
                pointer-events: initial;
            }

            .person {
                display: block;
                font-size: 0.8em;
                line-height: 2;
            }
            .dots {
                display: flex;
                width: 100%;
                justify-content: center;
                padding: var(--button-padding);
            }

            .texts {
                height: 0px;
                min-height: 20em;
                transition: 300ms ease-in-out height;
            }

            slider-button {
                margin: 0px 5px;
            }

            @media(max-width: 600px) {
                .testimonial-image {
                    width: 100%;
                }

                .testimonial-texts {
                    position: relative;
                }
            }

            @media(min-width: 600px) {
                :host {
                    flex-direction: row-reverse;
                }

                .testimonial-images,
                .testimonial-texts {
                    flex: 1;
                }

                .testimonial-image {
                    max-width: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                .testimonial-texts {
                    flex-direction: column;
                }

                .testimonial-text {
                    max-width: 50%;
                    padding-top: 0px;
                }

                .testimonial-image {
                    padding-left: 60px;
                }

                .dots {
                    justify-content: flex-end;
                }
            }

            @media(min-width: 800px) {
                :host {
                    --image-height: 400px;
                }
            }

            @media(min-width: 1100px) {
                :host {
                    --image-height: 600px;
                }

                .testimonial-text {
                    font-size: 2em;
                }

                .person {
                    font-size: 1em;
                }
            }
        `;
    }

    script = () => {
        this.textContainer = this.shadowRoot.querySelector('.testimonial-texts .texts');

        this.imageContainer = this.shadowRoot.querySelector('.testimonial-images');
        this.dotContainer = this.shadowRoot.querySelector('.dots');
        this.testimonials.forEach((testimonial, i) => {
            const text = this._createDomForTestimonialText(testimonial);
            const image = this._createDomForTestimonialImage(testimonial);
            const dot = this._createDot(testimonial, i);
            this.textContainer.appendChild(text);
            this.imageContainer.appendChild(image);
            this.dotContainer.appendChild(dot);
        });

        this.texts = this.shadowRoot.querySelectorAll('.testimonial-text');
        this.images = this.shadowRoot.querySelectorAll('.testimonial-image');
        this.dots = this.shadowRoot.querySelectorAll('.dots slider-button');

        requestAnimationFrame(_=> {
            this.start();
        })
    };

    start = () => {
        this._shouldBeRunning = true;
        this._tick();
    };

    stop = () => {
        this._shouldBeRunning = false;
    };

    resume = () => {
        this._shouldBeRunning = true;
        this._next();
    };

    _tick() {
        if(!this._shouldBeRunning) return;

        this.images.forEach(image => {
            image.classList.remove('visible');
        });

        this.texts.forEach(text => {
            text.classList.remove('visible');
        });

        this.dots.forEach(dot=> {
            dot.removeAttribute('active');
        });

        const image = this.images[this._current];
        const text = this.texts[this._current];
        const dot = this.dots[this._current];

        this.textContainer.style.height = `${text.clientHeight}px`;

        image.classList.add('visible');
        text.classList.add('visible');
        dot.setAttribute('active', '');

        this._current = (this._current + 1) % this.testimonials.length;

        this._next();
    }

    _next() {
        if(this._timeout != null) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }

        this._timeout = setTimeout(_=> {
            this._tick();
        }, this.slideSpeed);
    }

    _createDomForTestimonialText = (testimonial) => {
        const p = document.createElement('p');
        p.classList.add('testimonial-text');
        p.innerHTML = `"${testimonial.text}"`;

        const person = document.createElement('span');
        person.classList.add('person');
        person.innerHTML = `- ${testimonial.person}`;

        p.appendChild(person);

        return p;
    };

    _createDomForTestimonialImage = (testimonial) => {
        const container = document.createElement('div');
        container.classList.add('testimonial-image-container');
        const img = document.createElement('img');
        img.classList.add('testimonial-image');
        img.src = testimonial.image;

        return img;

    }

    _createDot(testimonial, i) {
        const button = document.createElement(SliderButton.elementName);

        button.addEventListener('click', evt => {
            this._current = i;
            this._tick();
        })

        return button;
    }
}
