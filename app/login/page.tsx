import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-4 h-[700px] w-[1200px] rounded-xl overflow-hidden shadow-top-only">
        <div className="bg-myprimary col-span-1 hidden lg:flex xl:flex md:flex">
          <div className="absolute mt-36 mr-12">
            <Image className="hidden lg:flex xl:flex" src={"/ai.png"} alt="ai" width={400} height={400} />
          </div>
        </div>
        <div className="col-span-3 ml-32 lg:ml-0 xl:ml-0 md:ml-0">
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="ml-22 md:mr-18 lg:mr-18 xl:mr-18">
              <div>
                <h1 className="text-2xl font-semibold">Giriş</h1>
                <label className="font-semibold text-xs opacity-80">
                  Merhaba, Hoş geldin.
                </label>
              </div>
              <div>
                <form className="flex flex-col gap-5 mt-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold opacity-80">E-Posta</label>
                    <input type="text" placeholder="E-Posta" className="w-[300px] md:w-[500px] lg:w-[500px] xl:w-[500px] h-10 rounded-md px-2 outline-none border border-gray-400 text-[16px] ml-1" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold opacity-80">Şifre</label>
                    <input type="text" placeholder="Şifre" className="w-[300px] md:w-[500px] lg:w-[500px] xl:w-[500px] h-10 rounded-md px-2 outline-none border border-gray-400 text-[16px] ml-1" />
                  </div>
                </form>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center justify-center gap-2 ml-1">
                    <input type="checkbox" className="w-4" />
                    <label className="text-[15px]">Beni Hatırla</label>
                  </div>
                  <div>
                    <label className="text-sm text-blue-500 text-semibold">Şifrenizi mi unuttunuz?</label>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-button text-white w-full h-10 rounded-xl mt-16">Giriş Yap</button>
                </div>
                <div className="flex flex-col items-center justify-center mt-8 gap-5">
                  <div className="flex items-center justify-center gap-10">
                    <label className="text-sm">Henüz kayıt olmadınız mı?</label>
                    <label className="text-sm text-blue-500">Kayıt ol</label>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="border w-[300px] border-b-0 border-gray-500"></div>
                    <div className="absolute bg-white px-3"><label>veya</label></div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-8">
                    <Image src={"/google.png"} alt="google icon" width={25} height={25} />
                    <Image src={"/facebook.webp"} alt="google icon" width={25} height={25} />
                    <Image src={"/apple.png"} alt="google icon" width={25} height={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
