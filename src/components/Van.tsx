export default function Van() {
    return (
        <div className="flex justify-between items-end w-full pointer-events-none ">
            <img
                src="/van.svg"
                alt="van"
                className="w-40 md:w-72 object-cover object-bottom  cactus-rotate-right"

            />
            <img
                src="/horse.svg"
                alt="horse"
          className="w-40 md:w-72 object-cover object-bottom  cactus-rotate-left"/>
        </div>
    );
}
