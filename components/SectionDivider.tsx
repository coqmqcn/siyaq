export default function SectionDivider() {
  return (
    <div className="my-14 flex justify-center" aria-hidden="true">
      <svg width="180" height="20" viewBox="0 0 180 20" fill="none" className="opacity-60">
        <path d="M10 10h60M110 10h60" stroke="url(#g)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M90 2l6 8-6 8-6-8 6-8Z" stroke="url(#g)" fill="transparent"/>
        <defs>
          <linearGradient id="g" x1="0" x2="180" y1="0" y2="0">
            <stop stopColor="#C8A646"/><stop offset="1" stopColor="#BAC2CF"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
