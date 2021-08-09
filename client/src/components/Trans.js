//React
import { React, useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useCurrentRoute, useViewElement } from 'react-navi';
import { useTransition, animated, config } from 'react-spring';

//Dependencies
import _ from 'lodash';

export default function Trans() {
    const [show, set] = useState(false)
    let currentRoute = useCurrentRoute()
    let viewElement = useViewElement()
    let transitions = useTransition(viewElement, currentRoute.url.href, {
        from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
        reverse: show,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!show),
    })

    return transitions.map(({ item, props: style, key, state }) =>
        <animated.div key={key} style={{
        ...style,
        position: 'absolute',
        top: 0,
        width: '100%',
        }}>
            {item}
        </animated.div>
    )   
}   