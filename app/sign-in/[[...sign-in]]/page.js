import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/image/background.png "
          width={900}
          height={900}
          className="object-contain h-full w-full "
        />

        <div className="absolute top-20 right-0">
          <SignIn />
        </div>
      </div>
    </>
  );
}
