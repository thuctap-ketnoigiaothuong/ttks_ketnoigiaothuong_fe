export function ExtraOfferSection() {
  return (
    <section className="w-[120%] max-md:w-full">
      <div className="py-4 pr-2 pl-4 rounded-lg border border-blue-400 border-solid bg-slate-50">
        <div className="flex gap-5 max-md:flex-col">
          {[1, 2].map((index) => (
            <article key={index} className="w-[33%] max-md:w-full">
              <div className="pb-8 bg-white rounded-lg border border-solid border-[color:var(--Light-Colors-Platinum-2,#F6F8FB)]">
                <div className="flex overflow-hidden relative flex-col p-2 w-full aspect-[0.967]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/c0f04eac25fd1b5d994e788a89e0f38b29418952?placeholderIfAbsent=true"
                    className="object-cover absolute inset-0 size-full"
                    alt="Product image"
                  />
                  <div className="relative self-end w-8">
                    <img
                      src={`URL_${212 + index}`}
                      className="object-contain w-full aspect-square"
                      alt="Action icon"
                    />
                  </div>
                  <div className="flex relative gap-1 self-start px-2 py-0.5 mt-5 text-sm leading-6 text-green-700 bg-white rounded border border-solid">
                    <img
                      src="/products/instock.png"
                      className="object-contain shrink-0 my-auto w-4 aspect-square"
                      alt="In stock icon"
                    />
                    <span>In stock</span>
                  </div>
                </div>
                <div className="flex flex-col px-2 mt-3.5">
                  <span className="text-sm leading-6 text-zinc-500">
                    Brand Name | Part No. 234565
                  </span>
                  <h3 className="mt-2.5 text-xl font-bold leading-7 text-neutral-950">
                    AMBER DECOR Small Lamp 60W, E27 590
                  </h3>
                </div>
              </div>
            </article>
          ))}

          <div className="w-[33%] max-md:w-full">
            <div className="self-stretch my-auto w-full">
              <h3 className="text-sm leading-6 text-neutral-950">
                Price for bundle:
              </h3>
              <div className="mt-2 text-xl font-bold leading-7">
                <span className="text-2xl text-blue-600">$95.00 </span>
                <span className="text-sm text-blue-600">net </span>
                <br />
                <span className="text-base line-through text-orange-500">$129.00 net</span>
              </div>
              <button className="flex gap-1 justify-center items-center px-12 py-3 mt-2 text-base font-medium leading-none text-white bg-blue-600 rounded-[30px] w-full">
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
