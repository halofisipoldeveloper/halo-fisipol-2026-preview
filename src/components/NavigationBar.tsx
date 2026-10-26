


const pages = [
  { title: 'Tiket', value: '/ticket' },
  { title: 'Rundown', value: '/rundown' },
  { title: 'Galeri', value: '/gallery' },
  { title: 'FAQ', value: '/faq' },

]


export default function NavigationBar() {
  return (
    <div className="w-full flex max-w-3xl py-4 px-8 mx-4 rounded-full bg-linear-to-b from-[#875033] to-[#4C2E1E] border-2 border-white items-center justify-evenly">
      {pages.map((page) => {
        return (
          <div key={page.title}>
            <a  href={page.value} className="text-white font-semibold"> { page.title}</a>
          </div>

        );
      })}

    </div>
  );
};
