// Lucide-style minimal icons for amenities and UI
const Icon = ({ name, size = 24, stroke = 1.5 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "parking": return (
      <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
    );
    case "wifi": return (
      <svg {...props}><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
    );
    case "ac": return (
      <svg {...props}><path d="M12 3v18"/><path d="M3 12h18"/><path d="m5.6 5.6 12.8 12.8"/><path d="m18.4 5.6-12.8 12.8"/></svg>
    );
    case "kitchen": return (
      <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="4" y1="11" x2="20" y2="11"/><circle cx="9" cy="7" r="0.5" fill="currentColor"/><circle cx="15" cy="7" r="0.5" fill="currentColor"/><line x1="12" y1="14" x2="12" y2="18"/></svg>
    );
    case "renovated": return (
      <svg {...props}><path d="M12 2 4 7v10l8 5 8-5V7l-8-5Z"/><path d="m9 12 2 2 4-4"/></svg>
    );
    case "transit": return (
      <svg {...props}><path d="M4 11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8"/><path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"/><path d="M4 11h16"/><circle cx="7.5" cy="15.5" r="1"/><circle cx="16.5" cy="15.5" r="1"/></svg>
    );
    case "key": return (
      <svg {...props}><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 9-9"/><path d="m17 6 3 3"/></svg>
    );
    case "laundry": return (
      <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="8" cy="6" r="0.5" fill="currentColor"/><circle cx="11" cy="6" r="0.5" fill="currentColor"/></svg>
    );
    case "arrow-right": return (
      <svg {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    );
    case "arrow-left": return (
      <svg {...props}><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
    );
    case "clock": return (
      <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    );
    case "arrow-up-right": return (
      <svg {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
    );
    case "map-pin": return (
      <svg {...props}><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    );
    case "calendar": return (
      <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    );
    case "users": return (
      <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    );
    case "ruler": return (
      <svg {...props}><path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/></svg>
    );
    case "star": return (
      <svg {...props} fill="currentColor" stroke="none"><path d="M12 2 14.5 8.5 21.5 9 16 13.5 17.5 21 12 17 6.5 21 8 13.5 2.5 9 9.5 8.5 12 2Z"/></svg>
    );
    default: return null;
  }
};

window.Icon = Icon;
