export default function Page({ children }) {
    return (
        <div className="bg-login-background bg-cover bg-center w-screen max-height:auto relative flex flex-col justify-between">
            {children}
        </div>
    );
}
