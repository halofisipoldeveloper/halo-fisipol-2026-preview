export default function Mountains() {
    return (
        <div className="flex justify-between items-end w-full pointer-events-none animate-mountain-up">
            <img
                src="/mountain.svg"
                alt="mountain"
                className="w-40 md:w-60 2x:w-80  object-cover object-bottom"
            />
            <img
                src="/mountain-1.svg"
                alt="mountain-1"
                className="w-40 md:w-60 2x:w-80  object-cover object-bottom"
            />
        </div>
    );
}
