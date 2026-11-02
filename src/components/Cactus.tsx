export default function Cactus() {
    return (
        <div className="flex justify-between items-end w-full pointer-events-none ">
            <img
                src="/cactus-1.svg"
                alt="cactus-1"
                className="w-28 md:w-36 2xl:w-52 object-cover object-bottom rotate-20 cactus-rotate-right"

            />
            <img
                src="/cactus.svg"
                alt="cactus"
          className="w-28 md:w-36 2xl:w-52 object-cover object-bottom -rotate-20 cactus-rotate-left"/>
        </div>
    );
}
