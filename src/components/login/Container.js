export default function Container({ children }) {
    return (
        <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
            <div className=" flex flex-wrap justify-center">{children}</div>
        </div>
    );
}
