
import Image from "next/image";

export default function Header() {
    return (
        <div style={{ backgroundColor: "white", width: "100%", margin: "10px" }}>
            <Image
                alt="paira logo"
                height="38px"
                width="200px"
                src="/paira-logo.png"
            />
        </div>
    );
}
