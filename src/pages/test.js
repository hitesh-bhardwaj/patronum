import Header from "@/components/Header";
import PreLoader from "@/components/PreLoader";

export default function Test() {
    return(
    <>
        <PreLoader />
        <Header />
        <div className="w-full h-screen flex justify-center items-center text-9xl">
            Hello
        </div>
    </>
    )
}