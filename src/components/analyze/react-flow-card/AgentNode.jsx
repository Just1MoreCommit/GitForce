// src/components/AgentNode.jsx
import { Handle, Position } from '@xyflow/react';

// This lookup object maps each status string to a complete set of Tailwind classes.
// The reason we write out the FULL class names here instead of building them
// dynamically (like `border-[${color}]`) is because Tailwind works at build time —
// it scans your files for class name strings and generates CSS only for the ones it finds.
// If you build class names by concatenating strings, Tailwind never sees the full class
// name during its scan, never generates the CSS for it, and nothing shows up on screen.
// Writing them out fully here guarantees Tailwind picks them all up.
const statusStyles = {
  idle:    {
    border:  'border-[#555555]',
    text:    'text-[#555555]',
    dot:     'bg-[#555555]',
    handle:  '#555555',
    shadow:  'shadow-none',
  },
  running: {
    border:  'border-[#FFD700]',
    text:    'text-[#FFD700]',
    dot:     'bg-[#FFD700]',
    handle:  '#FFD700',
    shadow:  'shadow-[0_0_12px_#FFD70044]',
    // In Tailwind arbitrary values, spaces become underscores.
    // So "0 0 12px #FFD70044" becomes "0_0_12px_#FFD70044".
    // The "44" at the end is hex opacity — makes the glow semi-transparent
    // so it looks soft instead of harsh.
  },
  done:    {
    border:  'border-[#22c55e]',
    text:    'text-[#22c55e]',
    dot:     'bg-[#22c55e]',
    handle:  '#22c55e',
    shadow:  'shadow-[0_0_12px_#22c55e44]',
  },
  error:   {
    border:  'border-[#ef4444]',
    text:    'text-[#ef4444]',
    dot:     'bg-[#ef4444]',
    handle:  '#ef4444',
    shadow:  'shadow-[0_0_12px_#ef444444]',
  },
};

const AgentNode = ({ data, selected }) => {

  // Look up the style set for the current status.
  // The || statusStyles.idle is a safety net — if data.status is something
  // unexpected that doesn't match any key above, we fall back to idle styles
  // instead of getting undefined and crashing.
  const styles = statusStyles[data.status] || statusStyles.idle;

  return (
    <div
      className={`
        bg-[#0D0D0D]
        border ${styles.border}
        rounded
        py-3.5 px-4
        min-w-[200px]
        font-mono
        text-[#e5e5e5]
        transition-shadow duration-200 ease-in-out
        ${selected ? styles.shadow : 'shadow-none'}
      `}
      // bg-[#0D0D0D]        — your dark terminal background color
      // border              — adds a 1px solid border (Tailwind's default border is always 1px solid)
      // ${styles.border}    — sets the border color based on current status
      // rounded             — slight border radius, softens the corners a little
      // py-3.5 px-4         — padding. py = top and bottom (14px), px = left and right (16px)
      //                       this is the breathing room between the card edge and its content
      // min-w-[200px]       — card never shrinks below 200px wide even if content is short
      // font-mono           — applies a monospace font stack. if you want specifically
      //                       JetBrains Mono, see the note below this component
      // text-[#e5e5e5]      — default text color for everything inside the card.
      //                       slightly off-white instead of pure white — easier on the eyes
      //                       against a near-black background
      // transition-shadow   — tells the browser to animate ONLY the box-shadow property
      //                       when it changes. using transition-shadow instead of
      //                       transition-all is intentional — animating everything at once
      //                       can cause unexpected jank on complex elements
      // duration-200        — the animation takes 200 milliseconds (0.2 seconds)
      // ease-in-out         — the timing curve. starts slow, speeds up in the middle,
      //                       slows down at the end. feels smooth and natural for UI interactions
      // selected ? ...      — when the user clicks this node, selected becomes true.
      //                       we apply the colored glow shadow. when false, shadow-none
      //                       removes any shadow so there's no leftover glow
    >

      {/* The incoming connection dot — edges arriving at this node attach here.
          Handle is a React Flow component. We pass style as an inline style here
          (not Tailwind) because Handle's internal color is controlled via the
          style prop specifically — Tailwind classes don't reach inside it */}
        <Handle
            type="target"
            position={Position.Top}
            style={{
                width: 0,
                height: 0,
                background: 'transparent',
                border: 'none',
            }}
        />
      {/* Agent type label — the small eyebrow text at the top of the card.
          It's small, uppercase, and spaced out because at tiny font sizes
          uppercase + letter spacing makes text much more legible */}
      <div className={`text-[9px] ${styles.text} uppercase tracking-widest mb-1`}>
        {data.agentType}
      </div>

      {/* Agent name — the main title of the card. Larger and bold so your eye
          lands here first. White instead of off-white to make it the dominant
          element in the visual hierarchy */}
      <div className="text-sm font-bold text-white my-1">
        {data.label}
      </div>

      {/* Status row — the dot and status text side by side.
          flex makes them sit horizontally. items-center vertically aligns
          the dot with the text so they don't look misaligned.
          gap-1.5 puts a small space between the dot and the text */}
      <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-[#888888]">

        {/* The status dot — a small circle whose color matches the card's
            current status color. rounded-full turns a square into a circle.
            w and h are both 7px so it's a perfect circle not an oval */}
        <span className={`w-[7px] h-[7px] rounded-full ${styles.dot}`} />

        {data.statusText}
      </div>

      {/* The outgoing connection dot — edges leaving this node start here */}
        <Handle
            type="source"
            position={Position.Bottom}
            style={{
                width: 0,
                height: 0,
                background: 'transparent',
                border: 'none',
            }}
            />

    </div>
  );
};

export default AgentNode;