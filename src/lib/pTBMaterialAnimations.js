"use strict";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

//*************component animations*****************

export function EventLoadingAniTl({ controleNodes, expandedHeight }) {
  var { tag, title, icon } = controleNodes;
  var tl = gsap.timeline({ paused: true });
  //animate event
  tl.add("shrink");
  tl.to(title, 0.1, { opacity: 0 }, "shrink");
  tl.to(tag, 0.3, {
    x: "+=58",
    y: "+=20",
    morphSVG: "M0,25 a25,25,0,0,1,50,0 a25,25,0,0,1,-50,0",
    scale: 0.8,
    transformOrigin: "40, 28"
  }),
    "shrink";
  tl.to(
    icon,
    0.3,
    { x: "+=64", y: "+=20", transformOrigin: "40, 28" },
    "shrink"
  );

  tl.add("center");
  tl.to(icon, 0.2, { x: 420, y: 189 }, "center");
  tl.to(tag, 0.2, { x: 408, y: 186, scale: 0.4 }, "center");

  tl.add("loader");
  tl.to(tag, 0, {
    morphSVG:
      "M0,10 a10,10,0,0,1,20,0 a10,10,0,0,1,-20,0 M60,10 a10,10,0,0,1,20,0 a10,10,0,0,1,-20,0 M30,62 a10,10,0,0,1,20,0 a10,10,0,0,1,-20,0",
    scale: 0.2
  }),
    "loader";
  tl.to(icon, 0.2, { scale: 0.8, ease: "Expo.easeOut" }, "loader");
  tl.to(tag, 0.2, { scale: 1, ease: "Expo.easeOut" }, "loader");

  tl.add("spin");

  tl.to(
    tag,
    1.6,
    { rotation: 600, transformOrigin: "40, 28", ease: "Power0.easeOut" },
    "spin"
  );

  tl.add("spread");
  tl.to(tag, 0, { rotation: 0, transformOrigin: "40, 28" }, "spread");
  tl.to(tag, 0.3, {
    x: 20,
    y: 88,
    fill: "#e3e3e3",
    morphSVG: `M10,10 h990 a6,6,0,0,1,6,6 v${expandedHeight} a6,6,0,0,1,-6,6 h-990 a6,6,0,0,1,-6,-6 v-${expandedHeight} a6,6,0,0,1,6,-6`,
    ease: "Expo.easeOut"
  }),
    "spread";
  tl.to(
    icon,
    0.3,
    {
      ease: "Expo.easeOut",
      x: -8,
      y: 76,
      scale: 2,
      transformOrigin: "left-top"
    },
    "spread"
  );

  return tl;
}

export function EventStandardAniOpenTl({
  controlNodes,
  expandedHeight,
  styleOptions,
  bar,
  onResolve
}) {
  var { event, tag, title, date, icon, iconGroup } = controlNodes;
  var { eventDetails } = bar.getNodes();

  var tl = gsap.timeline({ paused: true });
  // animate event
  tl.add("shrink");
  tl.to([title, date], 0.1, { opacity: 0 }, "shrink", "start");
  tl.to(event, 0.1, {
    transformOrigin: "50% 50%",
    scale: 0.8,
    ease: "Power1.easeInOut",
    onComplete: onResolve
  }),
    "shrink";
  tl.to(event, 0.3, { y: 86, ease: "Power1.easeInOut" }, 0.1, "shrink");
  tl.add("spread");
  tl.to(tag, 0.2, {
    x: "20",
    y: "85",
    opacity: 0.6,
    fill: styleOptions.placeholderColor,
    morphSVG: `M10,10 h${styleOptions.barWidth.large -
      80} a6,6,0,0,1,6,6 v${expandedHeight} a6,6,0,0,1,-6,6 h-${styleOptions
      .barWidth.large -
      80} a6,6,0,0,1,-6,-6 v-${expandedHeight} a6,6,0,0,1,6,-6`,
    ease: "Power1.easeInOut"
  }),
    "spread";
  tl.to(
    iconGroup,
    0.2,
    {
      attr: {
        scale: 2
      },
      scale: 2,
      ease: "Power1.easeInOut"
    },
    "spread"
  );
  tl.to(
    icon,
    0.2,
    {
      attr: {
        x: 0,
        y: 80,
        scale: 2,
        transformOrigin: "left-top"
      },
      ease: "Power1.easeInOut"
    },
    "spread"
  );
  tl.to(
    event,
    0.2,
    { x: "0", y: "0", scale: 1, ease: "Power1.easeInOut" },
    "spread"
  );
  tl.to(eventDetails, 0.2, { opacity: 1 }, 0.6, "spread");

  return tl;
}

export function BarDetailAniTl({ bar, styleOptions, onResolveTl }) {
  var {
    backButton,
    tag: barTag,
    events,
    headerDetails,
    eventDetails
  } = bar.getNodes();

  var tl = gsap.timeline({ paused: true });

  tl.add("widen");
  tl.to(
    barTag,
    0.2,
    {
      morphSVG: `M0,0 h${styleOptions.barWidth.large -
        100} a6,6,0,0,1,6,5 v13 h-${styleOptions.barWidth.large -
        262} a6,6,0,0,0,-6,6 l-21, 58 a6,6,0,0,1,-6,6 h-130 a6,6,0,0,1,-6,-6 v-76 a6,6,0,0,1,6,-6`,
      onComplete: () => onResolveTl.play(),
      onReverseComplete: () => onResolveTl.reverse()
    },
    "widen"
  );

  tl.add("grow");
  tl.to(
    barTag,
    0.3,
    {
      opacity: 0.8,
      morphSVG: `M0,0 h${styleOptions.barWidth.large -
        100} a6,6,0,0,1,6,5 v${100 + 13} h-${styleOptions.barWidth.large -
        262} a6,6,0,0,0,-6,6 l-21, 58 a6,6,0,0,1,-6,6 h-130 a6,6,0,0,1,-6,-6 v-${100 +
        76} a6,6,0,0,1,6,-6`,
      ease: "Power1.easeInOut"
    },
    "grow"
  );
  tl.to(
    [events, eventDetails],
    0.3,
    { y: 100, ease: "Power1.easeInOut" },
    "grow"
  );
  tl.add("final");
  tl.to(
    backButton,
    0.2,
    {
      attr: {
        visibility: 1,
        opacity: 1
      }
    },
    "-=.1",
    "final"
  );
  tl.to(headerDetails, 0.3, { opacity: 1 }, "final");

  return tl;
}

export function BarAniTl({
  eventNodes,
  bar,
  styleOptions,
  timelineBarWidthLg,
  timelineBarWidthSm,
  eventWidthLg,
  eventWidthSm,
  xFactorSm,
  elementCount,
  status
}) {
  var { barElement, tag: barTag, title, detail } = bar.getNodes();

  var tl = gsap.timeline({ paused: true });

  tl.add("detail");
  tl.add("shrink");
  tl.to(eventNodes.date, 0.2, { opacity: 0 }, "shrink");
  tl.to(
    eventNodes.iconGroup,
    0.3,
    { scale: 0.3, x: "+=17", y: "+=14", ease: "Power3.inOut" },
    "shrink"
  );
  tl.to(
    eventNodes.iconShape,
    0.3,
    { fill: styleOptions.placeholderColor, strokeWidth: 0 },
    "shrink"
  );
  tl.to(eventNodes.iconSvg, 0.3, { opacity: 0 }, "shrink");
  tl.to(title, 0.3, { opacity: 0 }, "shrink");
  tl.to(detail, 0.3, { y: "-=15" }, "shrink");
  tl.to(
    barTag,
    0.3,
    {
      morphSVG: `M0,0 h${timelineBarWidthLg} a6,6,0,0,1,6,5 l1, 1 h-${timelineBarWidthLg -
        146} a8,8,0,0,0,-7,7 l-7, 18 a8,8,0,0,1,-6,6 h-127 a6,6,0,0,1,-6,-6 v-25 a6,6,0,0,1,6,-6`,
      ease: "Power3.inOut"
    },
    "shrink"
  );
  tl.to(
    eventNodes.tag.slice(status),
    0.3,
    { fill: styleOptions.placeholderColor },
    "shrink"
  );
  tl.to(
    eventNodes.tag[0],
    0.3,
    {
      morphSVG: {
        shape: `M11,1 h${eventWidthLg +
          5} l0, 0 l-5, 12 l-5, 12 l0, 0 h-${eventWidthLg +
          5} a6,6,0,0,1,-6,-6 l2 -6 l3 -6 a6,6,0,0,1,6,-6`,
        shapeIndex: 0,
        map: "complexity"
      },
      ease: "Power3.inOut"
    },
    "shrink"
  );
  tl.to(
    eventNodes.tag.slice(1, eventNodes.tag.length - 1),
    0.3,
    {
      morphSVG: {
        shape: `M4,1 h${eventWidthLg + 12} l-5, 12 l-5, 12 h-${eventWidthLg +
          12} l5, -12 l5, -12`,
        shapeIndex: 0,
        map: "complexity"
      },
      ease: "Power3.inOut"
    },
    "shrink"
  );
  tl.to(
    eventNodes.tag[eventNodes.tag.length - 1],
    0.3,
    {
      morphSVG: {
        shape: `M-1,1 h${eventWidthLg +
          5} a6,6,0,0,1,6,6 l-2, 6 l-3, 6 a6,6,0,0,1,-6,6 h-${eventWidthLg +
          5}  l0, 0 l5, -12 l5, -12 l0, 0`,
        shapeIndex: 0,
        map: "complexity"
      },
      ease: "Power3.inOut"
    },
    "shrink"
  );
  tl.to(eventNodes.event, 0.3, { x: "+=4", y: "-=13" }, "shrink");
  tl.to(eventNodes.title, 0.2, { opacity: 0 }, "shrink");
  tl.to(eventNodes.date, 0.3, { x: "-=10", y: "-=13", fontSize: 12 }, "shrink");
  tl.to(eventNodes.date, 0.02, { opacity: 1 });
  tl.add("large");
  tl.add("shrink2");
  tl.to(barElement, 0.6, { width: styleOptions.barWidth.small }, "shrink2");
  tl.to(
    barTag,
    0.3,
    {
      morphSVG: `M-5,0 h${timelineBarWidthSm -
        80} l-3, 3 h-${timelineBarWidthSm -
        176} l-5, 12 h-77 a3,3,0,0,1,-3,-3 v-9 a3,3,0,0,1,3,-3`,
      ease: "Power3.inOut"
    },
    "shrink2"
  );

  let eventNodesAniActions = eventNodes.tag.map((node, index) => {
    return function nodeAniAction() {
      tl.to(
        node,
        0.3,
        {
          x: index * xFactorSm + 80,
          y: 17,
          morphSVG: {
            shape:
              index < status - 1
                ? `M6,0 h${eventWidthSm + 6} l-5, 11 h-${eventWidthSm +
                    6} l5 -11`
                : index === status - 1 && index !== elementCount - 1
                ? `M6,0 h18 l7,-7 h${eventWidthSm -
                    16} l-8, 18 h-${eventWidthSm + 6} l4 -11`
                : index === elementCount - 1 && index != status - 1
                ? `M7,-4 h${eventWidthSm +
                    2} a3,3,0,0,1,3,3 v9 a3,3,0,0,1,-3,3 h-${eventWidthSm +
                    8} l8 -17`
                : index === elementCount - 1 && index === status - 1
                ? `M6,0 h18 l4,-4 h${eventWidthSm -
                    19} a3,3,0,0,1,3,3 v9 a3,3,0,0,1,-3,3 h-${eventWidthSm +
                    8} l5 -11`
                : `M8,-4 h${eventWidthSm + 6} l-7, 16 h-${eventWidthSm +
                    6} l7 -16`,
            shapeIndex: 0,
            map: "complexity"
          },
          ease: "Power3.inOut"
        },
        "shrink2"
      );
      tl.to(
        eventNodes.date[index],
        0.3,
        { x: index * xFactorSm + 86, y: 29, scale: 0.45 },
        "shrink2"
      );
    };
  });

  tl.to(eventNodes.iconGroup, 0.3, { opacity: 0, scale: 0 }, "shrink2");

  eventNodesAniActions.forEach(nodeAniAction => {
    nodeAniAction();
  });

  tl.to(detail, 0.3, { x: -6, y: -18, scale: 0.5 }, "shrink2");
  tl.add("small");

  return tl;
}

export function BarModalLockTl({ bar }) {
  var { barDiv } = bar.getNodes();

  var tl = gsap.timeline({ paused: true });

  tl.to(barDiv, 0, {
    zIndex: 0
  });

  tl.add("start");
  tl.to(
    barDiv,
    0,
    {
      zIndex: 100
    },
    "start"
  );

  return tl;
}

export function BarPositionTl({ bar, top }) {
  var { barDiv } = bar.getNodes();

  var tl = gsap.timeline({ paused: true });

  tl.add("start");
  tl.to(
    barDiv,
    0.6,
    {
      x: 20,
      y: `-=${top - 10}`,
      backgroundColor: "rgba(211, 232, 235, 0.7)",
      padding: "5px"
    },
    "start"
  );

  return tl;
}

export function BarEventUpBtnTl({ upButton, coords }) {
  var tl = gsap.timeline({ paused: true });

  tl.add("set");

  tl.to(
    upButton,
    0,
    {
      attr: {
        visibility: 0,
        opacity: 0
      }
    },
    "set"
  );

  tl.to(
    upButton,
    0,
    {
      attr: {
        x: coords.x,
        y: coords.y + 60
      }
    },
    "set"
  );

  tl.add("move");

  tl.to(
    upButton,
    0.4,
    {
      attr: {
        visibility: 1,
        opacity: 1
      }
    },
    "move"
  );

  tl.to(
    upButton,
    0.2,
    {
      attr: {
        x: coords.x,
        y: coords.y
      }
    },
    "move"
  );
  return tl;
}

export function BarModalHeaderTl(opts) {
  var barPositionAnimation = BarPositionTl(opts);
  var barModalLockAnimation = BarModalLockTl(opts);
  var barOpenAnimation = BarDetailAniTl({
    ...opts,
    onResolveTl: barPositionAnimation
  });

  var tl = gsap.timeline({ paused: true });

  tl.add("start");
  tl.add(barOpenAnimation.play(), "start");
  tl.add(barModalLockAnimation.play(), "start");

  return tl;
}

function _updateBarHeight(height, speed, delay, modal, onResolve) {
  if (!modal) {
    gsap.to(
      bar.getNodes().barContainer,
      typeof speed !== "undefined" ? speed / (animationSpeed * 1.3) : 0.3,
      {
        height: height + modes[mode].barPadding * 2,
        // delay: delay ? delay : 0,
        attr: {
          height: height + modes[mode].barPadding * 2
        },
        ease: "Linear.easeNone"
      }
    );
  }

  gsap.to(
    bar.getNodes().barElement,
    typeof speed !== "undefined" ? speed / (animationSpeed * 1.3) : 0.3,
    {
      // delay: delay ? delay : 0,
      attr: {
        height: height
      },
      height: height,
      onComplete: onResolve,
      ease: "Linear.easeNone"
    }
  );
}
