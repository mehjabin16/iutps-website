import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Aboutps = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    }

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            About <span className="text-color-primary">IUTPS</span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                            </p>
                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                            <Image
                                className="has-shadow"
                                src={require('./../../assets/images/video-placeholder.jpg')}
                                alt="Hero"
                                width={896}
                                height={504} />
                    </div>               
                </div>
            </div>
        </section>
    );
}

Aboutps.propTypes = propTypes;
Aboutps.defaultProps = defaultProps;

export default Aboutps;