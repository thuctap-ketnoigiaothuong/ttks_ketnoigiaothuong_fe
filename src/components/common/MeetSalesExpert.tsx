export function MeetSalesExpert() {
  return (
    <section className="grow p-6 w-full rounded-lg border border-solid bg-slate-50 border-[color:var(--Brand-Colors-Cornflower-Blue,#629CFF)]">
      <div className="w-full max-w-[467px]">
        <h2 className="text-2xl font-bold leading-tight text-blue-600">
          Contact our Expert!
        </h2>
        <div className="flex mt-4 w-full bg-white rounded-lg min-h-px" />
        <div className="flex gap-2 items-center mt-4 text-base text-neutral-950">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/70dbcef5144b42f36cf8181d4a1252ff56e34658?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-24 rounded-lg aspect-square"
            alt="Expert profile"
          />
          <div className="self-stretch my-auto min-w-60 w-[363px]">
            <h3 className="font-bold leading-tight">Name and Surname</h3>
            <p className="mt-3">Specialist - name of profession</p>
            <p className="mt-3">Company Product Group</p>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full text-base leading-none text-blue-600">
        <button className="flex gap-2.5 justify-center items-center px-8 py-3 w-full text-white bg-blue-600 min-h-12 rounded-[30px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/da215a4265ba89f7d4e6858d678e2eb1a09b6e15?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Calendar icon"
          />
          <span>Schedule a meeting</span>
        </button>

        <button className="flex gap-2.5 justify-center items-center px-8 py-3 mt-3 w-full bg-white min-h-12 rounded-[30px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/a4e75bc3078e2d078a0f6746c691779b0306b275?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Phone icon"
          />
          <span>Call: +65 553 123 543</span>
        </button>

        <button className="flex gap-2.5 justify-center items-center px-8 py-3 mt-3 w-full bg-white min-h-12 rounded-[30px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/0d4e296d72141cbb357a564644ce9f56ee9475dd?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Chat icon"
          />
          <span>Chat</span>
        </button>
      </div>
    </section>
  );
}
