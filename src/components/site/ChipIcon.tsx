import {
  SiFigma, SiCanvas, SiGithub, SiVercel, SiTiktok,
  SiZoom, SiSlackware, SiNotion, SiDiscord, SiFirefox,

  SiAutocad, SiSketchup, SiBlender, SiUnity, SiAndroidstudio,
  SiOpera, SiSpotify,
} from "react-icons/si";
import { FaWindows, FaMicrosoft, FaChrome, FaEdge } from "react-icons/fa";
import {
  Disc3, ShieldCheck, Gamepad2, Waves, Cpu, Network,
  Sparkles, Code2, Globe,
} from "lucide-react";

export function ChipIcon({ name, className = "size-3.5" }: { name: string; className?: string }) {
  switch (name) {
    // Design tools
    case "figma": return <SiFigma className={className} />;
    case "canva": return <SiCanvas className={className} />;
    case "blender": return <SiBlender className={className} />;
    case "sketchup": return <SiSketchup className={className} />;
    case "autocad": return <SiAutocad className={className} />;
    case "unity": return <SiUnity className={className} />;
    // OS & Microsoft
    case "windows": return <FaWindows className={className} />;
    case "microsoft": return <FaMicrosoft className={className} />;
    case "edge": return <FaEdge className={className} />;
    // Browsers
    case "chrome": return <FaChrome className={className} />;
    case "firefox": return <SiFirefox className={className} />;
    case "opera": return <SiOpera className={className} />;
    // Dev & deployment
    case "github": return <SiGithub className={className} />;
    case "vercel": return <SiVercel className={className} />;
    case "vscode": return <Code2 className={className} />;
    case "androidstudio": return <SiAndroidstudio className={className} />;
    // Productivity & comms
    case "zoom": return <SiZoom className={className} />;
    case "slack": return <SiSlackware className={className} />;

    case "notion": return <SiNotion className={className} />;
    case "discord": return <SiDiscord className={className} />;
    case "spotify": return <SiSpotify className={className} />;
    // AI / abstract
    case "ai": return <Sparkles className={className} />;
    case "cpu": return <Cpu className={className} />;
    case "network": return <Network className={className} />;
    case "globe": return <Globe className={className} />;
    // Tech ops
    case "disc": return <Disc3 className={className} />;
    case "shield": return <ShieldCheck className={className} />;
    case "gamepad": return <Gamepad2 className={className} />;
    case "octopus": return <Waves className={className} />;
    case "tiktok": return <SiTiktok className={className} />;
    default:
      return <span className={`${className} inline-block rounded-full bg-accent/60`} />;
  }
}
