interface ArticleCardProps {
    image: string;
    title: string;
    description: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description }) => {
    return (
        <article className="min-w-60 w-[285px]">
            <img src={image} alt={title} className="object-contain max-w-full rounded-lg aspect-[1.77] w-[285px]" />
            <div className="flex flex-col px-2 py-4 w-full bg-white rounded-none border border-solid border-[color:var(--Light-Colors-Platinum-2,#F6F8FB)] min-h-[212px]">
                <h3 className="text-xl font-bold leading-7 text-neutral-950">{title}</h3>
                <p className="mt-4 leading-6 text-neutral-950">{description}</p>
                <button className="flex gap-1 justify-center items-center self-start mt-4 font-medium leading-none text-blue-600">
                    <span className="self-stretch my-auto">Read more</span>
                    <img
                        src="arrowright.png"
                        alt="Arrow right"
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                </button>
            </div>
        </article>
    );
};
