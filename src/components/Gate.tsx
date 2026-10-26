export default function Gate() {
    return (
        <div className="flex justify-center items-center w-full pointer-events-none animate-gate-in">
            <img
                src="/gate.svg"
                alt="gate"
                className="w-2xl md:w-5xl  object-cover object-bottom max-w-none"
            />

        </div>
    );
}
