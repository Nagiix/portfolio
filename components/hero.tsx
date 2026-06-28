import Image from "next/image";
import Sidebar from "./sidebar";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">
    {/* Background */}
        <Image
            src="/assets/bg.png"
            alt="Hero"
            fill
            priority
            className="object-cover"
        />
        <Image
            src="/assets/dither.png"
            alt="Dither"
            fill
            priority
            className="object-cover opacity-30"
        />
        {/* noise overlay */}
        <div className="noise" />
        {/* Content Grid */}
        <div className="absolute inset-0 grid grid-cols-12">
            <Sidebar />
            <div className="col-start-2 col-span-5 pl-25 flex items-center justify-center">
            <div className="relative aberration w-[700px] h-[350px]">
                {/* base image */}
                <Image
                    src="/assets/Text.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                />

                {/* red shift */}
                <div className="absolute inset-0 translate-x-[3px] opacity-50 mix-blend-screen">
                <Image
                    src="/assets/Text.png"
                    alt=""
                    fill
                    className="object-contain"
                />
                </div>

                {/* blue shift */}
                <div className="absolute inset-0 -translate-x-[1px] opacity-50 mix-blend-screen">
                <Image
                    src="/assets/Text.png"
                    alt=""
                    fill
                    className="object-contain"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}