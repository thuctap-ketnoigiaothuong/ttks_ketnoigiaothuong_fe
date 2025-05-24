import * as React from "react";

export function ProductTabs() {
  const [activeTab, setActiveTab] = React.useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Details' },
    { id: 'attachments', label: 'Attachments' },
    { id: 'shipping', label: 'Shipping & Payments' },
    { id: 'reviews', label: 'Reviews (0)' },
    { id: 'ask', label: 'Ask about product' }
  ];

  return (
    <section className="mt-20 w-full text-base text-neutral-950 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-2 items-center w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`self-stretch px-4 py-3 my-auto rounded-lg ${
              activeTab === tab.id
                ? 'font-bold text-white bg-blue-600'
                : 'bg-slate-50 text-neutral-950'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-center p-6 w-full bg-sky-100 rounded-none">
        {activeTab === 'description' && (
          <div className="flex flex-col justify-center p-6 w-full text-base text-neutral-950">
            <div className="flex flex-wrap gap-10 items-center py-12 pr-20 pl-12 bg-white rounded-lg">
              <div className="self-stretch my-auto leading-6 min-w-60 w-[657px]">
                <p className="text-neutral-950">
                  Ecommerce, also known as electronic commerce or internet commerce,
                  refers to the buying and selling of goods or services using the
                  internet, and the transfer of money and data to execute these
                  transactions.
                </p>
                <p className="mt-6 text-neutral-950">
                  Ecommerce, also known as electronic commerce or internet commerce,
                  refers to the buying and selling of goods or services using the
                  internet, and the transfer of money and data to execute these
                  transactions.
                </p>
              </div>

              <aside className="self-stretch p-4 my-auto bg-slate-50 min-w-60 w-[301px]">
                <h3 className="font-bold leading-tight">Details:</h3>
                <dl className="mt-4 w-full">
                  {['EAN', 'Color', 'Attribute 3', 'Attribute 4', 'Attribute 5', 'Attribute 6'].map((attr) => (
                    <div key={attr} className="mt-2 first:mt-0">
                      <dt className="text-neutral-950">{attr}</dt>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="flex flex-col justify-center p-6 w-full text-sm leading-6">
            <div className="flex flex-wrap gap-10 items-center py-12 pr-20 pl-12 bg-white rounded-lg">
              <div className="self-stretch my-auto min-w-60 w-[470px]">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className={`flex gap-6 items-start px-4 py-2 w-full ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="flex-1 shrink basis-0 text-neutral-950">
                      Parameter {index + 1}
                    </div>
                    <div className="flex-1 shrink font-semibold text-right basis-0 text-neutral-950">
                      Parameter's value
                    </div>
                  </div>
                ))}
              </div>
              <div className="self-stretch my-auto min-w-60 w-[470px]">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className={`flex gap-6 items-start px-4 py-2 w-full ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="flex-1 shrink basis-0 text-neutral-950">
                      Parameter {index + 1}
                    </div>
                    <div className="flex-1 shrink font-semibold text-right basis-0 text-neutral-950">
                      Parameter's value
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attachments' && (
          <div className="flex flex-col justify-center p-6 w-full">
            <div className="flex flex-col px-20 py-8 w-full bg-white">
              <p className="text-base text-neutral-950">
                Choose attachments which you want to download and click download button.
              </p>
              <div className="flex flex-col mt-8 max-w-full w-[1050px]">
                <div className="self-start">
                  <h3 className="text-base font-bold leading-tight text-blue-600">Documents</h3>
                  <div className="flex flex-col items-start mt-4">
                    <label className="flex gap-2 items-center self-stretch cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Technical data sheet: TC02882</span>
                    </label>
                    <label className="flex gap-2 items-center mt-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Blueprint</span>
                    </label>
                    <label className="flex gap-2 items-center mt-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Manual</span>
                    </label>
                  </div>
                </div>
                <hr className="my-6" />
                <div className="self-start">
                  <h3 className="text-base font-bold leading-tight text-blue-600">Certificates</h3>
                  <div className="mt-4">
                    <label className="flex gap-2 items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Certificate 1</span>
                    </label>
                    <label className="flex gap-2 items-center mt-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Certificate 2</span>
                    </label>
                    <label className="flex gap-2 items-center mt-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-blue-600 rounded" />
                      <span className="text-base text-neutral-950">Certificate 3</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="flex gap-2.5 justify-center items-center self-start px-8 py-3 mt-8 text-base leading-none text-white bg-blue-600 min-h-12 rounded-[30px]">
                <img src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/bf2fba2a71a4e0ee8a1cc52e620d353ffe63066f?placeholderIfAbsent=true" className="object-contain w-6 aspect-square" alt="Download icon" />
                <span>Download files</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="px-10 py-6 font-bold text-blue-600 bg-sky-100">
            <div className="flex flex-col justify-center px-20 py-10 w-full bg-white rounded-lg">
              <h3 className="text-2xl leading-tight">Shipping</h3>
              <p className="mt-8 text-neutral-950">Description text for maximum two text lines</p>
              <div className="flex flex-wrap gap-10 justify-center items-center self-start mt-8 leading-tight text-sky-800">
                <span className="self-stretch my-auto text-neutral-950 w-[147px]">Shipping type</span>
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex flex-col items-center self-stretch px-6 my-auto text-center w-[114px]">
                    <div className="flex shrink-0 rounded-full bg-blue-400 bg-opacity-30 h-[43px] w-[43px]" />
                    <span className="mt-3">Type {index}</span>
                  </div>
                ))}
              </div>
              <hr className="my-8" />
              <div className="flex flex-wrap gap-10 items-center self-start text-lg leading-8">
                <span className="self-stretch my-auto text-base font-bold leading-tight text-neutral-950 w-[116px]">
                  Shipping cost
                </span>
                {[1, 2, 3, 4].map((index) => (
                  <span key={index} className="self-stretch my-auto text-blue-600 w-[60px]">$45.00</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center px-20 py-10 mt-7 w-full bg-white rounded-lg">
              <h3 className="text-2xl leading-tight">Payment</h3>
              <p className="mt-8 text-neutral-950">Description text for maximum two text lines</p>
              <div className="flex flex-wrap gap-10 justify-center items-center self-start mt-8 leading-tight text-sky-800">
                <span className="self-stretch my-auto text-neutral-950 w-[147px]">Payment type</span>
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex flex-col items-center self-stretch px-6 my-auto text-center w-[114px]">
                    <div className="flex shrink-0 rounded-full bg-blue-400 bg-opacity-30 h-[43px] w-[43px]" />
                    <span className="mt-3">Type {index}</span>
                  </div>
                ))}
              </div>
              <hr className="my-8" />
              <div className="flex flex-wrap gap-10 items-start text-lg leading-8">
                <span className="text-base font-bold leading-tight text-neutral-950 w-[116px]">
                  Payment info
                </span>
                {[1, 2, 3, 4].map((index) => (
                  <span key={index} className="text-blue-600 w-[111px]">Lorem ipsum</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="flex flex-wrap items-start p-12 bg-sky-100">
            <div className="flex flex-col items-center min-w-60 text-neutral-950 w-[361px]">
              <div className="max-w-full w-[361px]">
                <h3 className="text-2xl font-bold leading-tight">Opinions (0)</h3>
                <p className="mt-12 text-lg leading-8">
                  This product does not yet have any reviews. Be the first to write a review!
                </p>
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/e4f5c67249d8d0ce8252af1b6b797001439e55a7?placeholderIfAbsent=true" className="object-contain mt-14 max-w-full aspect-square w-[191px]" alt="No reviews" />
            </div>

            <div className="flex flex-col min-w-60 w-[467px]">
              <h3 className="text-2xl font-bold leading-tight text-neutral-950">Rate us</h3>
              <div className="flex gap-2 items-start self-start mt-6">
                {[1, 2, 3, 4, 5].map((index) => (
                  <button key={index} aria-label={`Rate ${index} stars`}>
                    <img src={`URL_${1113 + index}`} className="object-contain w-8 aspect-square" alt="Star" />
                  </button>
                ))}
              </div>
              <div className="mt-6 max-w-full w-[467px]">
                <div className="w-full text-sm leading-6 whitespace-nowrap min-h-[76px] text-zinc-700">
                  <label className="block text-zinc-700">Name</label>
                  <input type="text" className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-12" />
                </div>
                <div className="mt-4 w-full text-sm leading-6 min-h-[133px] text-zinc-700">
                  <label className="block text-zinc-700">Tell about the product in few words</label>
                  <textarea className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-[105px]" />
                </div>
                <div className="mt-4 w-full min-h-24">
                  <label className="block text-sm leading-6 text-zinc-700">Attach file</label>
                  <div className="flex gap-2 justify-center items-center px-4 py-3 mt-1 text-base leading-none text-blue-600 bg-white rounded-lg border border-dashed border-blue-600">
                    <img src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/2919e226523c31cc7fd685e2aa16b110f0cb9a80?placeholderIfAbsent=true" className="object-contain w-6 aspect-square" alt="Upload icon" />
                    <span>Drag a file here</span>
                  </div>
                </div>
              </div>
              <button className="flex gap-2.5 justify-center items-center px-8 py-4 mt-6 w-full text-base leading-none text-white bg-blue-600 min-h-12 rounded-[30px]">
                Save opinion
              </button>
            </div>
          </div>
        )}

        {activeTab === 'ask' && (
          <div className="py-12 pl-12 w-full bg-sky-100">
            <div className="w-full text-sm leading-6 text-zinc-700">
              <p className="text-base text-neutral-950">
                Are you curious about the product? Do you have question about using it? Ask us!
              </p>
              <div className="mt-4 w-full whitespace-nowrap min-h-[76px]">
                <label className="block text-zinc-700">Name</label>
                <input type="text" className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-12" />
              </div>
              <div className="mt-4 w-full whitespace-nowrap min-h-[76px]">
                <label className="block text-zinc-700">E-mail</label>
                <input type="email" className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-12" />
              </div>
              <div className="mt-4 w-full min-h-[133px]">
                <label className="block text-zinc-700">Your request</label>
                <textarea className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-[105px]" />
              </div>
            </div>
            <button className="flex gap-2.5 justify-center items-center px-8 py-4 mt-6 w-full text-base leading-none text-white bg-blue-600 max-w-[467px] min-h-12 rounded-[30px]">
              Send request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
