export const Keyframes = () => (
    <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes ripple {
        0% { transform: scale(0.8); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-gradient { animation: gradientBG 15s ease infinite; }
      .ripple-bg:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: inherit;
        animation: ripple 2s cubic-bezier(0.65, 0, 0.34, 1) infinite;
        z-index: -1;
      }
    `}</style>
  );