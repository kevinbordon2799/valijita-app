import valijitaAppLogo from "../../assets/valijita-app-logo.png";

export const Header: React.FC = () => {
    return (
        <header className="w-full max-w-[800px] mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex py-4 px-6 justify-center items-center gap-6">
                <img src={valijitaAppLogo} alt="" className="w-[90px] object-contain object-center" />
            </div>
        </header>
    );
};
