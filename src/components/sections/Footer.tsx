import { ImageSwitch } from "@/components/ImageSwitch";

function Wordmark({ outline = false }: { outline?: boolean }) {
  return (
    <svg viewBox="0 0 620 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AKNVRL">
      <text
        x="0"
        y="126"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="142"
        fontWeight="700"
        letterSpacing="-9"
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : "none"}
        strokeWidth={outline ? "1.5" : "0"}
      >
        AKNVRL
      </text>
    </svg>
  );
}

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">“</span>
          İyi yazılım yalnızca çalışan kod değil; doğru problemi çözen, gelişebilen bir sistemdir.
          <span className="text-black-56">”</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Akın Vural</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div text-black-72"><Wordmark /></div>
        <a href="#home" className="f-logo effectFade fadeZoom" aria-label="Başa dön">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/av.svg"
              dark="/assets/images/logo/av-dark.svg"
              width={48}
              height={32}
              alt="AV"
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          Tüm hakları saklıdır <br />© 2026 Akın Vural
        </p>
        <div className="isak effectFade fadeUp no-div text-black-56"><Wordmark outline /></div>
      </div>
    </div>
  );
}
