import Node from "./Node";
import Train from "./Train";

export default function Leveling() {
    return (
        <section className="relative w-full h-full flex justify-center items-center">

            <div className="relative w-[1920px] shrink-0 translate-y-[500px]">
              <img src="/land.svg" alt="land" className="w-full scale-105 h-auto block max-w-none " />


                <img src="/mountain-2.svg" alt="mountain-2" className="w-96 absolute left-0 -top-52 max-w-none" />
                <img src="/mountain-4.svg" alt="mountain-4" className="w-36 absolute left-[520px] -top-24 max-w-none" />
                <img src="/start.svg" alt="start" className="w-20 absolute left-[480px] -top-14 max-w-none" />
                <img src="/cactus.svg" alt="cactus" className="w-20 absolute left-[400px] top-0 max-w-none" />
                <img src="/blue-house.svg" alt="blue-house" className="w-46 absolute left-[350px] top-30 max-w-none" />
                <img src="/cactus-2.svg" alt="cactus-2" className="w-16 absolute left-[700px] -top-20 max-w-none" />
                <img src="/cactus-2.svg" alt="cactus-2" className="w-24 absolute left-[280px] z-10 top-100 max-w-none" />

          <img src="/mountain-3.svg" alt="mountain-3" className="w-2xs absolute left-0 -top-10 max-w-none" />
                <img src="/pink-house-1.svg" alt="pink-house-1" className="w-xl absolute -right-[200px] -top-48 max-w-none" />
                <img src="/horses.svg" alt="horses" className="w-3xs absolute right-[300px] -top-0 max-w-none" />
                <img src="/cactus.svg" alt="cactus" className="w-16 absolute left-[200px] top-64 max-w-none" />
                <img src="/bridge.svg" alt="bridge" className="w-48 absolute right-[750px] -top-24 max-w-none" />
                <img src="/cactus-1.svg" alt="cactus-1" className="w-16 absolute right-[600px] -top-14 max-w-none" />
                <img src="/cactus-2.svg" alt="cactus-2" className="w-16 absolute right-[800px] top-20 max-w-none" />
                <img src="/post-office.svg" alt="post-office" className="w-32 2xl:w-46 absolute right-[800px] 2xl:right-[340px] z-20 top-170 2x:top-75 max-w-none" />
                <img src="/tower.svg" alt="post-office" className="w-28 2xl:w-46  absolute top-170 right-[1000px] 2xl:right-[450px] z-20 2x:top-110 max-w-none" />



                <div className="absolute w-full top-92 z-10 max-w-none">
                    <Train />
                </div>


                <div className="absolute left-[800px] 2xl:left-[600px] -top-[40px] z-30 max-w-none">
                  <Node title="Jelajah Prodi" textColor="text-[#9D83C4]" onClick={() => console.log('Clicked!')} />
                </div>

                <div className="absolute right-[790px] top-[160px] 2xl:right-[610px] 2xl:top-[60px]  z-5 max-w-none">
                  <Node title="Alur Masuk" onClick={() => console.log('Clicked!')} />
                </div>

                <div className="absolute left-[800px] bottom-[280px] 2xl:left-[600px] 2xl:bottom-[340px] z-30 max-w-none">
                  <Node title="FAQ" onClick={() => console.log('Clicked!')} />
                </div>


                <div className="absolute left-[800px] top-[150px] 2xl:left-[600px] 2xl:top-[200px]  z-5 max-w-none">
                  <Node title="Ticket" onClick={() => console.log('Clicked!')} />
                </div>

                <div className="absolute right-[800px] bottom-[300px] 2xl:right-[600px] 2xl:bottom-[320px] z-5 max-w-none">
                  <Node title="Rundown" onClick={() => console.log('Clicked!')} />
                </div>
            </div>

        </section>
    );
}
