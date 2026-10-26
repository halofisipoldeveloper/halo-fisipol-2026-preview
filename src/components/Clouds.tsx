export default function Clouds() {
    return (
        <div className="flex justify-evenly items-end w-full pointer-events-none">
            <img
                src="/cloud.svg"
                alt="cloud"
                className="w-60 md:w-96  object-cover object-bottom animate-wiggle-left "
            />
            <img
                src="/cloud-1.svg"
                alt="cloud-1"
                className="w-60 md:w-96  object-cover object-bottom animate-wiggle-right"
            />
        </div>
    );
}
