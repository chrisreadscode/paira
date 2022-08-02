
import Image from "next/image";

export default function Header() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Image
                alt="paira logo"
                height="50px"
                width="200px"
                src="/paira-placeholder.png"
                z-index="0"
            />
        </div>
    );
}
