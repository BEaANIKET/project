const BlogSkeleton = () => {
    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900 w-full">
            <div className="space-y-6 flex items-center justify-center gap-6 w-full">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
                    {/* Heading */}
                    <div className="bg-gray-300 dark:bg-gray-600 h-6 w-1/2 rounded-md mb-4" />

                    {/* Paragraph (One Line) */}
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full rounded-md mb-3" />

                    {/* Paragraph with Link */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-200 dark:bg-gray-700 h-4 w-3/4 rounded-md mb-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSkeleton;
