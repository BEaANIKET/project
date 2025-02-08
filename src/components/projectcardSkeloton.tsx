export const ProjectCardSkeloton = () => {
    return (
        <div className="bg-white dark:bg-gray-800  rounded-xl max-w-sm shadow-lg overflow-hidden h-full">
            {/* Image placeholder */}
            <div className="bg-gray-300 dark:bg-gray-600 h-48 w-full" />

            <div className="p-6">
                {/* Title placeholder */}
                <div className="bg-gray-300 dark:bg-gray-600 h-6 w-4/5 rounded-md mb-2" />

                {/* Description placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 h-4 w-9/10 rounded-md mb-2" />
                <div className="bg-gray-200 dark:bg-gray-700 h-4 w-3/5 rounded-md mb-2" />

                {/* Tags placeholder */}
                <div className="flex flex-wrap gap-2 my-3">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-300 dark:bg-gray-600 h-5 w-16 rounded-md"
                        />
                    ))}
                </div>

                {/* Buttons placeholder */}
                <div className="flex gap-4">
                    <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded-md" />
                    <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSkeloton;
